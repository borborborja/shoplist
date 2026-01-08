import { useState } from 'react';
import { Check, Trash2, X, List, LayoutGrid, AlignJustify, StickyNote, ShoppingBasket } from 'lucide-react';
import { useShopStore } from '../../store/shopStore';
import { translations, categoryStyles, defaultCategories } from '../../data/constants';
import type { ShopItem } from '../../types';
import ProductModal from '../modals/ProductModal';

const ListView = () => {
    const { items, categories, lang, viewMode, setViewMode, toggleCheck, deleteItem, clearCompleted, sync } = useShopStore();
    const t = translations[lang];
    const [editingItem, setEditingItem] = useState<ShopItem | null>(null);

    // Computed
    const completedItems = items.filter(i => i.checked);
    const activeItems = items.filter(i => !i.checked);

    const activeItemsGrouped: Record<string, ShopItem[]> = {};
    activeItems.forEach(item => {
        const cat = item.category || 'other';
        if (!activeItemsGrouped[cat]) activeItemsGrouped[cat] = [];
        activeItemsGrouped[cat].push(item);
    });

    const getModeIcon = () => {
        if (viewMode === 'list') return <List size={14} />;
        if (viewMode === 'compact') return <AlignJustify size={14} />;
        return <LayoutGrid size={14} />;
    };

    const getModeText = () => {
        if (viewMode === 'list') return 'List';
        if (viewMode === 'compact') return 'Compact';
        return 'Grid'; // Simplified for now, or use translation
    };

    const cycleViewMode = () => {
        const modes = ['list', 'compact', 'grid'] as const;
        const currentIdx = modes.indexOf(viewMode);
        setViewMode(modes[(currentIdx + 1) % modes.length]);
    };

    const getItemClass = () => {
        if (viewMode === 'list') return 'p-3.5 mb-2';
        if (viewMode === 'compact') return 'p-2 mb-1.5';
        if (viewMode === 'grid') return 'p-3 h-full mb-0';
        return '';
    };

    const handleDelete = (id: number, e: React.MouseEvent) => {
        e.stopPropagation();
        deleteItem(id);
        if (navigator.vibrate) navigator.vibrate(10);
    };

    return (
        <div>
            {/* List Header */}
            <div className="flex justify-between items-end mb-4 px-1">
                <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-bold text-slate-800 dark:text-white tracking-tight">{t.myList}</h2>
                    {sync.connected && (
                        <div className="flex items-center justify-center w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                    )}
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={cycleViewMode}
                        className="flex items-center gap-2 text-[10px] font-bold text-slate-500 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-1.5 rounded-lg transition shadow-sm"
                    >
                        {getModeIcon()} {getModeText()}
                    </button>
                    {completedItems.length > 0 && (
                        <button
                            onClick={() => { if (confirm(t.clearComp + '?')) clearCompleted(); }}
                            className="text-[10px] font-bold text-red-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 px-3 py-1.5 rounded-lg transition uppercase tracking-wider bg-white dark:bg-slate-800 border border-transparent hover:border-red-100"
                        >
                            {t.clearComp}
                        </button>
                    )}
                </div>
            </div>

            {/* Empty State */}
            {items.length === 0 && (
                <div className="text-center py-16 flex flex-col items-center justify-center opacity-50">
                    <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
                        <ShoppingBasket size={32} className="text-slate-300 dark:text-slate-600" />
                    </div>
                    <p className="text-sm text-slate-400 font-bold tracking-wide">{t.empty}</p>
                </div>
            )}

            {/* Active Items */}
            {Object.entries(activeItemsGrouped).map(([key, groupItems]) => {
                const catDef = categories[key] || defaultCategories['other'];
                const style = categoryStyles[key] || categoryStyles['other'];

                return (
                    <div key={key} className="mb-2 animate-slide-up">
                        <div className="flex items-center gap-2 mb-2 pl-1">
                            <span className="text-lg">{catDef.icon}</span>
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                                {t.cats[key as keyof typeof t.cats] || key}
                            </h3>
                            <span className="text-[10px] font-bold text-slate-300 bg-slate-100 dark:bg-slate-800 dark:text-slate-600 px-1.5 rounded-md ml-auto">{groupItems.length}</span>
                        </div>
                        <div className={viewMode === 'grid' ? 'grid grid-cols-2 gap-2' : 'space-y-2'}>
                            {groupItems.map(item => (
                                <div
                                    key={item.id}
                                    onClick={() => setEditingItem(item)}
                                    className={`group relative flex items-center bg-white dark:bg-darkSurface rounded-xl transition-all border border-slate-100 dark:border-slate-700/50 shadow-sm hover:shadow-md overflow-hidden cursor-pointer active:scale-[0.99] ${getItemClass()}`}
                                >
                                    {/* Accent */}
                                    <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${style.bgSolid}`}></div>

                                    {/* Check */}
                                    <div className="flex-shrink-0 ml-2 mr-3 z-10" onClick={(e) => e.stopPropagation()}>
                                        <button
                                            onClick={() => { toggleCheck(item.id); if (navigator.vibrate) navigator.vibrate(5); }}
                                            className={`rounded-full border-2 border-slate-300 dark:border-slate-600 hover:border-blue-500 flex items-center justify-center transition-all bg-transparent text-transparent ${viewMode === 'compact' ? 'w-5 h-5' : 'w-6 h-6'
                                                }`}
                                        >
                                            <Check size={viewMode === 'compact' ? 10 : 14} className="opacity-0" />
                                        </button>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-grow overflow-hidden z-10 py-1">
                                        <p className={`font-bold truncate text-slate-700 dark:text-slate-200 ${viewMode === 'compact' ? 'text-xs' : 'text-sm'}`}>
                                            {item.name}
                                        </p>
                                        {item.note && viewMode !== 'compact' && (
                                            <p className="text-[10px] text-slate-400 truncate mt-0.5 flex items-center gap-1">
                                                <StickyNote size={10} /> {item.note}
                                            </p>
                                        )}
                                    </div>

                                    {/* Delete */}
                                    <button
                                        onClick={(e) => handleDelete(item.id, e)}
                                        className="w-8 h-8 flex items-center justify-center text-slate-300 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition z-10 opacity-0 group-hover:opacity-100"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}

            {/* Completed Items */}
            {completedItems.length > 0 && (
                <div className="mt-8 pt-6 border-t border-dashed border-slate-200 dark:border-slate-700/50 opacity-60 hover:opacity-100 transition-opacity">
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center justify-center gap-2">
                        <span>{t.completed}</span>
                        <span className="bg-slate-100 dark:bg-slate-700 text-slate-500 px-2 py-0.5 rounded-full text-[10px]">{completedItems.length}</span>
                    </h3>
                    <div className={viewMode === 'grid' ? 'grid grid-cols-2 gap-2' : 'space-y-2'}>
                        {completedItems.map(item => (
                            <div
                                key={item.id}
                                onClick={() => setEditingItem(item)}
                                className={`flex items-center bg-slate-50 dark:bg-slate-800/50 rounded-xl transition-all border border-transparent grayscale cursor-pointer ${getItemClass()}`}
                            >
                                <div className="flex-shrink-0 mr-3" onClick={(e) => e.stopPropagation()}>
                                    <button
                                        onClick={() => toggleCheck(item.id)}
                                        className={`rounded-full border-2 border-slate-400 bg-slate-400 dark:border-slate-600 dark:bg-slate-600 text-white flex items-center justify-center ${viewMode === 'compact' ? 'w-5 h-5' : 'w-6 h-6'
                                            }`}
                                    >
                                        <Check size={viewMode === 'compact' ? 10 : 14} />
                                    </button>
                                </div>
                                <div className="flex-grow overflow-hidden">
                                    <p className={`font-medium truncate transition-all line-through text-slate-400 ${viewMode === 'compact' ? 'text-xs' : 'text-sm'}`}>
                                        {item.name}
                                    </p>
                                </div>
                                <button
                                    onClick={(e) => handleDelete(item.id, e)}
                                    className="p-2 text-slate-300 hover:text-red-500 hover:bg-slate-200 rounded-lg"
                                >
                                    <X size={16} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Editing Product Modal */}
            {editingItem && (
                <ProductModal item={editingItem} onClose={() => setEditingItem(null)} />
            )}
        </div>
    );
};

export default ListView;
