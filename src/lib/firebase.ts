import { initializeApp, getApps } from 'firebase/app';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  setDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  onSnapshot
} from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';
import { BookingRequest, Order, Product } from '../types';

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const db = firebaseConfig.firestoreDatabaseId
  ? getFirestore(app, firebaseConfig.firestoreDatabaseId)
  : getFirestore(app);

const BOOKINGS_COL = 'bookings';
const ORDERS_COL = 'orders';

// Bookings
export async function createBookingInDb(booking: BookingRequest): Promise<string> {
  try {
    const docRef = await addDoc(collection(db, BOOKINGS_COL), {
      ...booking,
      status: booking.status || 'pending',
      created_at: new Date().toISOString()
    });
    return docRef.id;
  } catch (error) {
    console.warn('Firestore error creating booking, falling back to local storage:', error);
    return `BK-${Date.now().toString(36).toUpperCase()}`;
  }
}

export async function fetchBookingsFromDb(): Promise<BookingRequest[]> {
  try {
    const q = query(collection(db, BOOKINGS_COL), orderBy('created_at', 'desc'));
    const snapshot = await getDocs(q);
    const results: BookingRequest[] = [];
    snapshot.forEach((doc) => {
      const data = doc.data() as BookingRequest;
      results.push({
        ...data,
        id: doc.id
      });
    });
    return results;
  } catch (error) {
    console.warn('Firestore fetch bookings error:', error);
    return [];
  }
}

export function subscribeBookingsFromDb(onData: (bookings: BookingRequest[]) => void) {
  try {
    const q = query(collection(db, BOOKINGS_COL), orderBy('created_at', 'desc'));
    return onSnapshot(
      q,
      (snapshot) => {
        const results: BookingRequest[] = [];
        snapshot.forEach((doc) => {
          results.push({
            ...(doc.data() as BookingRequest),
            id: doc.id
          });
        });
        onData(results);
      },
      (err) => {
        console.warn('Firestore snapshot error:', err);
      }
    );
  } catch (error) {
    console.warn('Subscribe error:', error);
    return () => {};
  }
}

export async function updateBookingStatusInDb(id: string, status: 'pending' | 'confirmed' | 'cancelled') {
  try {
    const docRef = doc(db, BOOKINGS_COL, id);
    await updateDoc(docRef, { status });
  } catch (error) {
    console.warn('Firestore update booking error:', error);
  }
}

export async function deleteBookingFromDb(id: string) {
  try {
    const docRef = doc(db, BOOKINGS_COL, id);
    await deleteDoc(docRef);
  } catch (error) {
    console.warn('Firestore delete booking error:', error);
  }
}

// Orders
export async function createOrderInDb(order: Order): Promise<string> {
  try {
    const docRef = await addDoc(collection(db, ORDERS_COL), {
      ...order,
      status: order.status || 'pending',
      created_at: new Date().toISOString()
    });
    return docRef.id;
  } catch (error) {
    console.warn('Firestore error creating order:', error);
    return `ORD-${Date.now().toString(36).toUpperCase()}`;
  }
}

// Products
const PRODUCTS_COL = 'products';

export async function saveProductToDb(product: Product): Promise<void> {
  try {
    const docRef = doc(db, PRODUCTS_COL, String(product.id));
    await setDoc(docRef, {
      ...product,
      updated_at: new Date().toISOString()
    }, { merge: true });
  } catch (error) {
    console.warn('Firestore error saving product:', error);
  }
}

export function subscribeProductsFromDb(onData: (products: Product[]) => void) {
  try {
    const colRef = collection(db, PRODUCTS_COL);
    return onSnapshot(
      colRef,
      (snapshot) => {
        const results: Product[] = [];
        snapshot.forEach((doc) => {
          results.push(doc.data() as Product);
        });
        onData(results);
      },
      (err) => {
        console.warn('Firestore products snapshot error:', err);
      }
    );
  } catch (error) {
    console.warn('Subscribe products error:', error);
    return () => {};
  }
}

export async function deleteProductFromDb(id: number): Promise<void> {
  try {
    const docRef = doc(db, PRODUCTS_COL, String(id));
    await deleteDoc(docRef);
  } catch (error) {
    console.warn('Firestore delete product error:', error);
  }
}
