import React, { useState, useEffect } from 'react';
import AdminLogin from '../components/admin/AdminLogin';
import AdminDashboard from '../components/admin/AdminDashboard';

export default function Admin() {
  const [user, setUser] = useState(null);
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    // Check localStorage and sessionStorage for existing valid session
    const token = localStorage.getItem('admin_token') || sessionStorage.getItem('admin_token');
    const storedUser = localStorage.getItem('admin_user') || sessionStorage.getItem('admin_user');

    if (token && storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch {
        setUser({ email: 'admin@manickdental.com', username: 'Clinic Administrator' });
      }
    }
    setCheckingAuth(false);
  }, []);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_user');
    sessionStorage.removeItem('admin_token');
    sessionStorage.removeItem('admin_user');
    setUser(null);
  };

  if (checkingAuth) {
    return (
      <div className="min-h-screen bg-[#FAF6F0] flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-[#2D1E40] border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!user) {
    return <AdminLogin onLoginSuccess={handleLoginSuccess} />;
  }

  return <AdminDashboard user={user} onLogout={handleLogout} />;
}
