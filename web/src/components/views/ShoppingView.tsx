import { useShopStore } from '../../store/shopStore';
import { translations } from '../../data/constants';

const ShoppingView = () => {
    const { items, lang } = useShopStore();
    const t = translations[lang];

    const total = items.length;
    const count = items.filter(i => i.checked).length;
    const percent = total === 0 ? 0 : Math.round((count / total) * 100);

    return (
        <div className="mb-6 animate-fade-in">
            <div className="bg-white dark:bg-darkSurface p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700/50 mb-4">
                <div className="flex justify-between w-full text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                    <span>{t.progress}</span>
                    <div className="flex gap-2">
                        <span>{count} / {total}</span>
                        <span className="text-slate-400 dark:text-slate-500">{percent}%</span>
                    </div>
                </div>
                <div className="w-full h-3 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden shadow-inner">
                    <div
                        className="h-full bg-gradient-to-r from-green-400 to-emerald-600 rounded-full transition-all duration-500 ease-out shadow-sm"
                        style={{ width: `${percent}%` }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingView;
