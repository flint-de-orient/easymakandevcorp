import { MapPin, Home, IndianRupee, Star } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

export function LocationPages() {
  const locations = [
    {
      name: 'Newtown Action Area 1',
      properties: '150+ Properties',
      priceRange: '₹25L - ₹80L',
      highlights: ['IT Hub', 'Metro Connectivity', 'Modern Infrastructure'],
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop'
    },
    {
      name: 'Salt Lake Sector V',
      properties: '200+ Properties',
      priceRange: '₹30L - ₹1.2Cr',
      highlights: ['IT Corridor', 'Shopping Malls', 'Educational Hubs'],
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop'
    },
    {
      name: 'Rajarhat New Town',
      properties: '300+ Properties',
      priceRange: '₹20L - ₹60L',
      highlights: ['Airport Proximity', 'Upcoming Metro', 'Green Spaces'],
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400&h=300&fit=crop'
    },
    {
      name: 'Dum Dum Cantonment',
      properties: '100+ Properties',
      priceRange: '₹15L - ₹45L',
      highlights: ['Airport Area', 'Metro Station', 'Affordable Housing'],
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop'
    }
  ];

  const propertyTypes = [
    {
      type: '2BHK Flats in Kolkata',
      count: '500+',
      startingPrice: '₹20 Lakhs',
      popular: 'Most Popular',
      areas: ['Newtown', 'Salt Lake', 'Rajarhat', 'Dum Dum']
    },
    {
      type: '3BHK Flats in Kolkata',
      count: '300+',
      startingPrice: '₹35 Lakhs',
      popular: 'Premium Choice',
      areas: ['Newtown AA1', 'Salt Lake', 'Behala', 'Garia']
    },
    {
      type: 'Ready to Move Flats',
      count: '200+',
      startingPrice: '₹25 Lakhs',
      popular: 'Immediate Possession',
      areas: ['All Prime Locations']
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Prime Locations */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0a1628] mb-4">
              Prime Locations in Kolkata
            </h2>
            <p className="text-xl text-gray-600">
              Explore flats for sale in Kolkata's most sought-after areas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((location, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 bg-white">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={location.image} 
                    alt={`Flats for sale in ${location.name}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-[#d4af37] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {location.properties}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0a1628] mb-2">{location.name}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <IndianRupee className="h-4 w-4 text-[#d4af37]" />
                    <span className="text-gray-600 font-semibold">{location.priceRange}</span>
                  </div>
                  <div className="space-y-2 mb-4">
                    {location.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Star className="h-3 w-3 text-[#d4af37]" />
                        <span className="text-sm text-gray-600">{highlight}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-[#d4af37] to-[#b8941f] hover:from-[#b8941f] hover:to-[#d4af37] text-white">
                    View Properties
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Property Types */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0a1628] mb-4">
              Popular Property Types
            </h2>
            <p className="text-xl text-gray-600">
              Find your perfect home by property type and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {propertyTypes.map((property, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-xl transition-all duration-300 bg-white border-2 border-transparent hover:border-[#d4af37]">
                <div className="w-16 h-16 bg-gradient-to-br from-[#d4af37] to-[#b8941f] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Home className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0a1628] mb-2">{property.type}</h3>
                <div className="bg-[#d4af37] text-white px-4 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                  {property.popular}
                </div>
                <div className="text-3xl font-bold text-[#d4af37] mb-2">{property.count}</div>
                <div className="text-gray-600 mb-4">Available Properties</div>
                <div className="text-xl font-semibold text-[#0a1628] mb-4">
                  Starting from {property.startingPrice}
                </div>
                <div className="text-sm text-gray-600 mb-6">
                  Popular in: {property.areas.join(', ')}
                </div>
                <Button className="w-full bg-gradient-to-r from-[#d4af37] to-[#b8941f] hover:from-[#b8941f] hover:to-[#d4af37] text-white">
                  Explore {property.type}
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* SEO Content Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-[#0a1628] mb-6">
            Why Buy Flats in Kolkata with EasyMakan?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-[#0a1628] mb-4">Premium Locations</h3>
              <p className="text-gray-600 mb-4">
                We offer flats for sale in Kolkata's prime locations including Newtown Action Area 1 & 2, 
                Salt Lake Sector V, Rajarhat, and other sought-after areas with excellent connectivity and infrastructure.
              </p>
              <h3 className="text-xl font-semibold text-[#0a1628] mb-4">Affordable Housing Options</h3>
              <p className="text-gray-600">
                From budget-friendly 2BHK flats under 20 lakhs to luxury 3BHK apartments, 
                we have properties to suit every budget and lifestyle requirement.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#0a1628] mb-4">Ready to Move Properties</h3>
              <p className="text-gray-600 mb-4">
                Our portfolio includes ready to move flats in Kolkata with immediate possession, 
                perfect for families looking to relocate quickly without construction delays.
              </p>
              <h3 className="text-xl font-semibold text-[#0a1628] mb-4">Expert Guidance</h3>
              <p className="text-gray-600">
                With 25+ years of experience in Kolkata real estate, our team provides expert guidance 
                for buying, selling, and investing in properties across the city.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}