export const SITE = {
  name: "Hotel Fellini",
  fullName: "Hotel Fellini Rimini",
  tagline: "Adriatic Dolce Vita",
  description:
    "A cinema-inspired boutique hotel on the Rimini seafront — mid-century glamour, rooftop views of the Adriatic, and unhurried Romagna hospitality.",
  address: "Viale Rapallo, 21, 47924 Rimini RN, Italy",
  addressShort: "Viale Rapallo, 21 · Rimini",
  phoneDisplay: "+39 346 384 8727",
  phoneHref: "tel:+393463848727",
  email: "stay@hotelfellini-rimini.it",
  mapEmbedSrc:
    "https://www.google.com/maps?q=Viale+Rapallo+21,+47924+Rimini+RN,+Italy&output=embed",
  mapLinkSrc:
    "https://www.google.com/maps/search/?api=1&query=Viale+Rapallo+21,+47924+Rimini+RN,+Italy",
} as const;

export const NAV_LINKS = [
  { label: "Suites", href: "/rooms" },
  { label: "Experience", href: "/experience" },
  { label: "Gallery", href: "/gallery" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
] as const;

export const STATS = [
  { value: 42, suffix: "", label: "Rooms & Suites", decimals: 0 },
  { value: 90, suffix: "m", label: "To the Beach", decimals: 0 },
  { value: 4.9, suffix: "", label: "Guest Rating", decimals: 1 },
  { value: 24, suffix: "/7", label: "Concierge", decimals: 0 },
] as const;

export interface RoomType {
  id: string;
  name: string;
  film: string;
  tagline: string;
  description: string;
  price: number;
  size: number;
  bed: string;
  view: string;
  image: string;
}

export const ROOMS: RoomType[] = [
  {
    id: "amarcord",
    name: "Amarcord Room",
    film: "after Fellini's Amarcord",
    tagline: "Memory, warmth, and home",
    description:
      "Soft linen tones, walnut furnishings, and light that pools on the floor by afternoon — a quiet room built around comfort rather than spectacle.",
    price: 140,
    size: 24,
    bed: "King or Twin",
    view: "City or Garden view",
    image: "/images/room-amarcord.jpg",
  },
  {
    id: "dolce-vita",
    name: "La Dolce Vita Suite",
    film: "after Fellini's La Dolce Vita",
    tagline: "Old Hollywood, Adriatic air",
    description:
      "A separate lounge, a chandelier that throws gold across the ceiling, and furnishings for guests who still dress for dinner.",
    price: 220,
    size: 38,
    bed: "King",
    view: "Partial sea view",
    image: "/images/room-dolce-vita.jpg",
  },
  {
    id: "otto-e-mezzo",
    name: "8½ Sea View Room",
    film: "after Fellini's 8½",
    tagline: "A private frame on the sea",
    description:
      "The Adriatic fills the balcony doors from sunrise to last light — the room our guests photograph most, and leave last.",
    price: 180,
    size: 28,
    bed: "King",
    view: "Full sea-view balcony",
    image: "/images/room-otto-e-mezzo.jpg",
  },
];

export interface Amenity {
  icon: string;
  title: string;
  description: string;
}

export const AMENITIES: Amenity[] = [
  {
    icon: "Umbrella",
    title: "Private Beach",
    description: "Reserved loungers and striped umbrellas, ninety seconds from the lobby.",
  },
  {
    icon: "Waves",
    title: "Rooftop Pool & Bar",
    description: "Aperitivo at golden hour, with Adriatic views to the horizon.",
  },
  {
    icon: "Clapperboard",
    title: "Cinema Lounge",
    description: "A small screening room paying homage to Rimini's most famous son.",
  },
  {
    icon: "Sparkles",
    title: "Wellness & Spa",
    description: "Sea-inspired treatments, sauna, and a stillness that's hard to find elsewhere.",
  },
  {
    icon: "UtensilsCrossed",
    title: "Coastal Dining",
    description: "Romagna cuisine reimagined nightly, from the boat to the table.",
  },
  {
    icon: "Bike",
    title: "Bike & Vespa Rental",
    description: "Ride the seafront promenade, or the cobblestones of the old town.",
  },
];

export interface Experience {
  id: string;
  title: string;
  icon: string;
  tagline: string;
  description: string;
  duration: string;
  price: number;
  priceUnit: string;
  image: string | null;
}

export const EXPERIENCES: Experience[] = [
  {
    id: "sunset-sail",
    title: "Sunset Aperitivo Sail",
    icon: "Waves",
    tagline: "The Adriatic, from the water",
    description:
      "A small wooden gozzo boat out past the breakwater as the light turns gold, Romagna wine and cicchetti served on deck by our own crew.",
    duration: "2.5 hours, evenings",
    price: 65,
    priceUnit: "per guest",
    image: "/images/hero-twilight-coast.jpg",
  },
  {
    id: "cooking-class",
    title: "Romagna Cooking Class",
    icon: "UtensilsCrossed",
    tagline: "Piadina, by hand",
    description:
      "Our chef teaches the dishes his nonna taught him — hand-rolled piadina, tagliatelle, a sauce that takes four hours and is worth every one.",
    duration: "3 hours, mornings",
    price: 95,
    priceUnit: "per guest",
    image: "/images/gallery-dining.jpg",
  },
  {
    id: "spa-ritual",
    title: "Adriatic Spa Ritual",
    icon: "Sparkles",
    tagline: "Sea salt, sauna, stillness",
    description:
      "A ninety-minute ritual built around the coast itself — sea-salt scrub, thermal sauna, and a treatment room that looks straight out to the horizon.",
    duration: "90 minutes",
    price: 120,
    priceUnit: "per guest",
    image: "/images/gallery-spa.jpg",
  },
  {
    id: "fellini-film-night",
    title: "Fellini Film Night",
    icon: "Clapperboard",
    tagline: "In the cinema lounge",
    description:
      "A private screening in our small cinema lounge — your pick of Amarcord, La Dolce Vita, or 8½ — with popcorn, negronis, and the projector our concierge still insists on running from film.",
    duration: "2 hours, evenings",
    price: 40,
    priceUnit: "per couple",
    image: null,
  },
  {
    id: "old-town-vespa",
    title: "Old Town Vespa Tour",
    icon: "Bike",
    tagline: "Cobblestones and piazzas",
    description:
      "Two Vespas, one guide, and Rimini's old town at its own pace — the Tiberius Bridge, Piazza Malatesta, and the espresso stop nobody puts on a map.",
    duration: "2 hours, mornings",
    price: 80,
    priceUnit: "per Vespa (2 guests)",
    image: "/images/gallery-piazza-malatesta.jpg",
  },
  {
    id: "beach-cabana-day",
    title: "Private Beach Cabana Day",
    icon: "Umbrella",
    tagline: "Ninety seconds from your room",
    description:
      "A reserved cabana on our stretch of shore for the day — loungers, shade, a standing lunch order, and someone to bring the drinks.",
    duration: "Full day",
    price: 55,
    priceUnit: "per cabana",
    image: "/images/gallery-beach-bars.jpg",
  },
];

export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  span?: "wide" | "tall" | "normal";
}

