import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { ShopItem, Categories, Lang, AppMode, ViewMode, LocalizedItem, AuthState } from '../types';
import { defaultCategories } from '../data/constants';
import { pb } from '../lib/pocketbase';

interface SyncState {
    connected: boolean;
    code: string | null;
    recordId: string | null;
    msg: string;
    msgType: 'info' | 'success' | 'error';
    syncHistory: string[];
    lastSync: number | null;
    syncVersion: number;
}

interface ShopState {
    // Data
    items: ShopItem[];
    categories: Categories;

    // UI State
    lang: Lang;
    appMode: AppMode;
    viewMode: ViewMode;
    isDark: boolean;
    isAmoled: boolean;
    notifyOnAdd: boolean;
    notifyOnCheck: boolean;
    serverName: string;

    // Sync & Auth
    sync: SyncState;
    auth: AuthState;

    // Actions
    setLang: (lang: Lang) => void;
    setServerName: (name: string) => void;
    setAppMode: (mode: AppMode) => void;
    setViewMode: (mode: ViewMode) => void;
    toggleTheme: () => void;
    toggleAmoled: () => void;
    setNotifyOnAdd: (val: boolean) => void;
    setNotifyOnCheck: (val: boolean) => void;

    addItem: (name: string, cat?: string) => void;
    toggleCheck: (id: number) => void;
    deleteItem: (id: number) => void;
    updateItemNote: (id: number, note: string) => void;
    clearCompleted: () => void;

    addCategoryItem: (catKey: string, name: LocalizedItem) => void;
    removeCategoryItem: (catKey: string, idx: number) => void;

    // Category Management
    addCategory: (key: string, icon: string) => void;
    removeCategory: (key: string) => void;

    // Sync Actions
    setSyncState: (s: Partial<SyncState>) => void;
    syncFromRemote: (data: { items: ShopItem[], categories?: Categories }) => void;
    resetDefaults: () => void;
    importData: (items: ShopItem[], categories: Categories) => void;
    addToSyncHistory: (code: string) => void;
    loadCatalog: () => Promise<void>;

    // Auth Actions
    setAuth: (auth: Partial<AuthState>) => void;
    logout: () => void;
}

