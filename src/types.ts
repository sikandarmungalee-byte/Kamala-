export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  unit: string;
  description: string;
  image?: string;
}

export interface CartItem {
  id: number;
  product_id: number;
  product_name: string;
  price: number;
  unit: string;
  qty: number;
}

export interface ServiceItem {
  title: string;
  description: string;
  long_description: string;
  image: string;
  benefits: string[];
}

export interface BookingRequest {
  id?: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  preferred_date: string;
  preferred_time: string;
  message?: string;
  status?: 'pending' | 'confirmed' | 'cancelled';
  created_at?: string;
}

export interface Order {
  id?: string;
  order_number: string;
  customer_name: string;
  email: string;
  phone: string;
  shipping_address: string;
  city: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'confirmed' | 'dispatched' | 'completed';
  created_at?: string;
}

export interface Testimonial {
  name: string;
  service: string;
  text: string;
  rating: number;
}
