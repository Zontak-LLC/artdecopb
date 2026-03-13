// Static data for local development and SSG
// In production, these would come from D1 database

export const siteConfig = {
  name: "Art Deco Society of the Palm Beaches",
  shortName: "ADSPB",
  founded: 1987,
  currentYear: 2026,
  years: 39,
  type: "A Historic Preservation Organization 501(c)3",
  mission:
    "The Art Deco Society of the Palm Beaches promotes education, preservation and awareness of Twentieth Century Art, Architecture & Design in the Palm Beaches.",
  contact: {
    email: "Art@ArtDecoPB.org",
    phone: "(561) 699-7899",
    address: "325 SW 29th Avenue",
    city: "Delray Beach",
    state: "FL",
    zip: "33445",
    hours: "10am to 6pm / By Appointment Only",
  },
  social: {
    youtube: "https://www.youtube.com/channel/UC627yKy-KUfy58IJ2bQDpAg",
    facebook: "https://www.facebook.com/ArtDecoSocietyPalmBeaches",
  },
};

export const artDecoElements = [
  {
    id: 1,
    name: "Eyebrows",
    description:
      'Cantilevered window shades included in the building\'s structure. Eyebrows look like a "shelf" placed above a window. They shade direct sunlight and keep interiors cool.',
  },
  {
    id: 2,
    name: "Ziggurat or Stepped Pediment",
    description:
      'Profiled like a staircase — up, down, up, down. Also known as "zig zag" or "lightning bolt." Ziggurats are seen on the roofline of buildings, recreating Egyptian motifs.',
  },
  {
    id: 3,
    name: "Rounded Corners",
    description:
      "Technology allowed for construction to be built with rounded corners. In the 1930s and 1940s, the design of airplanes, ships, trains, and automobiles influenced architecture. Rounded corners made buildings appear aerodynamic, fast, and sleek.",
  },
  {
    id: 4,
    name: "Flat Roofs",
    description:
      "Art Deco or Streamline buildings usually have a flat roof or multi-level flat roofs.",
  },
  {
    id: 5,
    name: "Threes",
    description:
      "In Art Deco, everything seems to come in threes: three windows, three bandings, three eyebrows, or three steps. This is probably due to the Egyptian influence of the pyramids — or just good design.",
  },
  {
    id: 6,
    name: "Bandings or Racing Stripes",
    description:
      'Horizontal bandings on the facades of buildings, which can be incised or applied in decorative materials such as tile. Bandings usually come in threes. This simplified ornamentation reinforces aerodynamic concepts of Streamline Moderne.',
  },
  {
    id: 7,
    name: "Columns",
    description:
      "Many Art Deco buildings feature either whole columns, which stand away from the building, or sliced columns attached to the front doorway facade acting as an archway.",
  },
  {
    id: 8,
    name: "Glass Block",
    description:
      "Cool, translucent squares of glass used instead of brick. Allows for light penetration while maintaining privacy — a hallmark of Streamline Moderne architecture.",
  },
  {
    id: 9,
    name: "Other Elements",
    description:
      "Ship-like features, porthole windows, Machine Age symbols, etched glass, relief sculptures, neon signage, terrazzo floors, and tropical motifs are all common Art Deco elements found throughout the Palm Beaches.",
  },
];

export const events = [
  {
    id: 1,
    title: "Art Deco Afternoons — Free Lecture Series",
    description:
      "Join us for our popular free lecture series exploring Art Deco architecture, design, and history in the Palm Beaches. Expert speakers share fascinating stories of our architectural heritage.",
    date: "2026-04-15",
    time: "2:00 PM",
    location:
      "Cultural Council of Palm Beach County, 601 Lake Avenue, Lake Worth Beach, FL",
    isFeatured: true,
    status: "upcoming",
  },
  {
    id: 2,
    title: "Keeping the ART in Art Deco — The Evolution of ICADS",
    description:
      "Sharon Koskoff presents on the International Coalition of Art Deco Societies and the global preservation movement.",
    date: "2026-03-22",
    time: "3:00 PM",
    location: "Cultural Council of Palm Beach County",
    isFeatured: false,
    status: "upcoming",
  },
  {
    id: 3,
    title: "Walking Tour: Historic Downtown Lake Worth Beach",
    description:
      "Explore the Art Deco gems of downtown Lake Worth Beach on a guided walking tour led by ADSPB President Sharon Koskoff.",
    date: "2026-04-05",
    time: "10:00 AM",
    location: "Downtown Lake Worth Beach",
    isFeatured: false,
    status: "upcoming",
  },
  {
    id: 4,
    title: "Plein Air Palm Beaches",
    description:
      "Artists paint on location at historic Art Deco sites throughout the Palm Beaches. Watch artists capture the beauty of our architectural heritage.",
    date: "2026-05-10",
    time: "9:00 AM",
    location: "Various locations",
    isFeatured: false,
    status: "upcoming",
  },
  {
    id: 5,
    title: "Holiday Alive Art Deco 1925!",
    description:
      "A spectacular holiday celebration featuring Art Deco style, music, fashion, and fun. Costumes encouraged!",
    date: "2025-12-14",
    time: "6:00 PM",
    location: "Historic Palm Beach",
    isFeatured: true,
    status: "past",
  },
  {
    id: 6,
    title: "Art In The Alley",
    description:
      "A vibrant community art event featuring local artists, live painting, music, and Art Deco-inspired creativity in the heart of downtown.",
    date: "2026-06-01",
    time: "11:00 AM",
    location: "Downtown Alley, Lake Worth Beach",
    isFeatured: false,
    status: "upcoming",
  },
];

export const boardMembers = [
  {
    id: 1,
    name: "Sharon Koskoff",
    role: "President",
    bio: 'Author of "Art Deco of the Palm Beaches" and cultural guardian dedicated to preserving Palm Beaches architecture. Sharon has led ADSPB since its founding and is recognized internationally for her preservation work.',
  },
  {
    id: 2,
    name: "Zack Zacharias",
    role: "Board Member",
    bio: "Active board member and advocate for Art Deco preservation in South Florida.",
  },
  {
    id: 3,
    name: "Gary Lawrence",
    role: "Music Education Coordinator",
    bio: "Brings the sounds of the Art Deco era to life through educational programs and events.",
  },
];

export const membershipTiers = [
  {
    id: 1,
    name: "Individual",
    price: 35,
    benefits: [
      "Free admission to all lectures",
      "Newsletter subscription",
      "Walking tour discounts",
      "Invitations to member-only events",
    ],
  },
  {
    id: 2,
    name: "Family",
    price: 50,
    benefits: [
      "All Individual benefits",
      "Admission for up to 4 family members",
      "Free children's programs",
      "Family event priority registration",
    ],
  },
  {
    id: 3,
    name: "Patron",
    price: 100,
    benefits: [
      "All Family benefits",
      "VIP seating at lectures",
      "Exclusive patron events",
      "Name recognition in publications",
      "Complimentary book: Art Deco of the Palm Beaches",
    ],
  },
  {
    id: 4,
    name: "Benefactor",
    price: 250,
    benefits: [
      "All Patron benefits",
      "Private guided tours",
      "Invitation to annual gala",
      "Board meeting guest privileges",
      "Tax-deductible donation receipt",
    ],
  },
];
