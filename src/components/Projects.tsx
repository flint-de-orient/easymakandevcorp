import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MapPin, Download, CheckCircle, Clock, Calendar } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { LazyImage } from './LazyImage';
import aponjonHousingImage from 'figma:asset/0ac0437f73bb2009358873a08ebbb7a927fd3f1b.png';
import fourthAvenueImage from '../assets/4th avenue pic.jpeg';

export function Projects() {
  const [adminProjects, setAdminProjects] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('admin_projects');
    if (stored) {
      try {
        setAdminProjects(JSON.parse(stored));
      } catch (e) {
        console.error('Error loading admin projects:', e);
        setAdminProjects([]);
      }
    }
  }, []);

  const projects = {
    current: [
      {
        name: 'Aponjon Housing',
        location: 'Kalikapur, Kolkata, West Bengal',
        status: 'Ongoing',
        description: 'Construction in full swing with premium residential development featuring modern amenities and quality construction.',
        image: aponjonHousingImage,
        completion: '75%',
        handover: '2027',
        highlights: ['Premium Living', 'Modern Design', 'Quality Build', 'Prime Location'],
      },
      {
        name: '4th Avenue',
        location: 'Patharghata, Newtown, Kolkata - 700135, Near DLF - 2',
        status: 'Ongoing',
        description: 'Construction in progress with premium residential development featuring modern amenities and quality construction.',
        image: fourthAvenueImage,
        completion: '25%',
        handover: '2027',
        highlights: ['Peaceful Living', 'Modern Design', 'Quality Build', 'Prime Location'],
      },
      {
        name: 'Green Vista',
        location: 'Gurap, Hooghly, West Bengal',
        status: 'Ongoing',
        description: 'Exclusive luxury residential project developed by PACKHILL REALTY PVT LTD in strategic partnership with Easy Makan, featuring world-class amenities and premium construction.',
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGJ1aWxkaW5nJTIwbHV4dXJ5fGVufDF8fHx8MTc2MTgzMDcwMnww&ixlib=rb-4.1.0&q=80&w=1080',
        completion: '40%',
        handover: '2028',
        highlights: ['Luxury Living', 'Premium Amenities', 'Strategic Partnership', 'Quality Build'],
      },
    ],
    upcoming: [
      {
        name: 'HIDCO',
        location: 'ACTION AREA -III, NEAR ROSEDALE PLAZA, Kolkata',
        status: 'Upcoming',
        description: 'Premium residential development in the heart of New Town with modern amenities and strategic location near commercial hubs.',
        image: '/hidco.png',
        completion: '0%',
        handover: '2028-2029',
        highlights: ['Premium Living', 'Modern Design', 'Quality Construction', 'Prime Location'],
        brochure: '/Easymakan-Hidco-Project (1).pdf'
      },
      {
        name: 'Vivid Vista',
        location: 'Shapoorji, Kolkata, West Bengal',
        status: 'Upcoming',
        description: 'Land acquisition in progress for this thoughtfully designed residential complex featuring spacious apartments and comprehensive facilities.',
        image: 'https://images.unsplash.com/photo-1760553120209-8e9d5d2493e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMHBsYW5uaW5nJTIwZGV2ZWxvcG1lbnR8ZW58MXx8fHwxNzYxODA1NzA3fDA&ixlib=rb-4.1.0&q=80&w=1080',
        completion: '0%',
        handover: '2029-2030',
        highlights: ['Spacious Apartments', 'Family Friendly', 'Modern Facilities', 'Future Growth'],
      },
    ],
    future: [
      {
        name: 'Prime Habitat',
        location: 'Gabtala, near Infosys, Kolkata, West Bengal',
        status: 'Future Development',
        description: 'Strategic location near IT hub with modern residential facilities and excellent connectivity to business districts.',
        image: 'https://images.unsplash.com/photo-1758448511533-e1502259fff6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wbGV0ZWQlMjBhcGFydG1lbnQlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjE4MzA3MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        completion: '0%',
        handover: '2029-2030',
        highlights: ['IT Hub Location', 'Modern Amenities', 'Excellent Connectivity', 'Premium Design'],
      },
    ],
  };



  const ProjectCard = ({ project }: { project: any }) => {
  const [downloading, setDownloading] = useState(false);

  const handleBrochure = () => {
    let pdfPath = '';
    if (project.name === 'Aponjon Housing') pdfPath = '/aponjon_BROCHURE.pdf';
    else if (project.name === '4th Avenue') pdfPath = '/4th%20avenue%20brochure.pdf';
    else if (project.name === 'HIDCO') pdfPath = '/Easymakan-Hidco-Project%20(1).pdf';
    else if (project.name === 'Vivid Vista') pdfPath = '/FINAL%20V%20VISTA.pdf';
    else if (project.name === 'Green Vista') pdfPath = '/GREEN%20VISTA%20.pdf';
    else if (project.brochure) pdfPath = project.brochure;

    if (pdfPath) {
      setDownloading(true);
      const link = document.createElement('a');
      link.href = pdfPath;
      link.download = `${project.name} Brochure.pdf`;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => setDownloading(false), 3000);
    } else {
      alert('Brochure coming soon!');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Card className="overflow-hidden group hover:shadow-2xl transition-shadow duration-300 flex flex-col">
        <div className="relative h-64 overflow-hidden">
          <LazyImage
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            placeholder="Loading project image..."
          />
          <div className="absolute top-4 right-4">
            <Badge
              className={
                project.status === 'Completed'
                  ? 'bg-green-500 text-white'
                  : project.status === 'Ongoing'
                  ? 'bg-blue-500 text-white'
                  : 'bg-[#d4af37] text-[#0a1628]'
              }
            >
              {project.status === 'Completed' && <CheckCircle className="h-3 w-3 mr-1" />}
              {project.status === 'Ongoing' && <Clock className="h-3 w-3 mr-1" />}
              {project.status === 'Upcoming' && <Calendar className="h-3 w-3 mr-1" />}
              {project.status}
            </Badge>
          </div>
          {project.completion && project.status === 'Ongoing' && (
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm p-2">
              <div className="flex items-center justify-between mb-1">
                <span className="text-white">Progress</span>
                <span className="text-[#d4af37]">{project.completion}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-[#d4af37] h-2 rounded-full transition-all duration-1000"
                  style={{ width: project.completion }}
                />
              </div>
            </div>
          )}
        </div>
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-[#0a1628]">{project.name}</h3>
          </div>
          <div className="flex items-center text-gray-600 mb-3">
            <MapPin className="h-4 w-4 mr-1 text-[#d4af37]" />
            <span className="line-clamp-1">{project.location}</span>
          </div>
          <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
          {project.highlights && project.highlights.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.highlights.filter((h: string) => h && h.trim()).map((highlight: string, index: number) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-[#d4af37]/10 text-[#d4af37] rounded-full text-sm h-fit"
                >
                  {highlight}
                </span>
              ))}
            </div>
          )}
          <div className="mt-auto">
          <Button
            variant="outline"
            size="sm"
            className="w-full border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-white text-sm"
            onClick={handleBrochure}
            disabled={downloading}
          >
            {downloading ? (
              <>
                <svg className="animate-spin h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                </svg>
                Opening...
              </>
            ) : (
              <>
                <Download className="h-4 w-4 mr-2" />
                Download Brochure
              </>
            )}
          </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[#d4af37]">Our Projects (Updated v2.0)</span>
          <h2 className="mt-2 text-[#0a1628]">
            Building Dreams Across Kolkata
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            Explore our portfolio of landmark developments that redefine luxury living
            and modern infrastructure in West Bengal.
          </p>
        </motion.div>

        <Tabs defaultValue="current" className="w-full">
          <TabsList className="grid w-full max-w-lg mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="current" className="text-xs sm:text-sm px-2 sm:px-4">
              <span className="hidden sm:inline">Under Construction</span>
              <span className="sm:hidden">Construction</span>
            </TabsTrigger>
            <TabsTrigger value="upcoming" className="text-xs sm:text-sm px-2 sm:px-4">
              <span className="hidden sm:inline">LA in Progress</span>
              <span className="sm:hidden">LA Progress</span>
            </TabsTrigger>
            <TabsTrigger value="future" className="text-xs sm:text-sm px-2 sm:px-4">
              <span className="hidden sm:inline">Upcoming</span>
              <span className="sm:hidden">Upcoming</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="current">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {projects.current.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
              {adminProjects.filter((p: any) => p.section === 'current' || (!p.section && p.status === 'active')).map((project: any) => (
                <ProjectCard key={project.id} project={{
                  ...project,
                  status: 'Ongoing',
                  completion: `${project.progress}%`,
                  handover: '2025-2026',
                  highlights: Array.isArray(project.highlights) ? project.highlights.filter((h: string) => h && h.trim()) : []
                }} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="upcoming">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {projects.upcoming.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
              {adminProjects.filter((p: any) => p.section === 'upcoming' || (!p.section && p.status === 'planning')).map((project: any) => (
                <ProjectCard key={project.id} project={{
                  ...project,
                  status: 'Upcoming',
                  completion: `${project.progress}%`,
                  handover: '2025-2026',
                  highlights: Array.isArray(project.highlights) ? project.highlights.filter((h: string) => h && h.trim()) : []
                }} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="future">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.future.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
              {adminProjects.filter((p: any) => p.section === 'future' || (!p.section && p.status === 'completed')).map((project: any) => (
                <ProjectCard key={project.id} project={{
                  ...project,
                  status: p.status === 'completed' ? 'Completed' : 'Future Development',
                  completion: `${project.progress}%`,
                  handover: p.status === 'completed' ? 'Completed' : '2025-2026',
                  highlights: Array.isArray(project.highlights) ? project.highlights.filter((h: string) => h && h.trim()) : []
                }} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
