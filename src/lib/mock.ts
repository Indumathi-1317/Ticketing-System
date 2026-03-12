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
};

export const MOCK_EVENTS: Event[] = [
  {
    id: '1',
    title: 'Vibrant Bollywood Night 2026',
    date: 'Apr 15, 2026',
    time: '8:00 PM',
    location: 'Mumbai, Maharashtra',
    price: 1499,
    description: 'An immersive auditory visual experience featuring top contemporary Bollywood artists playing amidst a spectacular light show.',
    imageUrl: 'url("/indian_cultural_event_1773327220314.png")',
    organizer: 'BollyEvents India',
    availableTickets: 120,
  },
  {
    id: '2',
    title: 'India Tech Innovation Summit',
    date: 'May 10, 2026',
    time: '9:00 AM',
    location: 'Bangalore, Karnataka',
    price: 4999,
    description: 'The annual gathering of tech innovators, founders, and investors from across India. Discover what the next decade of technology looks like.',
    imageUrl: 'url("/mumbai_tech_conference_1773327716138.png")',
    organizer: 'Bharat Tech Council',
    availableTickets: 50,
  },
  {
    id: '3',
    title: 'Delhi Street Food Festival',
    date: 'Jun 02, 2026',
    time: '6:00 PM',
    location: 'Chanakyapuri, New Delhi',
    price: 0,
    description: 'Explore the culinary delights of North India in this massive open-air food market that runs till dawn.',
    imageUrl: 'url("/delhi_food_festival_1773327749790.png")',
    organizer: 'Delhi Foodies Club',
    availableTickets: 500,
  },
  {
    id: '4',
    title: 'Web3 Bharat Meetup',
    date: 'Jun 15, 2026',
    time: '7:30 PM',
    location: 'Hyderabad, Telangana',
    price: 499,
    description: 'Join local developers discussing the latest in web3, smart contracts, and decentralized architectures in the Indian ecosystem.',
    imageUrl: 'linear-gradient(45deg, #14532d, #166534)',
    organizer: 'Ethereum India',
    availableTickets: 25,
  },
  {
    id: '5',
    title: 'Indie Game Fest India',
    date: 'Jul 20, 2026',
    time: '10:00 AM',
    location: 'Pune, Maharashtra',
    price: 999,
    description: 'Play exclusive demos, meet Indian indie developers, and celebrate the world of independent game development.',
    imageUrl: 'linear-gradient(45deg, #831843, #9d174d)',
    organizer: 'IGDA India',
    availableTickets: 200,
  }
];
