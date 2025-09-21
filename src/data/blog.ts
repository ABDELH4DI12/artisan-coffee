export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'b1',
    title: 'The Art of Pour Over Coffee',
    excerpt: 'Master the technique of pour over brewing for the perfect cup every time.',
    content: `Pour over coffee is more than just a brewing method—it's an art form that allows you to extract the full potential of your coffee beans. In this guide, we'll walk you through the essential steps to perfect your pour over technique.

    First, start with freshly ground coffee. The grind should be medium-coarse, similar to kosher salt. Use a ratio of 1:15 (coffee to water) for a balanced cup. Heat your water to 195-205°F (90-96°C).

    The key to great pour over is the bloom phase. Start by wetting the grounds with twice their weight in water and wait 30 seconds. This allows CO2 to escape and ensures even extraction.

    Continue pouring in a slow, steady spiral from the center outward, maintaining a consistent water level. The entire brew should take 3-4 minutes.

    Remember, practice makes perfect. Each coffee will have its own ideal parameters, so don't be afraid to experiment!`,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800',
    author: 'Sarah Chen',
    date: '2024-01-15',
    category: 'Brewing Guide',
    readTime: '5 min',
  },
  {
    id: 'b2',
    title: 'Understanding Coffee Origins',
    excerpt: 'Explore how terroir affects the flavor profile of your favorite coffees.',
    content: `Just like wine, coffee is deeply influenced by its terroir—the combination of soil, climate, and altitude where it's grown. Understanding these factors can help you choose coffees that match your taste preferences.

    Ethiopian coffees, grown at high altitudes, often exhibit bright, floral, and fruity notes. The volcanic soil and traditional processing methods contribute to their complex flavor profiles.

    Colombian coffees benefit from ideal growing conditions in the Andes mountains. They typically offer balanced acidity with chocolate and caramel notes.

    Brazilian coffees, grown at lower altitudes, tend to be nutty and chocolatey with lower acidity, making them perfect for espresso blends.

    Next time you're choosing coffee, consider the origin and what flavors you're in the mood for!`,
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800',
    author: 'Michael Rodriguez',
    date: '2024-01-10',
    category: 'Coffee Education',
    readTime: '7 min',
  },
  {
    id: 'b3',
    title: 'Sustainable Coffee: Making a Difference',
    excerpt: 'Learn how choosing sustainable coffee impacts farmers and the environment.',
    content: `Sustainable coffee isn't just a buzzword—it's a commitment to ethical sourcing that benefits farmers, communities, and the environment. Here's why it matters and how you can make a difference.

    Fair trade certification ensures farmers receive a fair price for their beans, enabling them to invest in their communities and improve farming practices.

    Organic coffee is grown without synthetic pesticides or fertilizers, protecting both the environment and the health of farm workers.

    Shade-grown coffee preserves biodiversity by maintaining forest canopy, providing habitat for birds and other wildlife.

    By choosing sustainable coffee, you're supporting practices that ensure coffee farming remains viable for future generations. Look for certifications like Fair Trade, Rainforest Alliance, and USDA Organic when shopping for coffee.`,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800',
    author: 'Emma Thompson',
    date: '2024-01-05',
    category: 'Sustainability',
    readTime: '6 min',
  },
  {
    id: 'b4',
    title: 'Home Espresso: Tips from a Barista',
    excerpt: 'Professional techniques to elevate your home espresso game.',
    content: `Making café-quality espresso at home is achievable with the right knowledge and practice. Here are professional tips to improve your espresso game.

    Start with fresh beans, ideally roasted within 2-4 weeks. Store them in an airtight container away from light and heat.

    Invest in a good grinder. Consistent grind size is crucial for even extraction. Adjust your grind until you achieve a 25-30 second extraction for a double shot.

    Temperature stability is key. Let your machine fully heat up (15-20 minutes) before pulling shots.

    Practice your milk steaming technique. The ideal temperature is 140-150°F (60-65°C), with microfoam that's glossy and paint-like in texture.

    Clean your equipment regularly. Coffee oils can build up and affect taste.`,
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=800',
    author: 'James Wilson',
    date: '2023-12-28',
    category: 'Brewing Guide',
    readTime: '8 min',
  },
  {
    id: 'b5',
    title: 'Coffee and Health: The Latest Research',
    excerpt: 'Discover the surprising health benefits of your daily coffee ritual.',
    content: `Recent scientific studies continue to reveal the health benefits of moderate coffee consumption. Here's what the latest research tells us.

    Coffee is rich in antioxidants, which help protect cells from damage and may reduce the risk of certain diseases.

    Studies suggest that regular coffee consumption may lower the risk of type 2 diabetes, Parkinson's disease, and certain types of cancer.

    The caffeine in coffee can improve mental alertness, mood, and physical performance when consumed in moderation.

    However, it's important to be mindful of added sugars and high-calorie additions. Black coffee or coffee with a small amount of milk provides the benefits without excess calories.

    As with everything, moderation is key. Most research suggests 3-4 cups per day is safe for most adults.`,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800',
    author: 'Dr. Lisa Park',
    date: '2023-12-20',
    category: 'Health & Wellness',
    readTime: '6 min',
  },
  {
    id: 'b6',
    title: 'Cold Brew vs Iced Coffee: What\'s the Difference?',
    excerpt: 'Understanding these two popular summer coffee drinks.',
    content: `While both are served cold, cold brew and iced coffee are fundamentally different in preparation and taste.

    Cold brew is made by steeping coarse ground coffee in cold water for 12-24 hours. This slow extraction process results in a smooth, less acidic concentrate that's naturally sweeter.

    Iced coffee is simply hot-brewed coffee that's been cooled and served over ice. It retains the acidity and flavor profile of hot coffee.

    Cold brew has about 200mg of caffeine per 16oz serving, while iced coffee has about 165mg. The longer extraction time of cold brew extracts more caffeine.

    Try both and see which you prefer! Cold brew is perfect for those who find regular coffee too acidic, while iced coffee is great when you want that classic coffee flavor, just cold.`,
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=800',
    author: 'Alex Kumar',
    date: '2023-12-15',
    category: 'Coffee Education',
    readTime: '4 min',
  },
];
