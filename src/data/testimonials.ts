export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Emily Johnson',
    role: 'Coffee Enthusiast',
    content: 'The best coffee in town! Their Ethiopian blend is absolutely divine. The atmosphere is cozy and the staff is incredibly knowledgeable.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
  },
  {
    id: 't2',
    name: 'David Chen',
    role: 'Regular Customer',
    content: 'I\'ve been coming here for years. The quality is consistently excellent, and they truly care about sustainable sourcing.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
  },
  {
    id: 't3',
    name: 'Sarah Williams',
    role: 'Local Business Owner',
    content: 'Perfect spot for business meetings. Great wifi, amazing coffee, and the pastries are to die for!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
  },
  {
    id: 't4',
    name: 'Michael Brown',
    role: 'Coffee Blogger',
    content: 'Their pour-over technique is impeccable. You can taste the care and expertise in every cup.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
  },
  {
    id: 't5',
    name: 'Lisa Martinez',
    role: 'Student',
    content: 'My go-to study spot! The ambiance is perfect, and the cold brew keeps me energized through long study sessions.',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150',
  },
  {
    id: 't6',
    name: 'James Wilson',
    role: 'Remote Worker',
    content: 'Excellent coffee and even better service. The baristas remember my order and always make my day brighter!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
  },
];
