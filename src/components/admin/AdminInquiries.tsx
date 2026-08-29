import { useState, useEffect } from 'react';
import { MessageSquare, Phone, Mail, Calendar, Trash2, User, Filter, Activity, Clock, Star, Eye, Reply, Archive, CheckCircle2, PhoneCall, Sparkles } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  status: 'new' | 'contacted' | 'closed';
  timestamp: string;
}

export function AdminInquiries() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [filter, setFilter] = useState<'all' | 'new' | 'contacted' | 'closed'>('all');

  useEffect(() => {
    const stored = localStorage.getItem('inquiries');
    if (stored) {
      setInquiries(JSON.parse(stored));
    }
  }, []);

  const saveInquiries = (newInquiries: Inquiry[]) => {
    setInquiries(newInquiries);
    localStorage.setItem('inquiries', JSON.stringify(newInquiries));
  };

  const updateStatus = (id: string, status: Inquiry['status']) => {
    const updated = inquiries.map(inquiry =>
      inquiry.id === id ? { ...inquiry, status } : inquiry
    );
    saveInquiries(updated);
  };

  const deleteInquiry = (id: string) => {
    if (confirm('Are you sure you want to delete this inquiry?')) {
      saveInquiries(inquiries.filter(inquiry => inquiry.id !== id));
    }
  };

  const filteredInquiries = filter === 'all' 
    ? inquiries 
    : inquiries.filter(inquiry => inquiry.status === filter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'contacted': return 'bg-yellow-100 text-yellow-800';
      case 'closed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
            <MessageSquare className="h-7 w-7 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#0a1628]">Inquiries Management</h2>
            <p className="text-gray-600 mt-1">Manage customer inquiries and leads</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-600 rounded-xl">
            <Activity className="h-4 w-4" />
            <span className="text-sm font-medium">{inquiries.length} Total</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-xl">
            <Star className="h-4 w-4" />
            <span className="text-sm font-medium">{inquiries.filter(i => i.status === 'new').length} New</span>
          </div>
          <Select value={filter} onValueChange={(value: any) => setFilter(value)}>
            <SelectTrigger className="w-52 bg-gradient-to-r from-white to-gray-50 shadow-lg border-gray-200 hover:border-[#d4af37] focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 transition-all duration-200 rounded-xl">
              <Filter className="h-4 w-4 mr-2 text-[#d4af37]" />
              <SelectValue placeholder="Filter by status" className="font-medium" />
            </SelectTrigger>
            <SelectContent className="bg-white/95 backdrop-blur-xl border-0 shadow-2xl rounded-2xl overflow-hidden p-2">
              <SelectItem value="all" className="hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 focus:bg-gradient-to-r focus:from-gray-50 focus:to-gray-100 font-medium py-4 px-4 rounded-xl mb-1 transition-all duration-200">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                    <Filter className="h-4 w-4 text-gray-600" />
                  </div>
                  <span className="text-gray-700">All Inquiries</span>
                </div>
              </SelectItem>
              <SelectItem value="new" className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 focus:bg-gradient-to-r focus:from-blue-50 focus:to-blue-100 text-blue-700 font-medium py-4 px-4 rounded-xl mb-1 transition-all duration-200">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                    <Sparkles className="h-4 w-4 text-blue-600" />
                  </div>
                  <span>New Inquiries</span>
                </div>
              </SelectItem>
              <SelectItem value="contacted" className="hover:bg-gradient-to-r hover:from-yellow-50 hover:to-yellow-100 focus:bg-gradient-to-r focus:from-yellow-50 focus:to-yellow-100 text-yellow-700 font-medium py-4 px-4 rounded-xl mb-1 transition-all duration-200">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg flex items-center justify-center">
                    <PhoneCall className="h-4 w-4 text-yellow-600" />
                  </div>
                  <span>Contacted</span>
                </div>
              </SelectItem>
              <SelectItem value="closed" className="hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100 focus:bg-gradient-to-r focus:from-green-50 focus:to-green-100 text-green-700 font-medium py-4 px-4 rounded-xl transition-all duration-200">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                  </div>
                  <span>Closed</span>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {filteredInquiries.length === 0 ? (
        <Card className="p-16 text-center border-0 shadow-lg">
          <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-inner">
            <MessageSquare className="h-12 w-12 text-gray-400" />
          </div>
          <h3 className="text-xl font-bold text-gray-700 mb-2">No Inquiries Found</h3>
          <p className="text-gray-500">
            {filter === 'all' ? 'No customer inquiries yet' : `No ${filter} inquiries found`}
          </p>
        </Card>
      ) : (
        <div className="space-y-4">
          {/* Mobile Card View */}
          <div className="block sm:hidden space-y-6">
            {filteredInquiries.map((inquiry) => (
              <Card key={inquiry.id} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-green-600"></div>
                <div className="p-6">
                  <div className="mb-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 rounded-2xl flex items-center justify-center shadow-lg">
                          <User className="h-7 w-7 text-blue-600" />
                        </div>
                        <div className="space-y-1">
                          <h3 className="font-bold text-[#0a1628] text-xl tracking-wide">{inquiry.name}</h3>
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                              <Clock className="h-3 w-3 text-gray-500" />
                            </div>
                            <span className="text-sm text-gray-600 font-medium">{new Date(inquiry.timestamp).toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}</span>
                          </div>
                        </div>
                      </div>
                      <Badge className={`${getStatusColor(inquiry.status)} shadow-lg px-3 py-1.5 text-sm font-semibold rounded-xl`}>
                        {inquiry.status.charAt(0).toUpperCase() + inquiry.status.slice(1)}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4 mb-6">
                    <div className="group relative overflow-hidden bg-gradient-to-r from-green-50 via-green-50 to-emerald-50 border border-green-200/50 rounded-2xl p-4 hover:shadow-md transition-all duration-300">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-emerald-400"></div>
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center shadow-sm">
                          <Phone className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <p className="text-xs font-medium text-green-700 mb-1">Phone Number</p>
                          <p className="font-semibold text-gray-800 text-base">{inquiry.phone}</p>
                        </div>
                      </div>
                    </div>
                    <div className="group relative overflow-hidden bg-gradient-to-r from-blue-50 via-blue-50 to-indigo-50 border border-blue-200/50 rounded-2xl p-4 hover:shadow-md transition-all duration-300">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-400"></div>
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center shadow-sm">
                          <Mail className="h-5 w-5 text-blue-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-medium text-blue-700 mb-1">Email Address</p>
                          <p className="font-semibold text-gray-800 text-base truncate">{inquiry.email}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-purple-100 to-pink-200 rounded-lg flex items-center justify-center">
                        <MessageSquare className="h-3 w-3 text-purple-600" />
                      </div>
                      <span className="text-sm font-semibold text-gray-700">Message</span>
                    </div>
                    <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 border border-purple-200/60 shadow-lg">
                      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500"></div>
                      <p className="text-sm text-gray-800 p-4 leading-relaxed line-clamp-3" style={{lineHeight: '1.6'}}>{inquiry.message}</p>
                      <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tl from-rose-100 to-transparent rounded-tl-xl"></div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Select value={inquiry.status} onValueChange={(value: Inquiry['status']) => updateStatus(inquiry.id, value)}>
                      <SelectTrigger className="flex-1 bg-gradient-to-r from-white to-gray-50 border-gray-200 hover:border-[#d4af37] focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 transition-all duration-200 shadow-sm hover:shadow-md">
                        <SelectValue className="font-medium" />
                      </SelectTrigger>
                      <SelectContent className="bg-white/95 backdrop-blur-xl border-0 shadow-xl rounded-2xl overflow-hidden p-2">
                        <SelectItem value="new" className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 focus:bg-gradient-to-r focus:from-blue-50 focus:to-blue-100 text-blue-700 font-medium py-3 px-3 rounded-xl mb-1 transition-all duration-200">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                              <Sparkles className="h-3 w-3 text-blue-600" />
                            </div>
                            <span>New</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="contacted" className="hover:bg-gradient-to-r hover:from-yellow-50 hover:to-yellow-100 focus:bg-gradient-to-r focus:from-yellow-50 focus:to-yellow-100 text-yellow-700 font-medium py-3 px-3 rounded-xl mb-1 transition-all duration-200">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg flex items-center justify-center">
                              <PhoneCall className="h-3 w-3 text-yellow-600" />
                            </div>
                            <span>Contacted</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="closed" className="hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100 focus:bg-gradient-to-r focus:from-green-50 focus:to-green-100 text-green-700 font-medium py-3 px-3 rounded-xl transition-all duration-200">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
                              <CheckCircle2 className="h-3 w-3 text-green-600" />
                            </div>
                            <span>Closed</span>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => deleteInquiry(inquiry.id)}
                      className="text-red-500 hover:bg-red-50 border-red-200"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Desktop Card Grid View */}
          <div className="hidden sm:block">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredInquiries.map((inquiry) => (
                <Card key={inquiry.id} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
                    inquiry.status === 'new' ? 'from-blue-500 to-blue-600' :
                    inquiry.status === 'contacted' ? 'from-yellow-500 to-yellow-600' :
                    'from-green-500 to-green-600'
                  }`}></div>
                  
                  <div className="p-6">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-start justify-between mb-5">
                        <div className="flex items-center gap-4">
                          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg ${
                            inquiry.status === 'new' ? 'bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300' :
                            inquiry.status === 'contacted' ? 'bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-300' :
                            'bg-gradient-to-br from-green-100 via-green-200 to-green-300'
                          }`}>
                            <User className={`h-8 w-8 ${
                              inquiry.status === 'new' ? 'text-blue-600' :
                              inquiry.status === 'contacted' ? 'text-yellow-600' :
                              'text-green-600'
                            }`} />
                          </div>
                          <div className="space-y-2">
                            <h3 className="font-bold text-[#0a1628] text-2xl group-hover:text-[#d4af37] transition-colors tracking-wide">{inquiry.name}</h3>
                            <div className="flex items-center gap-3">
                              <div className="w-6 h-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                                <Clock className="h-3.5 w-3.5 text-gray-500" />
                              </div>
                              <span className="text-sm text-gray-600 font-medium">{new Date(inquiry.timestamp).toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}</span>
                            </div>
                          </div>
                        </div>
                        <Badge className={`${getStatusColor(inquiry.status)} shadow-lg px-4 py-2 text-sm font-semibold rounded-xl`}>
                          {inquiry.status.charAt(0).toUpperCase() + inquiry.status.slice(1)}
                        </Badge>
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4 mb-6">
                      <div className="group relative overflow-hidden bg-gradient-to-r from-green-50 via-emerald-50 to-green-50 border border-green-200/60 rounded-2xl p-5 hover:shadow-lg transition-all duration-300">
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-green-400 to-emerald-500"></div>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center shadow-md">
                            <Phone className="h-6 w-6 text-green-600" />
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-green-700 mb-1.5 uppercase tracking-wide">Phone Number</p>
                            <p className="font-bold text-gray-800 text-lg">{inquiry.phone}</p>
                          </div>
                        </div>
                        <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tl from-green-100 to-transparent rounded-tl-xl opacity-50"></div>
                      </div>
                      <div className="group relative overflow-hidden bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 border border-blue-200/60 rounded-2xl p-5 hover:shadow-lg transition-all duration-300">
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-400 to-indigo-500"></div>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center shadow-md">
                            <Mail className="h-6 w-6 text-blue-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-semibold text-blue-700 mb-1.5 uppercase tracking-wide">Email Address</p>
                            <p className="font-bold text-gray-800 text-lg truncate">{inquiry.email}</p>
                          </div>
                        </div>
                        <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tl from-blue-100 to-transparent rounded-tl-xl opacity-50"></div>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-7 h-7 bg-gradient-to-br from-violet-100 to-purple-200 rounded-xl flex items-center justify-center shadow-sm">
                          <MessageSquare className="h-4 w-4 text-violet-600" />
                        </div>
                        <span className="text-sm font-semibold text-gray-700">Customer Message</span>
                      </div>
                      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 border border-violet-200/70 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500"></div>
                        <div className="p-6">
                          <p className="text-sm text-gray-800 leading-relaxed line-clamp-3" style={{lineHeight: '1.7'}} title={inquiry.message}>
                            {inquiry.message}
                          </p>
                        </div>
                        <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-fuchsia-100 via-purple-50 to-transparent rounded-tl-2xl opacity-60"></div>
                        <div className="absolute top-4 right-4 w-3 h-3 bg-purple-400 rounded-full opacity-40"></div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 pt-4 border-t border-gray-100">
                      <Select value={inquiry.status} onValueChange={(value: Inquiry['status']) => updateStatus(inquiry.id, value)}>
                        <SelectTrigger className="flex-1 bg-gradient-to-r from-white to-gray-50 border-gray-200 hover:border-[#d4af37] focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 transition-all duration-200 shadow-sm hover:shadow-md rounded-xl">
                          <SelectValue className="font-medium" />
                        </SelectTrigger>
                        <SelectContent className="bg-white/95 backdrop-blur-xl border-0 shadow-xl rounded-2xl overflow-hidden p-2">
                          <SelectItem value="new" className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 focus:bg-gradient-to-r focus:from-blue-50 focus:to-blue-100 text-blue-700 font-medium py-3 px-3 rounded-xl mb-1 transition-all duration-200">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                                <Sparkles className="h-3 w-3 text-blue-600" />
                              </div>
                              <span>New</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="contacted" className="hover:bg-gradient-to-r hover:from-yellow-50 hover:to-yellow-100 focus:bg-gradient-to-r focus:from-yellow-50 focus:to-yellow-100 text-yellow-700 font-medium py-3 px-3 rounded-xl mb-1 transition-all duration-200">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg flex items-center justify-center">
                                <PhoneCall className="h-3 w-3 text-yellow-600" />
                              </div>
                              <span>Contacted</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="closed" className="hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100 focus:bg-gradient-to-r focus:from-green-50 focus:to-green-100 text-green-700 font-medium py-3 px-3 rounded-xl transition-all duration-200">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
                                <CheckCircle2 className="h-3 w-3 text-green-600" />
                              </div>
                              <span>Closed</span>
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-500 hover:text-[#d4af37] hover:bg-[#d4af37]/10"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deleteInquiry(inquiry.id)}
                        className="text-red-500 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}