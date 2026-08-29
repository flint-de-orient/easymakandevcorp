import { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, MapPin, Calendar, Upload, X, Building2, Activity, Star, Eye, Download, Image, FileText } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Badge } from '../ui/badge';

interface Project {
  id: string;
  name: string;
  location: string;
  status: 'active' | 'planning' | 'completed';
  section: 'current' | 'upcoming' | 'future';
  progress: number;
  description: string;
  highlights: string[];
  image?: string;
  brochure?: string;
  createdAt: string;
}

export function AdminProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    status: 'active' as Project['status'],
    section: 'current' as Project['section'],
    progress: 0,
    description: '',
    highlights: [''],
    image: '',
    brochure: ''
  });

  useEffect(() => {
    const stored = localStorage.getItem('admin_projects');
    if (stored) {
      try {
        setProjects(JSON.parse(stored));
      } catch (e) {
        console.error('Error loading projects:', e);
        setProjects([]);
      }
    }
  }, []);

  const saveProjects = (newProjects: Project[]) => {
    setProjects(newProjects);
    localStorage.setItem('admin_projects', JSON.stringify(newProjects));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const cleanHighlights = formData.highlights.filter(h => h && h.trim());
    
    if (editingProject) {
      const updated = projects.map(p => 
        p.id === editingProject.id 
          ? { ...editingProject, ...formData, highlights: cleanHighlights }
          : p
      );
      saveProjects(updated);
    } else {
      const newProject: Project = {
        id: Date.now().toString(),
        ...formData,
        highlights: cleanHighlights,
        createdAt: new Date().toISOString()
      };
      saveProjects([...projects, newProject]);
    }

    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: '',
      location: '',
      status: 'active',
      section: 'current',
      progress: 0,
      description: '',
      highlights: [''],
      image: '',
      brochure: ''
    });
    setShowForm(false);
    setEditingProject(null);
  };

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setFormData({
      name: project.name,
      location: project.location,
      status: project.status,
      section: project.section || 'current',
      progress: project.progress,
      description: project.description,
      highlights: project.highlights && project.highlights.length > 0 ? project.highlights : [''],
      image: project.image || '',
      brochure: project.brochure || ''
    });
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this project?')) {
      saveProjects(projects.filter(p => p.id !== id));
    }
  };

  const addHighlight = () => {
    setFormData({ ...formData, highlights: [...formData.highlights, ''] });
  };

  const removeHighlight = (index: number) => {
    setFormData({ 
      ...formData, 
      highlights: formData.highlights.filter((_, i) => i !== index) 
    });
  };

  const updateHighlight = (index: number, value: string) => {
    const newHighlights = [...formData.highlights];
    newHighlights[index] = value;
    setFormData({ ...formData, highlights: newHighlights });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'image' | 'brochure') => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setFormData({ ...formData, [type]: result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
            <Building2 className="h-7 w-7 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#0a1628]">Projects Management</h2>
            <p className="text-gray-600 mt-1">Manage your real estate development projects</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-xl">
            <Activity className="h-4 w-4" />
            <span className="text-sm font-medium">{projects.length} Projects</span>
          </div>
          <Button
            onClick={() => setShowForm(true)}
            className="bg-gradient-to-r from-[#d4af37] to-[#c9a959] hover:from-[#c9a959] hover:to-[#b8984d] text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Project
          </Button>
        </div>
      </div>

      {showForm && (
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">
            {editingProject ? 'Edit Project' : 'Add New Project'}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                placeholder="Project Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <Input
                placeholder="Location"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <select 
                value={formData.status} 
                onChange={(e) => setFormData({ ...formData, status: e.target.value as Project['status'] })}
                className="px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="active">Active</option>
                <option value="planning">Planning</option>
                <option value="completed">Completed</option>
              </select>
              
              <select 
                value={formData.section} 
                onChange={(e) => setFormData({ ...formData, section: e.target.value as Project['section'] })}
                className="px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="current">Under Construction</option>
                <option value="upcoming">LA in Progress</option>
                <option value="future">Upcoming</option>
              </select>
              
              <Input
                type="number"
                placeholder="Progress (%)"
                min="0"
                max="100"
                value={formData.progress}
                onChange={(e) => setFormData({ ...formData, progress: parseInt(e.target.value) || 0 })}
              />
            </div>

            <Textarea
              placeholder="Project Description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
            />

            <div>
              <label className="block text-sm font-medium mb-2">Project Highlights</label>
              {formData.highlights.map((highlight, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <Input
                    placeholder="e.g., Premium Living"
                    value={highlight}
                    onChange={(e) => updateHighlight(index, e.target.value)}
                  />
                  {formData.highlights.length > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => removeHighlight(index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={addHighlight}
                className="mt-2"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Highlight
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Project Image</label>
                <Input
                  placeholder="Image URL"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                />
                <label className="flex items-center gap-2 cursor-pointer text-sm text-[#d4af37] hover:text-[#c9a959] mt-2">
                  <Upload className="h-4 w-4" />
                  Upload Image
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileUpload(e, 'image')}
                    className="hidden"
                  />
                </label>
                {formData.image && (
                  <img src={formData.image} alt="Preview" className="w-20 h-20 object-cover rounded mt-2" />
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Project Brochure</label>
                <Input
                  placeholder="Brochure URL"
                  value={formData.brochure}
                  onChange={(e) => setFormData({ ...formData, brochure: e.target.value })}
                />
                <label className="flex items-center gap-2 cursor-pointer text-sm text-[#d4af37] hover:text-[#c9a959] mt-2">
                  <Upload className="h-4 w-4" />
                  Upload PDF
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={(e) => handleFileUpload(e, 'brochure')}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            <div className="flex gap-2">
              <Button type="submit" className="bg-[#d4af37] hover:bg-[#c9a959] text-white">
                {editingProject ? 'Update' : 'Create'} Project
              </Button>
              <Button type="button" variant="outline" onClick={resetForm}>
                Cancel
              </Button>
            </div>
          </form>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.id} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            {/* Project Image */}
            <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
              {project.image ? (
                <img src={project.image} alt={project.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <Building2 className="h-16 w-16 text-gray-400" />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Status Badge */}
              <div className="absolute top-4 left-4">
                <Badge className={`shadow-lg ${
                  project.status === 'completed' ? 'bg-green-500 hover:bg-green-600' :
                  project.status === 'active' ? 'bg-blue-500 hover:bg-blue-600' : 'bg-yellow-500 hover:bg-yellow-600'
                }`}>
                  {project.status.toUpperCase()}
                </Badge>
              </div>
              
              {/* Progress Circle */}
              <div className="absolute top-4 right-4">
                <div className="relative w-12 h-12">
                  <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="rgba(255,255,255,0.3)"
                      strokeWidth="2"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#d4af37"
                      strokeWidth="2"
                      strokeDasharray={`${project.progress}, 100`}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-bold text-white">{project.progress}%</span>
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30" onClick={() => handleEdit(project)}>
                  <Edit className="h-4 w-4" />
                </Button>
                <Button size="sm" className="bg-red-500/80 backdrop-blur-sm hover:bg-red-600/80 text-white border-red-500/30" onClick={() => handleDelete(project.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {/* Project Content */}
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-[#0a1628] mb-2 group-hover:text-[#d4af37] transition-colors">{project.name}</h3>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="h-4 w-4 text-[#d4af37]" />
                  <span className="text-sm">{project.location}</span>
                </div>
              </div>

              <div className="mb-4">
                <Badge variant="outline" className="mb-2">
                  {project.section === 'current' ? 'Under Construction' :
                   project.section === 'upcoming' ? 'LA in Progress' : 'Upcoming'}
                </Badge>
                <p className="text-sm text-gray-600 line-clamp-2">{project.description}</p>
              </div>

              {/* Highlights */}
              {project.highlights && project.highlights.length > 0 && (
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="h-4 w-4 text-[#d4af37]" />
                    <span className="text-sm font-medium text-gray-700">Highlights</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {project.highlights.filter(h => h && h.trim()).slice(0, 3).map((highlight, index) => (
                      <span key={index} className="px-2 py-1 bg-gradient-to-r from-[#d4af37]/10 to-[#c9a959]/10 text-[#d4af37] rounded-full text-xs font-medium">
                        {highlight}
                      </span>
                    ))}
                    {project.highlights.filter(h => h && h.trim()).length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                        +{project.highlights.filter(h => h && h.trim()).length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Calendar className="h-3 w-3" />
                  {new Date(project.createdAt).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="outline" onClick={() => handleEdit(project)} className="text-blue-600 hover:text-blue-700">
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => handleDelete(project.id)} className="text-red-600 hover:text-red-700">
                    <Trash2 className="h-4 w-4 mr-1" />
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {projects.length === 0 && !showForm && (
        <Card className="p-16 text-center border-0 shadow-lg">
          <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-inner">
            <Building2 className="h-12 w-12 text-gray-400" />
          </div>
          <h3 className="text-xl font-bold text-gray-700 mb-2">No Projects Yet</h3>
          <p className="text-gray-500 mb-6">Start building your real estate portfolio by creating your first project!</p>
          <Button
            onClick={() => setShowForm(true)}
            className="bg-gradient-to-r from-[#d4af37] to-[#c9a959] hover:from-[#c9a959] hover:to-[#b8984d] text-white shadow-lg"
          >
            <Plus className="h-4 w-4 mr-2" />
            Create First Project
          </Button>
        </Card>
      )}
    </div>
  );
}