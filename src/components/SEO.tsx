import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export function SEO({
  title = "Easymakan | Easy makan| Buy 1BHK 2BHK 3BHK Flats in Kolkata | Real Estate Property Sale",
  description = "Easymakan - Buy & Sell 1BHK 2BHK 3BHK flats in Kolkata. Real estate properties in Newtown, Salt Lake, Rajarhat. Ready to move apartments. Best deals by Easy Makan Development.",
  keywords = "easymakan, easy makan, easymakan kolkata, 1bhk flat kolkata, 2bhk flat kolkata, 3bhk flat kolkata, buy flat kolkata, sell flat kolkata, real estate kolkata, property sale kolkata, flats for sale kolkata, newtown flats, salt lake property, rajarhat apartments, kolkata real estate, ready to move flats, luxury apartments kolkata, affordable housing kolkata, flat resale kolkata, property buy sell kolkata",
  image = "https://www.easymakandev.com/og-image.jpg",
  url = "https://www.easymakandev.com",
  type = "website"
}: SEOProps) {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="EasyMakan" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="EasyMakan Development Corporation" />
      <link rel="canonical" href={url} />
      
      {/* Schema.org structured data - Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RealEstateAgent",
          "name": "Easymakan Development Corporation",
          "alternateName": ["Easy Makan", "Easymakan", "EasyMakan Kolkata"],
          "url": "https://www.easymakandev.com",
          "logo": "https://www.easymakandev.com/logo.png",
          "description": "Easymakan - Leading real estate developer in Kolkata. Buy & sell 1BHK, 2BHK, 3BHK flats in Newtown, Salt Lake, Rajarhat. Ready to move luxury apartments and affordable housing.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Newtown, Rajarhat",
            "addressLocality": "Kolkata",
            "addressRegion": "West Bengal",
            "postalCode": "700156",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "22.5726",
            "longitude": "88.3639"
          },
          "areaServed": [
            {"@type": "City", "name": "Kolkata"},
            {"@type": "Place", "name": "Newtown"},
            {"@type": "Place", "name": "Salt Lake"},
            {"@type": "Place", "name": "Rajarhat"},
            {"@type": "Place", "name": "Dum Dum"},
            {"@type": "Place", "name": "Barasat"},
            {"@type": "Place", "name": "Baguihati"},
            {"@type": "Place", "name": "Howrah"},
            {"@type": "Place", "name": "Behala"},
            {"@type": "Place", "name": "Garia"}
          ],
          "priceRange": "₹20,00,000 - ₹2,00,00,000",
          "telephone": "+91-8777654651",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-8777654651",
            "contactType": "customer service",
            "availableLanguage": ["English", "Hindi", "Bengali"],
            "areaServed": "IN"
          },
          "sameAs": [
            "https://facebook.com/easymakan",
            "https://instagram.com/easymakan",
            "https://linkedin.com/company/easymakan"
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "250"
          }
        })}
      </script>
      
      {/* Schema.org - Local Business */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Easymakan",
          "image": "https://www.easymakandev.com/logo.png",
          "@id": "https://www.easymakandev.com",
          "url": "https://www.easymakandev.com",
          "telephone": "+91-8777654651",
          "priceRange": "₹₹-₹₹₹",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Newtown",
            "addressLocality": "Kolkata",
            "addressRegion": "WB",
            "postalCode": "700156",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 22.5726,
            "longitude": 88.3639
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "09:00",
            "closes": "20:00"
          }
        })}
      </script>
      
      {/* Schema.org - Product Listings */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Flats for Sale in Kolkata by Easymakan",
          "description": "1BHK, 2BHK, 3BHK flats for sale in Kolkata",
          "itemListElement": [
            {
              "@type": "Product",
              "name": "1BHK Flats in Kolkata",
              "description": "Affordable 1BHK flats for sale in Kolkata by Easymakan",
              "offers": {
                "@type": "AggregateOffer",
                "priceCurrency": "INR",
                "lowPrice": "2000000",
                "highPrice": "4000000"
              }
            },
            {
              "@type": "Product",
              "name": "2BHK Flats in Kolkata",
              "description": "Spacious 2BHK flats for sale in Kolkata by Easymakan",
              "offers": {
                "@type": "AggregateOffer",
                "priceCurrency": "INR",
                "lowPrice": "4000000",
                "highPrice": "8000000"
              }
            },
            {
              "@type": "Product",
              "name": "3BHK Flats in Kolkata",
              "description": "Luxury 3BHK flats for sale in Kolkata by Easymakan",
              "offers": {
                "@type": "AggregateOffer",
                "priceCurrency": "INR",
                "lowPrice": "8000000",
                "highPrice": "20000000"
              }
            }
          ]
        })}
      </script>
    </Helmet>
  );
}