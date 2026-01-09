import { useState, useEffect } from 'react';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';

const AdminLayout = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('admin_token');
        if (token === 'valid') {
            setIsAuthenticated(true);
        }
    }, []);

    const handleLogin = () => {
        localStorage.setItem('admin_token', 'valid');
        setIsAuthenticated(true);
    };

    const handleLogout = () => {
        localStorage.removeItem('admin_token');
        setIsAuthenticated(false);
    };

    if (!isAuthenticated) {
        return <AdminLogin onLogin={handleLogin} />;
    }

    return <AdminDashboard onLogout={handleLogout} />;
};

export default AdminLayout;
