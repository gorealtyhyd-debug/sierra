export const SITE = {
  name: 'Subishi Sierra',
  tagline: 'Luxury Villas on Maheshwaram Road, Hyderabad',
  url: 'https://www.subishisierra.com',
  rera: 'TG RERA No. P02400011199',
  locality: 'Kalwakole, Maheshwaram Road',
  region: 'Telangana',
  country: 'IN',
  geo: { lat: 17.1855, lng: 78.4622 }
};

export const STATS = [
  { value: '36', label: 'ACRES' },
  { value: '336', label: 'VILLAS' },
  { value: '300', label: 'SQ. YARDS' },
  { value: '3600', label: 'SQ. FEET' }
];

export const ZONES = [
  { value: '60 ft', label: 'MAIN AVENUES' },
  { value: '336', label: 'VILLA PLOTS' },
  { value: '4', label: 'PARK POCKETS' },
  { value: '1', label: 'GRAND CLUBHOUSE' }
];

export const PLANS = {
  East: [
    { floor: 'GROUND FLOOR', src: 'https://framerusercontent.com/images/5JocRIU8hOta3YolOnDnec3v5yE.png?width=1600', alt: 'East facing villa ground floor plan' },
    { floor: 'FIRST FLOOR', src: 'https://framerusercontent.com/images/NMwRQNA3h57OcRdbSfmLYCUc.png?width=1600', alt: 'East facing villa first floor plan' },
    { floor: 'SECOND FLOOR', src: 'https://framerusercontent.com/images/N2uruM1ogq03dgpGzG4LJ4mY1M.png?width=1600', alt: 'East facing villa second floor plan' }
  ],
  West: [
    { floor: 'GROUND FLOOR', src: 'https://framerusercontent.com/images/W1kdFqZ7dUYJA5pxFlpx3r3jM.png?width=1600', alt: 'West facing villa ground floor plan' },
    { floor: 'FIRST FLOOR', src: 'https://framerusercontent.com/images/4b1DJ6XtDDabV5Sp5iBM5YYJCE.png?width=1600', alt: 'West facing villa first floor plan' },
    { floor: 'SECOND FLOOR', src: 'https://framerusercontent.com/images/XnOU2vxxSm4rIpDlUUaUof3sH7k.png?width=1600', alt: 'West facing villa second floor plan' }
  ]
};

export const GALLERY = [
  'sa2mqbZ2hKPO2gikMwhLoFqls', 'e9DgEI3JIRq9FJ8j9qhIU7iA6yQ', 'JrStVbHHWs11ujdNRlxV1nLxm8',
  'TA9pTRPuM6ZzsT1DqZZ6r4S5Lw', 'm9IImUNZ63g3cjLcSXTs17ESVIU', 'dTcMqvdL8LzeXiDatAKAX3KDA',
  'sI7w69XNv6rFvj48CPrrGFmlTM', 'ughM0ObdSFZcNXeSZrjcci0Kck', 'vTdG7q5KjJILUpLu1T2kBkHTYM',
  'XbzpgctMEKaRGs0xssbQRgUsbTI', 'lKFBWYu0DGR62BsTqFvsOT6B5Bs', '4jWc1XZSKbt5OgZtE8fP1kDjyk'
].map((id) => 'https://framerusercontent.com/images/' + id + '.webp?width=1600');

export const AMENITIES = [
  'Auditorium', 'Pickleball Court', 'Basketball', 'Indoor Games', 'Cricket', 'Yoga Studio',
  'Tennis', 'Volleyball', 'Badminton', 'Guest Rooms', '& Many More'
];

export const FEATURED = [
  {
    tab: 'CLUBHOUSE',
    title: 'The Clubhouse',
    text: 'A grand-volume clubhouse at the heart of the community — auditorium, indoor games, guest rooms, and lounges built for gathering.',
    img: 'https://images.pexels.com/photos/5563469/pexels-photo-5563469.jpeg?auto=compress&cs=tinysrgb&w=1800'
  },
  {
    tab: 'SWIMMING POOL',
    title: 'Swimming Pool & Deck',
    text: 'A generous pool edged by a sun deck and landscaped surrounds, screened for privacy and open to the sky.',
    img: 'https://images.pexels.com/photos/1025344/pexels-photo-1025344.jpeg?auto=compress&cs=tinysrgb&w=1800'
  },
  {
    tab: 'FITNESS',
    title: 'Fitness Centre & Yoga Studio',
    text: 'A fully equipped gymnasium alongside a quiet yoga studio — wellness a short walk from every villa.',
    img: 'https://images.pexels.com/photos/17227607/pexels-photo-17227607.jpeg?auto=compress&cs=tinysrgb&w=1800'
  },
  {
    tab: 'SPORTS COURTS',
    title: 'Courts & Playfields',
    text: 'Pickleball, tennis, badminton, basketball, volleyball, and cricket — the community at play through the evening.',
    img: 'https://images.pexels.com/photos/9739478/pexels-photo-9739478.jpeg?auto=compress&cs=tinysrgb&w=1800'
  },
  {
    tab: 'PARKS',
    title: 'Parks & Walking Track',
    text: 'Green pockets threaded by a shaded walking track, connecting the avenues into one continuous landscape.',
    img: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1800'
  },
  {
    tab: 'AVENUES',
    title: 'Tree-lined Avenues',
    text: 'Sixty-foot avenues planted end to end — the daily walk to the clubhouse shaded the whole way.',
    img: 'https://images.pexels.com/photos/31684857/pexels-photo-31684857.jpeg?auto=compress&cs=tinysrgb&w=1800'
  }
];

