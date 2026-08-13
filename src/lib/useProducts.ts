import { useState, useEffect } from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';
import { subscribeProductsFromDb, saveProductToDb } from './firebase';

const LOCAL_STORAGE_KEY = 'ka_custom_products';

export function useProductsList() {
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as Record<number, Partial<Product>>;
        // Apply local overrides to default static list
        const staticList = PRODUCTS.map(p => ({
          ...p,
          ...(parsed[p.id] || {})
        }));
        
        // Also include any newly added custom products
        const customItems = Object.values(parsed).filter(
          p => p.id && !PRODUCTS.some(sp => sp.id === p.id)
        ) as Product[];

        return [...customItems, ...staticList];
      } catch (e) {
        console.error('Failed to parse local storage products', e);
      }
    }
    return PRODUCTS;
  });

  useEffect(() => {
    const unsubscribe = subscribeProductsFromDb((dbProducts) => {
      if (dbProducts && dbProducts.length > 0) {
        const dbMap = new Map<number, Product>();
        dbProducts.forEach(p => dbMap.set(p.id, p));

        // Merge with static defaults
        const merged = PRODUCTS.map(p => dbMap.get(p.id) || p);

        // Include newly added DB products not in static list
        dbProducts.forEach(p => {
          if (!PRODUCTS.some(sp => sp.id === p.id) && !merged.some(m => m.id === p.id)) {
            merged.unshift(p);
          }
        });

        setProducts(merged);

        // Update localStorage cache
        const overrides: Record<number, Product> = {};
        dbProducts.forEach(p => {
          overrides[p.id] = p;
        });
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(overrides));
      }
    });

    return () => unsubscribe();
  }, []);

  const updateProduct = async (id: number, updates: Partial<Product>) => {
    let updatedProduct: Product | undefined;

    setProducts(prev =>
      prev.map(p => {
        if (p.id === id) {
          updatedProduct = { ...p, ...updates };
          return updatedProduct;
        }
        return p;
      })
    );

    if (updatedProduct) {
      await saveProductToDb(updatedProduct);

      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      let map: Record<number, Partial<Product>> = {};
      if (saved) {
        try { map = JSON.parse(saved); } catch (e) {}
      }
      map[id] = { ...(map[id] || {}), ...updates };
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(map));
    }
  };

  const addProduct = async (newProd: Omit<Product, 'id'> & { id?: number }) => {
    const id = newProd.id || Math.floor(100000 + Math.random() * 900000);
    const fullProduct: Product = { ...newProd, id };

    setProducts(prev => [fullProduct, ...prev]);

    await saveProductToDb(fullProduct);

    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    let map: Record<number, Partial<Product>> = {};
    if (saved) {
      try { map = JSON.parse(saved); } catch (e) {}
    }
    map[id] = fullProduct;
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(map));
    return fullProduct;
  };

  return { products, updateProduct, addProduct };
}