export const useShopStore = create<ShopState>()(
    persist(
        (set) => ({
            items: [],
            categories: defaultCategories,
            lang: 'ca',
            appMode: 'planning',
            viewMode: 'list',
            isDark: false,
            isAmoled: false,
            notifyOnAdd: true,
            notifyOnCheck: true,
            serverName: 'ShopList',
            sync: { connected: false, code: null, recordId: null, msg: '', msgType: 'info', syncHistory: [], lastSync: null, syncVersion: 0 },
            auth: { isLoggedIn: false, email: null, userId: null },

            setLang: (lang) => set({ lang }),
            setServerName: (serverName) => set({ serverName }),
            setAppMode: (appMode) => set({ appMode }),
            setViewMode: (viewMode) => set({ viewMode }),
            toggleTheme: () => set((state) => {
                const newDark = !state.isDark;
                return { isDark: newDark, isAmoled: newDark ? state.isAmoled : false };
            }),
            toggleAmoled: () => set((state) => {
                const newAmoled = !state.isAmoled;
                return { isAmoled: newAmoled, isDark: newAmoled ? true : state.isDark };
            }),
            setNotifyOnAdd: (notifyOnAdd) => set({ notifyOnAdd }),
            setNotifyOnCheck: (notifyOnCheck) => set({ notifyOnCheck }),

            addItem: (name, cat = 'other') => set((state) => ({
                items: [{ id: Date.now(), name, checked: false, note: '', category: cat }, ...state.items]
            })),
            toggleCheck: (id) => set((state) => ({
                items: state.items.map(i => i.id === id ? { ...i, checked: !i.checked } : i)
            })),
            deleteItem: (id) => set((state) => ({
                items: state.items.filter(i => i.id !== id)
            })),
            updateItemNote: (id, note) => set((state) => ({
                items: state.items.map(i => i.id === id ? { ...i, note } : i)
            })),
            clearCompleted: () => set((state) => ({
                items: state.items.filter(i => !i.checked)
            })),

            addCategoryItem: (catKey, item) => set((state) => {
                const cats = { ...state.categories };
                if (cats[catKey]) {
                    cats[catKey].items = [...cats[catKey].items, item];
                }
                return { categories: cats };
            }),
            removeCategoryItem: (catKey, idx) => set((state) => {
                const cats = { ...state.categories };
                if (cats[catKey]) {
                    const newItems = [...cats[catKey].items];
                    newItems.splice(idx, 1);
                    cats[catKey].items = newItems;
                }
                return { categories: cats };
            }),

            // Category Management
            addCategory: (key, icon) => set((state) => {
                const cats = { ...state.categories };
                if (!cats[key]) {
                    cats[key] = { icon, items: [] };
                }
                return { categories: cats };
            }),
            removeCategory: (key) => set((state) => {
                const cats = { ...state.categories };
                delete cats[key];
                return { categories: cats };
            }),

            setSyncState: (s) => set((state) => ({ sync: { ...state.sync, ...s } })),
            syncFromRemote: (data) => set({ items: data.items, categories: data.categories || defaultCategories }),

            resetDefaults: () => set({ items: [], categories: defaultCategories }),
            importData: (items, categories) => set({ items, categories }),

            // Auth Actions
            setAuth: (auth) => set((state) => ({ auth: { ...state.auth, ...auth } })),
            logout: () => set({ auth: { isLoggedIn: false, email: null, userId: null } }),
            addToSyncHistory: (code: string) => set((state) => {
                const history = [code, ...state.sync.syncHistory.filter(c => c !== code)].slice(0, 3);
                return { sync: { ...state.sync, syncHistory: history } };
            }),

            loadCatalog: async () => {
                try {
                    const cats = await pb.collection('catalog_categories').getFullList({ sort: 'order', filter: 'hidden = false' });
                    const items = await pb.collection('catalog_items').getFullList({ expand: 'category', filter: 'hidden = false' });

                    if (cats.length === 0) return; // Keep defaults if DB empty or all hidden

                    const newCats: Categories = {};
                    cats.forEach((c: any) => {
                        newCats[c.key] = {
                            icon: c.icon,
                            items: [],
                            color: c.color
                        };
                    });

                    items.forEach((i: any) => {
                        const catKey = i.expand?.category?.key;
                        const catHidden = i.expand?.category?.hidden;

                        // Only add if category is also not hidden (extra safety)
                        if (catKey && newCats[catKey] && !catHidden) {
                            newCats[catKey].items.push({
                                es: i.name_es || '',
                                ca: i.name_ca || i.name_es || '',
                                en: i.name_en || i.name_es || ''
                            });
                        }
                    });

                    set({ categories: newCats });

                    // Load server config
                    try {
                        const config = await pb.collection('admin_config').getFullList({ filter: 'key="server_name"' });
                        if (config[0]) {
                            set({ serverName: config[0].value });
                        }
                    } catch (e) {
                        console.error("Failed to load server name", e);
                    }
                } catch (e) {
                    console.error("Failed to load catalog", e);
                }
            }
        }),
        {
            name: 'shoplist-storage',
            partialize: (state) => ({
                items: state.items,
                categories: state.categories,
                lang: state.lang,
                appMode: state.appMode,
                viewMode: state.viewMode,
                isDark: state.isDark,
                isAmoled: state.isAmoled,
                notifyOnAdd: state.notifyOnAdd,
                notifyOnCheck: state.notifyOnCheck,
                serverName: state.serverName,
                // Keep code/recordId for reconnection, but reset connection status
                sync: {
                    connected: false,
                    code: state.sync.code,
                    recordId: state.sync.recordId,
                    msg: '',
                    msgType: 'info' as const,
                    syncHistory: state.sync.syncHistory,
                    lastSync: state.sync.lastSync,
                    syncVersion: 0
                },
                auth: state.auth
            })
        }
    )
);
