import { useState, useEffect } from 'react';
import { useShopStore } from './store/shopStore';
import { pb } from './lib/pocketbase';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import PlanningView from './components/views/PlanningView';
import ShoppingView from './components/views/ShoppingView';
import ListView from './components/views/ListView';
import SettingsModal from './components/modals/SettingsModal';

function App() {
  const { isDark, isAmoled, appMode, items, categories } = useShopStore();
  const [showSettings, setShowSettings] = useState(false);

  // Sync local changes to remote when items/categories change
  useEffect(() => {
    const syncToRemote = async () => {
      const { sync } = useShopStore.getState();
      if (sync.connected && sync.recordId) {
        try {
          await pb.collection('shopping_lists').update(sync.recordId, {
            data: { items, categories }
          });
        } catch (e) {
          console.error('Failed to sync to remote:', e);
        }
      }
    };

    // Debounce sync
    const timer = setTimeout(syncToRemote, 500);
    return () => clearTimeout(timer);
  }, [items, categories]);

  return (
    <div className={`${isDark ? 'dark' : ''} ${isAmoled ? 'amoled' : ''}`}>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-darkBg dark:via-darkBg dark:to-darkBg transition-colors duration-500">
        <Header openSettings={() => setShowSettings(true)} />

        <main className="pt-20 pb-24 px-4 max-w-lg mx-auto">
          {appMode === 'planning' ? <PlanningView /> : <ShoppingView />}
          <ListView />
        </main>

        <Footer />

        {showSettings && <SettingsModal onClose={() => setShowSettings(false)} />}
      </div>
    </div>
  );
}

export default App;