export const GALLERY: GalleryImage[] = [
  {
    src: "/images/hero-twilight-coast.jpg",
    alt: "Rimini shoreline at twilight seen from above",
    caption: "Adriatic twilight, from the seafront",
    span: "wide",
  },
  {
    src: "/images/gallery-pool.jpg",
    alt: "Rooftop pool glowing at sunset",
    caption: "Rooftop pool, golden hour",
  },
  {
    src: "/images/gallery-piazza-malatesta.jpg",
    alt: "Historic Piazza Malatesta in Rimini's old town",
    caption: "Piazza Malatesta, old town",
  },
  {
    src: "/images/gallery-umbrellas.jpg",
    alt: "Rows of white umbrellas on the beach",
    caption: "The famous rows of the shore",
    span: "tall",
  },
  {
    src: "/images/gallery-spa.jpg",
    alt: "Calm spa treatment room",
    caption: "Wellness & spa retreat",
  },
  {
    src: "/images/gallery-dining.jpg",
    alt: "Elegant plated fine dining dish",
    caption: "Coastal Romagna cuisine",
  },
  {
    src: "/images/gallery-beach-bars.jpg",
    alt: "Lively beach bars along the Rimini shoreline",
    caption: "Rimini's legendary beach clubs",
    span: "wide",
  },
  {
    src: "/images/gallery-coast-day.jpg",
    alt: "Rimini coastline by day from above",
    caption: "The coastline, by day",
  },
];

