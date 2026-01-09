import { useState } from 'react';
import { Lock, Loader } from 'lucide-react';
import { pb } from '../../lib/pocketbase';

interface AdminLoginProps {
    onLogin: () => void;
}

const AdminLogin = ({ onLogin }: AdminLoginProps) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            // Fetch password from DB
            const records = await pb.collection('admin_config').getFullList({
                filter: 'key="password"',
                requestKey: null // Disable auto-cancellation for this one
            });

            const dbPassword = records[0]?.value || 'admin123';

            if (password === dbPassword) {
                onLogin();
            } else {
                setError('Contraseña incorrecta');
            }
        } catch (e) {
            console.error('Login error:', e);
            // Fallback for safety if DB is not ready
            if (password === 'admin123') {
                onLogin();
            } else {
                setError('Login error / Contraseña incorrecta');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-slate-100 dark:bg-slate-900">
            <div className="w-full max-w-md p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 animate-slide-up">
                <div className="flex flex-col items-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
                        <Lock size={32} />
                    </div>
                    <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Admin Panel</h1>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Acceso restringido</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Contraseña"
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                            autoFocus
                        />
                        {error && <p className="text-red-500 text-sm mt-2 ml-1">{error}</p>}
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-lg shadow-blue-500/30 transition transform active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                        {loading ? <Loader className="animate-spin" size={20} /> : 'Entrar'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
