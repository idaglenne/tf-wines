// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  get,
  getDatabase,
  limitToLast,
  onValue,
  orderByChild,
  query,
  ref,
  remove,
  set
} from 'firebase/database';
import { Product } from '../models/product.model';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDKmNGfi1cy4g1MKaIUP5YqP9hzs1CE4NI',
  authDomain: 'tf-wines.firebaseapp.com',
  databaseURL: 'https://tf-wines-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'tf-wines',
  storageBucket: 'tf-wines.appspot.com',
  messagingSenderId: '418338342943',
  appId: '1:418338342943:web:4db66d568862149699ed2a',
  measurementId: 'G-3PRF7QNXZ4'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const database = getDatabase(app);

export const getWinesFromApi = () => {
  fetch('https://susbolaget.emrik.org/v1/products')
    .then((wines) => wines.json())
    .then((w) => writeToWines(w));
};

export const writeToWines = async (w: Product[]) => {
  const wines = w
        .filter(
      (p: Product) =>
        p.categoryLevel1 === 'Vin' &&
        (p.assortmentText === 'Tillfälligt sortiment' ||
          p.assortment == 'TSV' ||
          p.assortment == 'TSE')
        )
        .map((w: Product) => ({
          ...w,
          productLaunchDate: new Date(w.productLaunchDate).getTime()
        }));

      console.log(wines[0].productLaunchDate);

      await remove(ref(database, 'wines/ts/'));
      await set(ref(database, 'wines/ts/'), wines);
    },
    {
      onlyOnce: true
    }
  );
};

export const getWines = async (): Promise<Product[]> => {
  return await get(
    query(ref(database, '/wines/ts'), orderByChild('productLaunchDate'), limitToLast(20))
  ).then((snapshot) => {
    const response: Product[] = [];
    snapshot.forEach((child) => {
      response.unshift(child.val());
    });
    return response;
  });
};
