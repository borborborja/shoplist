import { useState } from 'react';
import { Plus } from 'lucide-react';
import { useShopStore } from '../../store/shopStore';
import { translations } from '../../data/constants';

const AddItemInput = () => {
    const [val, setVal] = useState('');
    const { addItem, lang } = useShopStore();
    const t = translations[lang];

    const handleSubmit = () => {
        if (!val.trim()) return;
        addItem(val.trim());
        setVal('');
        if (navigator.vibrate) navigator.vibrate(10);
    };

    return (
        <div className="mb-6 relative group z-10">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl opacity-20 group-hover:opacity-40 transition duration-500 blur"></div>
            <div className="relative flex shadow-xl shadow-indigo-500/5 rounded-2xl overflow-hidden bg-white dark:bg-darkSurface transition-colors ring-1 ring-slate-900/5 dark:ring-white/10">
                <input
                    type="text"
                    value={val}
                    onChange={(e) => setVal(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                    className="flex-grow p-4 pl-5 bg-transparent focus:outline-none dark:text-white placeholder-slate-400 text-lg font-medium"
                    placeholder={t.placeholder}
                />
                <button
                    onClick={handleSubmit}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-5 font-bold transition flex items-center justify-center border-l border-slate-100 dark:border-slate-700"
                >
                    <Plus size={24} />
                </button>
            </div>
        </div>
    );
};

export default AddItemInput;
