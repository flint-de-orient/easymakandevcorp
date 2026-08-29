import { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, FileText, Calendar, Eye, Upload } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Badge } from '../ui/badge';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  category: string;
  tags: string[];
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export function AdminBlogs() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    image: '',
    author: 'Admin',
    category: 'Market Insights',
    tags: '',
    published: false
  });

  const categories = [
    'All',
    'Market Insights',
    'Investment',
    'Technology',
    'Sustainability',
    'Design',
    'Legal',
    'Amenities',
    'Finance',
    'PropTech'
  ];

  useEffect(() => {
    const stored = localStorage.getItem('admin_blogs');
    if (stored) {
      setBlogs(JSON.parse(stored));
    }
  }, []);

  const saveBlogs = (newBlogs: BlogPost[]) => {
    setBlogs(newBlogs);
    localStorage.setItem('admin_blogs', JSON.stringify(newBlogs));
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const slug = generateSlug(formData.title);
    const tags = formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag);
    
    if (editingBlog) {
      const updated = blogs.map(blog => 
        blog.id === editingBlog.id 
          ? { 
              ...editingBlog, 
              ...formData, 
              slug,
              tags,
              updatedAt: new Date().toISOString()
            }
          : blog
      );
      saveBlogs(updated);
    } else {
      const newBlog: BlogPost = {
        id: Date.now().toString(),
        ...formData,
        slug,
        tags,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      saveBlogs([...blogs, newBlog]);
    }

    resetForm();
  };

  const resetForm = () => {
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      image: '',
      author: 'Admin',
      category: 'Market Insights',
      tags: '',
      published: false
    });
    setShowForm(false);
    setEditingBlog(null);
  };

  const handleEdit = (blog: BlogPost) => {
    setEditingBlog(blog);
    setFormData({
      title: blog.title,
      excerpt: blog.excerpt,
      content: blog.content,
      image: blog.image,
      author: blog.author,
      category: blog.category,
      tags: blog.tags.join(', '),
      published: blog.published
    });
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this blog post?')) {
      saveBlogs(blogs.filter(blog => blog.id !== id));
    }
  };

  const togglePublished = (id: string) => {
    const updated = blogs.map(blog =>
      blog.id === id 
        ? { ...blog, published: !blog.published, updatedAt: new Date().toISOString() }
        : blog
    );
    saveBlogs(updated);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setFormData({ ...formData, image: result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-[#0a1628]">Blog Management</h2>
        <div className="flex gap-4 items-center">
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          <Button
            onClick={() => setShowForm(true)}
            className="bg-[#d4af37] hover:bg-[#c9a959] text-white"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Blog Post
          </Button>
        </div>
      </div>

      {showForm && (
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">
            {editingBlog ? 'Edit Blog Post' : 'Add New Blog Post'}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Blog Title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />

            <Textarea
              placeholder="Excerpt (brief description)"
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
              required
            />

            <Textarea
              placeholder="Full Content"
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              rows={8}
              required
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Featured Image</label>
                <Input
                  placeholder="Image URL"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  required
                />
                <label className="flex items-center gap-2 cursor-pointer text-sm text-[#d4af37] hover:text-[#c9a959] mt-2">
                  <Upload className="h-4 w-4" />
                  Upload Image
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e)}
                    className="hidden"
                  />
                </label>
                {formData.image && (
                  <img src={formData.image} alt="Preview" className="w-20 h-20 object-cover rounded mt-2" />
                )}
              </div>
              <Input
                placeholder="Author"
                value={formData.author}
                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="px-3 py-2 border border-gray-300 rounded-md"
                required
              >
                {categories.filter(cat => cat !== 'All').map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <Input
                placeholder="Tags (comma separated)"
                value={formData.tags}
                onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="published"
                checked={formData.published}
                onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                className="rounded"
              />
              <label htmlFor="published" className="text-sm">Publish immediately</label>
            </div>

            <div className="flex gap-2">
              <Button type="submit" className="bg-[#d4af37] hover:bg-[#c9a959] text-white">
                {editingBlog ? 'Update' : 'Create'} Blog Post
              </Button>
              <Button type="button" variant="outline" onClick={resetForm}>
                Cancel
              </Button>
            </div>
          </form>
        </Card>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {blogs.filter(blog => categoryFilter === 'All' || blog.category === categoryFilter).map((blog) => (
          <Card key={blog.id} className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <h3 className="font-semibold text-[#0a1628] mb-2">{blog.title}</h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{blog.excerpt}</p>
              </div>
              <div className="flex gap-2 ml-4">
                <Button size="sm" variant="outline" onClick={() => handleEdit(blog)}>
                  <Edit className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" onClick={() => handleDelete(blog.id)}>
                  <Trash2 className="h-4 w-4 text-red-500" />
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Calendar className="h-4 w-4" />
                {new Date(blog.createdAt).toLocaleDateString()}
              </div>

              <div className="flex items-center gap-2">
                <Badge variant="outline">{blog.category}</Badge>
                <button
                  onClick={() => togglePublished(blog.id)}
                  className={`px-2 py-1 rounded text-xs ${
                    blog.published 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {blog.published ? 'Published' : 'Draft'}
                </button>
              </div>

              {blog.tags.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {blog.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-[#d4af37]/10 text-[#d4af37] rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>By {blog.author}</span>
                <div className="flex items-center gap-1">
                  <Eye className="h-3 w-3" />
                  <span>View</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {blogs.filter(blog => categoryFilter === 'All' || blog.category === categoryFilter).length === 0 && !showForm && (
        <Card className="p-12 text-center">
          <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500">
            {categoryFilter === 'All' 
              ? 'No blog posts found. Create your first blog post!' 
              : `No blog posts found in ${categoryFilter} category.`
            }
          </p>
        </Card>
      )}
    </div>
  );
}