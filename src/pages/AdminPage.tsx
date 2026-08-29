import { useState } from 'react';
import { ArrowLeft, LayoutDashboard, Building, MessageSquare, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AdminLogin } from '../components/admin/AdminLogin';
import { AdminDashboard } from '../components/admin/AdminDashboard';
import { AdminProjects } from '../components/admin/AdminProjects';
import { AdminInquiries } from '../components/admin/AdminInquiries';
import { AdminBlogs } from '../components/admin/AdminBlogs';

export function AdminPage() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  if (!isAuthenticated) {
    return <AdminLogin onLogin={() => setIsAuthenticated(true)} />;
  }

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'projects', label: 'Projects', icon: Building },
    { id: 'inquiries', label: 'Inquiries', icon: MessageSquare },
    { id: 'blogs', label: 'Blogs', icon: FileText },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2 sm:gap-4">
              <button
                onClick={() => navigate('/')}
                className="flex items-center gap-1 sm:gap-2 text-gray-600 hover:text-[#d4af37] transition-colors text-sm sm:text-base"
              >
                <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="hidden sm:inline">Back to Website</span>
                <span className="sm:hidden">Back</span>
              </button>
              <div className="h-6 w-px bg-gray-300 hidden sm:block" />
              <h1 className="text-lg sm:text-xl font-bold text-[#0a1628]">Admin Panel</h1>
            </div>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="text-gray-600 hover:text-red-600 transition-colors text-sm sm:text-base"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          <div className="lg:w-64">
            {/* Mobile horizontal tabs */}
            <nav className="lg:hidden">
              <div className="flex gap-2 overflow-x-auto pb-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                        activeTab === tab.id
                          ? 'bg-[#d4af37] text-white'
                          : 'text-gray-700 hover:bg-gray-100 bg-white'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </nav>
            
            {/* Desktop vertical tabs */}
            <nav className="hidden lg:block space-y-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === tab.id
                        ? 'bg-[#d4af37] text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="flex-1 min-w-0">
            {activeTab === 'dashboard' && <AdminDashboard />}
            {activeTab === 'projects' && <AdminProjects />}
            {activeTab === 'inquiries' && <AdminInquiries />}
            {activeTab === 'blogs' && <AdminBlogs />}
          </div>
        </div>
      </div>
    </div>
  );
}