export interface Testimonial {
  name: string;
  location: string;
  quote: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sofia M.",
    location: "Milan, Italy",
    quote:
      "The rooftop at sunset is worth the trip alone. Quiet, warm, effortlessly beautiful — nothing like the big resorts further down the coast.",
    rating: 5,
  },
  {
    name: "James T.",
    location: "London, UK",
    quote:
      "Small details everywhere — the cinema lounge, the film-reference room names. You can tell someone actually designed this place with care.",
    rating: 5,
  },
  {
    name: "Elena R.",
    location: "Vienna, Austria",
    quote:
      "Staff remembered our names by day two. The 8½ room's balcony is the best seat on the whole Adriatic coast.",
    rating: 5,
  },
  {
    name: "Marco B.",
    location: "Rome, Italy",
    quote:
      "La Dolce Vita Suite is exactly what it promises — genuinely glamorous, not just marketing. Booking again next summer.",
    rating: 5,
  },
  {
    name: "Charlotte D.",
    location: "Paris, France",
    quote:
      "Ninety seconds to the beach was not an exaggeration. Breakfast on the terrace, sea air, no rush. Exactly what we needed.",
    rating: 5,
  },
];

export interface JournalPost {
  id: string;
  title: string;
  tag: string;
  excerpt: string;
  date: string;
  readTime: string;
  cover: string;
  body: string[];
}

export const JOURNAL: JournalPost[] = [
  {
    id: "an-evening-in-piazza-malatesta",
    title: "An Evening in Piazza Malatesta",
    tag: "Old Town",
    excerpt:
      "Ten minutes from the seafront, Rimini keeps a whole other city — cobblestones, a Roman bridge, and a piazza that gets better after dark.",
    date: "2026-06-12",
    readTime: "4 min read",
    cover: "/images/gallery-piazza-malatesta.jpg",
    body: [
      "Most of our guests arrive for the coast and never make it inland, which we understand — the beach is ninety seconds away, and the pool has a view that makes leaving it feel unnecessary. But Rimini's old town is a ten-minute walk from the lobby, and it holds a version of the city the postcards don't show.",
      "Start at the Tiberius Bridge, still carrying traffic after nearly two thousand years, and follow Corso d'Augusto in as the evening light goes long. By seven, Piazza Malatesta fills with exactly the kind of unhurried crowd Fellini used to film — kids on bicycles, old men arguing gently about football, a gelato queue that never quite gets shorter.",
      "We send guests to a wine bar two streets off the piazza that doesn't have a sign, only a chalkboard. Order the Sangiovese and whatever the owner is serving with it. Our concierge can draw you the route on a napkin, and usually does.",
      "Come back along the water. The walk home is the best part.",
    ],
  },
  {
    id: "why-every-room-carries-a-film",
    title: "Why Every Room Carries a Fellini Film",
    tag: "The Hotel",
    excerpt:
      "Amarcord, La Dolce Vita, 8½ — the naming wasn't a marketing idea. It came from a much smaller decision made during renovation.",
    date: "2026-04-03",
    readTime: "3 min read",
    cover: "/images/room-dolce-vita.jpg",
    body: [
      "When we started renovating the building, the working name for every room was just a number. Somewhere in the second month, someone on the design team pinned a still from Amarcord above the desk in what's now Room 2 — not for any grand reason, just because the light in the photo matched the light coming through that window at four in the afternoon.",
      "It stuck. By the time the rooms were finished, each one had quietly picked up a film to go with its mood rather than its number: the warm, unhurried one became Amarcord. The one with the chandelier and the separate lounge became La Dolce Vita. The one where the sea fills the balcony doors from sunrise onward could only be 8½.",
      "Fellini was born a few streets from here, and Rimini has never quite let him go — his face is on murals, his films play in the summer piazza screenings, and half the city can quote Amarcord's opening scene. Naming the rooms after him wasn't really a choice. It was more that nothing else fit.",
    ],
  },
  {
    id: "ninety-seconds-to-the-sea",
    title: "Ninety Seconds to the Sea",
    tag: "The Coast",
    excerpt:
      "A short guide to our stretch of the Adriatic — when to go, when to skip it, and the one thing to do at golden hour.",
    date: "2026-03-21",
    readTime: "3 min read",
    cover: "/images/gallery-coast-day.jpg",
    body: [
      "The beach in front of the hotel is quiet before nine and loud by eleven — Rimini's shoreline fills fast in the warmer months, and the rows of striped umbrellas you've probably seen in photos are as full as they look. If you want the sand to yourself, mornings are the only real window.",
      "By afternoon, the energy moves to the beach clubs further along the shore — the kind with music, spritz, and a very Italian disregard for anyone in a hurry. We can get you a table at the good ones without the wait, which is most of what a concierge is actually for.",
      "But the real move is golden hour. Around eight, the light goes the color our hero photo is named for, the day-trippers thin out, and the water turns still enough to hear the waves properly for the first time since morning. Grab a spritz from the rooftop bar and take it down to the shore. It's the ninety seconds we always mean.",
    ],
  },
];
