import { SITE, FAQS, AMENITIES, STATS } from './data';

export function jsonLd() {
  const residence = {
    '@type': 'ApartmentComplex',
    '@id': SITE.url + '/#project',
    name: 'Subishi Sierra',
    description:
      'Subishi Sierra is a 36-acre gated community of 336 luxury villas on Maheshwaram Road, Hyderabad. East and west facing villas of 300 sq. yd and 3,600 sft, with a grand clubhouse, pool, sports courts and tree-lined 60 ft avenues.',
    url: SITE.url,
    numberOfAccommodationUnits: 336,
    petsAllowed: true,
    amenityFeature: ['Clubhouse', 'Swimming Pool', 'Fitness Center', 'Walking Track', 'Play Area'].concat(AMENITIES).map((name) => ({
      '@type': 'LocationFeatureSpecification',
      name,
      value: true
    })),
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Maheshwaram Road, Kalwakole',
      addressLocality: 'Maheshwaram',
      addressRegion: 'Telangana',
      postalCode: '501359',
      addressCountry: 'IN'
    },
    geo: { '@type': 'GeoCoordinates', latitude: SITE.geo.lat, longitude: SITE.geo.lng },
    containsPlace: [
      {
        '@type': 'Accommodation',
        name: 'East facing villa',
        floorSize: { '@type': 'QuantitativeValue', value: 3600, unitCode: 'FTK' },
        numberOfRooms: 4
      },
      {
        '@type': 'Accommodation',
        name: 'West facing villa',
        floorSize: { '@type': 'QuantitativeValue', value: 3600, unitCode: 'FTK' },
        numberOfRooms: 4
      }
    ]
  };

  const org = {
    '@type': 'RealEstateAgent',
    '@id': SITE.url + '/#agent',
    name: 'Subishi Sierra — authorized channel partner',
    url: SITE.url,
    areaServed: 'Hyderabad, Telangana',
    knowsAbout: ['Luxury villas Hyderabad', 'Maheshwaram Road real estate', 'Gated villa communities'],
    identifier: SITE.rera
  };

  const faq = {
    '@type': 'FAQPage',
    '@id': SITE.url + '/#faq',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a }
    }))
  };

  const website = {
    '@type': 'WebSite',
    '@id': SITE.url + '/#website',
    url: SITE.url,
    name: 'Subishi Sierra',
    inLanguage: 'en-IN',
    about: { '@id': SITE.url + '/#project' }
  };

  const breadcrumb = {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'Luxury Villas in Maheshwaram, Hyderabad', item: SITE.url + '/#overview' }
    ]
  };

  const facts = {
    '@type': 'Dataset',
    name: 'Subishi Sierra key facts',
    description: 'Quick reference figures for the Subishi Sierra villa community.',
    variableMeasured: STATS.map((s) => ({ '@type': 'PropertyValue', name: s.label, value: s.value }))
  };

  return { '@context': 'https://schema.org', '@graph': [website, org, residence, faq, breadcrumb, facts] };
}