export const TIERS = [
  { time: '10 min', label: 'LESS THAN 10 MIN AWAY', places: ['NH44', 'ORR Exit 15', 'Statue of Equality', 'JIMS Hospital', 'E City Maheshwaram', 'Wipro Enterprises', 'Subishi Serenity Homes', 'ORR Exit 16'] },
  { time: '20 min', label: 'ABOUT 20 MIN AWAY', places: ['RGI Airport', 'DPS Aerocity', 'Amity University', 'LV Prasad Eye Institute', 'Sancta Maria International School', 'Basil Woods School'] },
  { time: 'Scenic', label: 'A SHORT SCENIC DRIVE AWAY', places: ['Neopolis', 'The Aga Khan Academy', 'Manchester Global School', 'Bharat Future City', 'Wonderla Amusement Park', 'Kanha Shanti Vanam', 'Horizon Industrial Park'] },
  { time: 'City', label: 'A COMFORTABLE DRIVE FROM HOME', places: ['Financial District', 'Knowledge City', 'Kokapet SEZ', 'Mokila / Shankarpally', 'Gandipet', 'Continental Hospitals'] }
];

export const SPECS = [
  { title: 'Structure', items: ['RCC framed structure', 'Quality red brickwork in cement mortar', 'Grade slab of M25 concrete'] },
  { title: 'Plastering', items: ['Internal: double coat of cement for a smooth finish', 'External: double coat of sand-faced cement'] },
  { title: 'Painting', items: ['External: texture-based paint / Apex paint of Asian or ICI make', 'Internal: two coats of Acrylic Royal Emulsion over a coat of primer and putty', 'Ceiling: two coats of Acrylic Royal Emulsion over a coat of primer and putty'] },
  { title: 'Doors & Windows', items: ["Main door: engineered B.T wood frame of 4' x 7.5'; designed shutter with melamine polishing / veneer and designer hardware", 'Internal doors: engineered B.T wood frame; polished masonite flush shutters', 'Windows: aluminium frames and shutters with glass panels of Tostem or equivalent make'] },
  { title: 'Flooring', items: ['Vitrified porcelain tiles in bedrooms, living, drawing, dining and staircase areas', 'Bathrooms: anti-skid finish vitrified tiles', 'Balconies: clay or ceramic tiles', 'Parking area: cement-based tiles over a PCC bed', 'Utility: anti-skid ceramic tiles'] },
  { title: 'Kitchen', items: ['Utility / wash: anti-skid ceramic tiles', 'Provision for washing machine, dishwasher and a wet area for washing utensils'] },
  { title: 'Toilets', items: ["Designer vitrified tile up to 7' height of AGL / Kajaria or equivalent make", 'Washbasin with hot and cold mixer valve', 'Sanitaryware of Duravit / American Standard or equivalent make', 'Hot and cold wall mixer with shower', 'Chrome-plated C.P. fittings of Grohe or equivalent make', 'Solar provision with built-in electrical backup heater (at additional cost)'] },
  { title: 'Plumbing & Sanitary', items: ['Water supply: ISI mark GI / Kimplast / CPVC piping', 'Drainage: ISI mark PVC SWR sanitary piping', 'Softened water supply', 'STP for water recycling', 'Provision for solar heater plumbing connection', 'Overhead tank of 500–1000 litres capacity'] },
  { title: 'Electrical', items: ['Concealed copper wiring of Finolex / Anchor or equivalent make in conduits', 'Power outlets for air conditioners in all bedrooms', 'Plug points for refrigerator, TV and audio systems', 'Standard: 30 plug points, 6 AC points and 60 switches; additional points charged as appropriate', '3-phase supply for each unit', 'Miniature circuit breakers (MCB) of reputed make', 'Generator: DG backup of 3KVA per home'] }
];

export const FAQS = [
  { q: 'Where is Subishi Sierra located?', a: 'Subishi Sierra is on Maheshwaram Road at Kalwakole, Telangana — about 15 minutes from ORR Exit 15 and close to NH44, E City Maheshwaram and the Statue of Equality.' },
  { q: 'How big is the project and how many villas are there?', a: 'The community spans 36 acres and comprises 336 luxury villas, planned with 60 ft main avenues, four park pockets and one grand clubhouse.' },
  { q: 'What villa sizes and configurations are available?', a: 'Villas are offered in east facing and west facing orientations, each on a 300 sq. yd plot with 3,600 sq. ft of built-up area across three floors.' },
  { q: 'Is Subishi Sierra RERA approved?', a: 'Yes. The project is registered with Telangana RERA under registration number P02400011199.' },
  { q: 'How far is the airport from Subishi Sierra?', a: 'Rajiv Gandhi International Airport is roughly a 20 minute drive, as are DPS Aerocity, Amity University and LV Prasad Eye Institute.' },
  { q: 'Can I see the master layout and plot availability?', a: 'The master layout and current plot availability are shared on request — submit an enquiry and the sales team will send the full plan.' }
];
