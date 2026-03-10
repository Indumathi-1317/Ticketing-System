export type Event = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  price: number;
  description: string;
  imageUrl: string;
  organizer: string;
  availableTickets: number;
  capacity: number;
  ticketsSold: number;
};

export const MOCK_EVENTS: Event[] = [
  {
    id: '1',
    title: 'Neon Symphony 2026',
    date: 'Apr 15, 2026',
    time: '8:00 PM',
    location: 'San Francisco, CA',
    price: 45,
    description: 'An immersive auditory visual experience featuring top contemporary artists playing amidst a spectacular light show.',
    imageUrl: 'linear-gradient(45deg, #1e293b, #334155)',
    organizer: 'SF Arts collective',
    availableTickets: 30,
    capacity: 250,
    ticketsSold: 220,
  },
  {
    id: '2',
    title: 'Tech Innovation Summit',
    date: 'May 10, 2026',
    time: '9:00 AM',
    location: 'New York, NY',
    price: 299,
    description: 'The annual gathering of tech innovators, founders, and investors. Discover what the next decade of technology looks like.',
    imageUrl: 'linear-gradient(45deg, #312e81, #4c1d95)',
    organizer: 'Tech Ventures Inc',
    availableTickets: 50,
    capacity: 500,
    ticketsSold: 450,
  },
  {
    id: '3',
    title: 'Midnight Food Festival',
    date: 'Jun 02, 2026',
    time: '6:00 PM',
    location: 'Austin, TX',
    price: 0,
    description: 'Explore the culinary delights of the world in this massive open-air food market that runs till dawn.',
    imageUrl: 'linear-gradient(45deg, #78350f, #991b1b)',
    organizer: 'ATX Foodies',
    availableTickets: 120,
    capacity: 1000,
    ticketsSold: 880,
  },
  {
    id: '4',
    title: 'Crypto Devs Meetup',
    date: 'Jun 15, 2026',
    time: '7:30 PM',
    location: 'Miami, FL',
    price: 15,
    description: 'Join local developers discussing the latest in web3, smart contracts, and decentralized architectures.',
    imageUrl: 'linear-gradient(45deg, #14532d, #166534)',
    organizer: 'Web3 Miami',
    availableTickets: 5,
    capacity: 50,
    ticketsSold: 45,
  },
  {
    id: '5',
    title: 'Indie Game Fest',
    date: 'Jul 20, 2026',
    time: '10:00 AM',
    location: 'Chicago, IL',
    price: 55,
    description: 'Play exclusive demos, meet indie developers, and celebrate the world of independent game development.',
    imageUrl: 'linear-gradient(45deg, #831843, #9d174d)',
    organizer: 'IGDA Chicago',
    availableTickets: 75,
    capacity: 300,
    ticketsSold: 225,
  }
];

