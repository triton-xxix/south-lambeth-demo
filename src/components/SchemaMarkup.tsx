import { useEffect } from 'react';

export function SchemaMarkup() {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'South Lambeth Roofing',
      image: '/images/hero-roofer.jpg',
      '@id': 'https://rproofing.co.uk',
      url: 'https://rproofing.co.uk',
      telephone: '+442085488542',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Wandsworth Rd',
        addressLocality: 'South Lambeth',
        addressRegion: 'London',
        postalCode: 'SW8 3JL',
        addressCountry: 'GB',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 51.4396,
        longitude: -0.0414,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '18:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '09:00',
          closes: '16:00',
        },
      ],
      priceRange: '££',
      areaServed: {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: 51.4396,
          longitude: -0.0414,
        },
        geoRadius: '10000',
      },
      serviceType: [
        'Roof Repairs',
        'New Roof Installation',
        'Flat Roofing',
        'Chimney Repairs',
        'Guttering Services',
        'Emergency Roofing',
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '27',
        bestRating: '5',
        worstRating: '1',
      },
      review: [
        {
          '@type': 'Review',
          author: {
            '@type': 'Person',
            name: 'James',
          },
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
          },
          reviewBody:
            'Had a leak during heavy rain—South Lambeth Roofing came quickly and fixed it properly. Great communication and fair price.',
          datePublished: '2024-01-15',
        },
        {
          '@type': 'Review',
          author: {
            '@type': 'Person',
            name: 'Sofia',
          },
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
          },
          reviewBody:
            'New flat roof looks perfect. Clean work, on time, and explained everything clearly. Highly recommend.',
          datePublished: '2024-02-03',
        },
        {
          '@type': 'Review',
          author: {
            '@type': 'Person',
            name: 'Mark',
          },
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
          },
          reviewBody:
            'Chimney repairs and guttering done to a high standard. Polite team and left everything tidy.',
          datePublished: '2024-01-28',
        },
      ],
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}