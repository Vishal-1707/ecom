export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
  rating: number;
  brand?: string;
}

export const products: Product[] = [
  {
    id: "1",
    title: "Running Shoes",
    price: 99,
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Clothing",
    description: "High-performance running shoes with advanced cushioning technology for ultimate comfort during your workouts.",
    rating: 4.5,
    brand: "Nike"
  },
  {
    id: "2", 
    title: "Wireless Headphones",
    price: 149,
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Electronics",
    description: "Premium wireless headphones with noise cancellation and 30-hour battery life.",
    rating: 4.8,
    brand: "Sony"
  },
  {
    id: "3",
    title: "Backpack", 
    price: 129,
    image: "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Clothing",
    description: "Durable and spacious backpack perfect for travel, work, or outdoor adventures.",
    rating: 4.3,
    brand: "North Face"
  },
  {
    id: "4",
    title: "Smartwatch",
    price: 249,
    image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Electronics", 
    description: "Advanced smartwatch with health monitoring, GPS, and smartphone connectivity.",
    rating: 4.6,
    brand: "Apple"
  },
  {
    id: "5",
    title: "Sunglasses",
    price: 149,
    image: "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Clothing",
    description: "Stylish sunglasses with UV protection and polarized lenses for clear vision.",
    rating: 4.2,
    brand: "Ray-Ban"
  },
  {
    id: "6",
    title: "Digital Camera",
    price: 499,
    image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Electronics",
    description: "Professional digital camera with high-resolution sensor and advanced autofocus.",
    rating: 4.7,
    brand: "Canon"
  },
  {
    id: "7",
    title: "T-shirt",
    price: 29,
    image: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Clothing",
    description: "Comfortable cotton t-shirt with modern fit and breathable fabric.",
    rating: 4.1,
    brand: "Uniqlo"
  },
  {
    id: "8",
    title: "Smartphone",
    price: 699,
    image: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Electronics",
    description: "Latest smartphone with advanced camera system, fast processor, and all-day battery life.",
    rating: 4.4,
    brand: "Samsung"
  },
  {
    id: "9",
    title: "Laptop",
    price: 899,
    image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400",
    category: "Electronics",
    description: "High-performance laptop perfect for work, gaming, and creative projects.",
    rating: 4.5,
    brand: "Dell"
  },
  {
    id: "10",
    title: "Coffee Maker",
    price: 79,
    image: "https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Home",
    description: "Automatic coffee maker with programmable timer and thermal carafe.",
    rating: 4.0,
    brand: "Keurig"
  }
];

export const categories = [
  "All",
  "Electronics", 
  "Clothing",
  "Home"
];

export const brands = [
  "Nike",
  "Sony", 
  "Apple",
  "Samsung",
  "Canon",
  "Dell"
];