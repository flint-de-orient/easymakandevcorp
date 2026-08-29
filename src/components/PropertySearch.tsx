import { useState } from 'react';
import { Search, MapPin, Home, IndianRupee, Filter } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

export function PropertySearch() {
  const [searchType, setSearchType] = useState('buy');
  const [propertyType, setPropertyType] = useState('');
  const [location, setLocation] = useState('');
  const [budget, setBudget] = useState('');

  const locations = [
    'Newtown Action Area 1', 'Newtown Action Area 2', 'Salt Lake', 'Rajarhat',
    'Dum Dum', 'Barasat', 'Baguihati', 'Howrah', 'Behala', 'Garia'
  ];

  const budgetRanges = [
    'Under 20 Lakhs', '20-40 Lakhs', '40-60 Lakhs', '60 Lakhs - 1 Crore', 'Above 1 Crore'
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0a1628] mb-4">
            Find Your Perfect Home in Kolkata
          </h2>
          <p className="text-xl text-gray-600">
            Search from thousands of flats for sale in prime locations
          </p>
        </div>

        <Card className="p-8 shadow-xl bg-white/90 backdrop-blur-sm">
          {/* Search Type Toggle */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 p-1 rounded-xl">
              <button
                onClick={() => setSearchType('buy')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  searchType === 'buy'
                    ? 'bg-[#d4af37] text-white shadow-md'
                    : 'text-gray-600 hover:text-[#d4af37]'
                }`}
              >
                Buy Flats
              </button>
              <button
                onClick={() => setSearchType('sell')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  searchType === 'sell'
                    ? 'bg-[#d4af37] text-white shadow-md'
                    : 'text-gray-600 hover:text-[#d4af37]'
                }`}
              >
                Sell Property
              </button>
            </div>
          </div>

          {/* Search Form */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {/* Property Type */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <Home className="h-4 w-4 text-[#d4af37]" />
                Property Type
              </label>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] bg-white"
              >
                <option value="">Select Type</option>
                <option value="1bhk">1BHK Flat</option>
                <option value="2bhk">2BHK Flat</option>
                <option value="3bhk">3BHK Flat</option>
                <option value="4bhk">4BHK Flat</option>
                <option value="villa">Villa</option>
              </select>
            </div>

            {/* Location */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#d4af37]" />
                Location
              </label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] bg-white"
              >
                <option value="">Select Location</option>
                {locations.map((loc) => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>

            {/* Budget */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <IndianRupee className="h-4 w-4 text-[#d4af37]" />
                Budget
              </label>
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] bg-white"
              >
                <option value="">Select Budget</option>
                {budgetRanges.map((range) => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
            </div>

            {/* Search Button */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-transparent">Search</label>
              <Button className="w-full h-12 bg-gradient-to-r from-[#d4af37] to-[#b8941f] hover:from-[#b8941f] hover:to-[#d4af37] text-white font-semibold rounded-xl shadow-lg">
                <Search className="h-5 w-5 mr-2" />
                Search Properties
              </Button>
            </div>
          </div>

          {/* Popular Searches */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Popular Searches:</h3>
            <div className="flex flex-wrap gap-3">
              {[
                '2BHK in Newtown',
                '3BHK in Salt Lake',
                'Flats under 30 Lakhs',
                'Ready to Move Rajarhat',
                'Luxury Flats Kolkata',
                'Affordable Housing'
              ].map((search) => (
                <button
                  key={search}
                  className="px-4 py-2 bg-gray-100 hover:bg-[#d4af37] hover:text-white rounded-full text-sm font-medium transition-all duration-200"
                >
                  {search}
                </button>
              ))}
            </div>
          </div>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#d4af37] mb-2">500+</div>
            <div className="text-gray-600">Flats for Sale</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#d4af37] mb-2">50+</div>
            <div className="text-gray-600">Prime Locations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#d4af37] mb-2">1000+</div>
            <div className="text-gray-600">Happy Families</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#d4af37] mb-2">25+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}