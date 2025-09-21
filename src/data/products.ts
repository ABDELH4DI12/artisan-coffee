export interface Product {
  id: string;
  name: string;
  category: 'coffee' | 'equipment' | 'accessories';
  price: number;
  image: string;
  description: string;
  origin?: string;
  roast?: 'light' | 'medium' | 'dark';
  tastingNotes?: string[];
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Ethiopian Yirgacheffe',
    category: 'coffee',
    price: 18.99,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&auto=format&fit=crop&q=80',
    description: 'Bright and floral with notes of lemon and blueberry',
    origin: 'Ethiopia',
    roast: 'light',
    tastingNotes: ['Lemon', 'Blueberry', 'Floral'],
    inStock: true,
  },
  {
    id: '2',
    name: 'Colombian Supremo',
    category: 'coffee',
    price: 16.99,
    image: 'https://images.unsplash.com/photo-1611564494260-6f21b80af7ea?w=400&auto=format&fit=crop&q=80',
    description: 'Smooth and balanced with chocolate and caramel notes',
    origin: 'Colombia',
    roast: 'medium',
    tastingNotes: ['Chocolate', 'Caramel', 'Nutty'],
    inStock: true,
  },
  {
    id: '3',
    name: 'French Roast Blend',
    category: 'coffee',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&auto=format&fit=crop&q=80',
    description: 'Bold and smoky with a rich, full body',
    origin: 'Blend',
    roast: 'dark',
    tastingNotes: ['Smoky', 'Bold', 'Dark Chocolate'],
    inStock: true,
  },
  {
    id: '4',
    name: 'Costa Rican Tarrazú',
    category: 'coffee',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784ba3?w=400&auto=format&fit=crop&q=80',
    description: 'Citrusy and bright with a clean finish',
    origin: 'Costa Rica',
    roast: 'medium',
    tastingNotes: ['Citrus', 'Honey', 'Brown Sugar'],
    inStock: true,
  },
  {
    id: '5',
    name: 'Kenyan AA',
    category: 'coffee',
    price: 21.99,
    image: 'https://images.unsplash.com/photo-1607681034540-2c46cc71896d?w=400&auto=format&fit=crop&q=80',
    description: 'Wine-like acidity with black currant notes',
    origin: 'Kenya',
    roast: 'medium',
    tastingNotes: ['Black Currant', 'Wine', 'Bright'],
    inStock: true,
  },
  {
    id: '6',
    name: 'Brazilian Santos',
    category: 'coffee',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1625021659544-0b3d512a9e46?w=400&auto=format&fit=crop&q=80',
    description: 'Nutty and chocolatey with low acidity',
    origin: 'Brazil',
    roast: 'medium',
    tastingNotes: ['Nuts', 'Chocolate', 'Caramel'],
    inStock: true,
  },
  {
    id: '7',
    name: 'Pour Over Kit',
    category: 'equipment',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&auto=format&fit=crop&q=80',
    description: 'Complete pour-over coffee brewing kit with V60 dripper',
    inStock: true,
  },
  {
    id: '8',
    name: 'French Press',
    category: 'equipment',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1519082274554-1ca37fb8abb7?w=400&auto=format&fit=crop&q=80',
    description: 'Classic 32oz French press for rich, full-bodied coffee',
    inStock: true,
  },
  {
    id: '9',
    name: 'Coffee Grinder',
    category: 'equipment',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1521127149192-4438d6686c74?w=400&auto=format&fit=crop&q=80',
    description: 'Burr grinder with 40 grind settings for perfect consistency',
    inStock: true,
  },
  {
    id: '10',
    name: 'Ceramic Mug Set',
    category: 'accessories',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&auto=format&fit=crop&q=80',
    description: 'Set of 4 handcrafted ceramic coffee mugs',
    inStock: true,
  },
  {
    id: '11',
    name: 'Travel Tumbler',
    category: 'accessories',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1570784332176-6e5b67ec2e9c?w=400&auto=format&fit=crop&q=80',
    description: 'Insulated stainless steel tumbler keeps coffee hot for hours',
    inStock: true,
  },
  {
    id: '12',
    name: 'Coffee Scale',
    category: 'equipment',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1593443320739-77f74939d0da?w=400&auto=format&fit=crop&q=80',
    description: 'Digital scale with timer for precise brewing',
    inStock: true,
  },
];

export interface MenuItem {
  id: string;
  name: string;
  category: 'hot-drinks' | 'cold-drinks' | 'pastries';
  price: number;
  description: string;
  image: string;
}

export const menuItems: MenuItem[] = [
  {
    id: 'm1',
    name: 'Espresso',
    category: 'hot-drinks',
    price: 3.50,
    description: 'Double shot of our signature espresso blend',
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 'm2',
    name: 'Cappuccino',
    category: 'hot-drinks',
    price: 4.50,
    description: 'Espresso with steamed milk and velvety foam',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 'm3',
    name: 'Latte',
    category: 'hot-drinks',
    price: 5.00,
    description: 'Smooth espresso with steamed milk and light foam',
    image: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 'm4',
    name: 'Americano',
    category: 'hot-drinks',
    price: 3.75,
    description: 'Espresso with hot water for a smooth, rich flavor',
    image: 'https://images.unsplash.com/photo-1521302080334-4bebac2763a6?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 'm5',
    name: 'Iced Coffee',
    category: 'cold-drinks',
    price: 4.00,
    description: 'Cold brew coffee served over ice',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 'm6',
    name: 'Iced Latte',
    category: 'cold-drinks',
    price: 5.50,
    description: 'Espresso with cold milk served over ice',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 'm7',
    name: 'Croissant',
    category: 'pastries',
    price: 3.50,
    description: 'Buttery, flaky French croissant',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 'm8',
    name: 'Blueberry Muffin',
    category: 'pastries',
    price: 3.75,
    description: 'Fresh-baked muffin with real blueberries',
    image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 'm9',
    name: 'Chocolate Brownie',
    category: 'pastries',
    price: 4.00,
    description: 'Rich, fudgy chocolate brownie',
    image: 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=400&auto=format&fit=crop&q=80',
  },
];
