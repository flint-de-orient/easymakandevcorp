import { useState, useEffect } from 'react';
import { Building2, Mail, PenTool, TrendingUp, Activity, Clock, Star, Users } from 'lucide-react';
import { Card } from '../ui/card';

export function AdminDashboard() {
  const [stats, setStats] = useState({
    projects: 0,
    inquiries: 0,
    blogs: 0,
    recentActivity: []
  });

  useEffect(() => {
    const projects = JSON.parse(localStorage.getItem('admin_projects') || '[]');
    const inquiries = JSON.parse(localStorage.getItem('inquiries') || '[]');
    const blogs = JSON.parse(localStorage.getItem('admin_blogs') || '[]');

    setStats({
      projects: projects.length,
      inquiries: inquiries.length,
      blogs: blogs.length,
      recentActivity: [
        ...inquiries.slice(-3).map((i: any) => ({ type: 'inquiry', data: i })),
        ...projects.slice(-2).map((p: any) => ({ type: 'project', data: p }))
      ].slice(0, 5)
    });
  }, []);

  const statCards = [
    { 
      title: 'Total Projects', 
      value: stats.projects, 
      icon: Building2, 
      gradient: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      description: 'Active developments'
    },
    { 
      title: 'Inquiries', 
      value: stats.inquiries, 
      icon: Mail, 
      gradient: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      description: 'New leads today'
    },
    { 
      title: 'Blog Posts', 
      value: stats.blogs, 
      icon: PenTool, 
      gradient: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      description: 'Published articles'
    },
    { 
      title: 'Growth', 
      value: '+12%', 
      icon: TrendingUp, 
      gradient: 'from-[#d4af37] to-[#c9a959]',
      bgColor: 'bg-yellow-50',
      iconColor: 'text-[#d4af37]',
      description: 'This month'
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-[#0a1628] flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-[#d4af37] to-[#c9a959] rounded-xl flex items-center justify-center shadow-lg">
                <Activity className="h-6 w-6 text-white" />
              </div>
              Dashboard Overview
            </h2>
            <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your business today.</p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#d4af37] to-[#c9a959] text-white rounded-xl shadow-lg">
            <Clock className="h-4 w-4" />
            <span className="text-sm font-medium">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statCards.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                <div className="relative p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-2xl ${stat.bgColor} shadow-md`}>
                      <Icon className={`h-7 w-7 ${stat.iconColor}`} />
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 text-[#d4af37] fill-current" />
                        <span className="text-xs text-gray-500 font-medium">Live</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                    <p className="text-3xl font-bold text-[#0a1628] mb-2">{stat.value}</p>
                    <p className="text-xs text-gray-500">{stat.description}</p>
                  </div>
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
                </div>
              </Card>
            );
          })}
        </div>

        <Card className="p-6 bg-gradient-to-br from-white to-gray-50 border-0 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-[#0a1628] flex items-center gap-2">
              <div className="w-2 h-6 bg-[#d4af37] rounded-full"></div>
              Recent Activity
            </h3>
            <div className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              Last 5 items
            </div>
          </div>
          <div className="space-y-4">
            {stats.recentActivity.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center shadow-inner">
                  <Activity className="h-10 w-10 text-gray-400" />
                </div>
                <p className="text-gray-500 font-medium">No recent activity</p>
                <p className="text-sm text-gray-400 mt-1">Activity will appear here as it happens</p>
              </div>
            ) : (
              stats.recentActivity.map((activity: any, index) => (
                <div key={index} className="group relative">
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-[#d4af37]/30 hover:shadow-md transition-all duration-200">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center shadow-md ${
                      activity.type === 'inquiry' 
                        ? 'bg-gradient-to-br from-green-100 to-green-200 text-green-600' 
                        : 'bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600'
                    }`}>
                      {activity.type === 'inquiry' ? (
                        <Mail className="h-6 w-6" />
                      ) : (
                        <Building2 className="h-6 w-6" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-semibold text-[#0a1628] group-hover:text-[#d4af37] transition-colors">
                            {activity.type === 'inquiry' 
                              ? `New inquiry from ${activity.data.name}`
                              : `Project: ${activity.data.name}`
                            }
                          </p>
                          <p className="text-sm text-gray-600 mt-1">
                            {activity.type === 'inquiry' 
                              ? `Email: ${activity.data.email || 'N/A'}`
                              : 'Project update'
                            }
                          </p>
                        </div>
                        <div className="text-right flex-shrink-0 ml-4">
                          <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            activity.type === 'inquiry'
                              ? 'bg-green-50 text-green-700 border border-green-200'
                              : 'bg-blue-50 text-blue-700 border border-blue-200'
                          }`}>
                            {activity.type === 'inquiry' ? 'Inquiry' : 'Project'}
                          </div>
                          <p className="text-xs text-gray-500 mt-1">
                            {new Date(activity.data.timestamp || activity.data.createdAt).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {index < stats.recentActivity.length - 1 && (
                    <div className="absolute left-5 top-14 w-px h-4 bg-gray-200"></div>
                  )}
                </div>
              ))
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}