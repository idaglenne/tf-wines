// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
  child, get,
  getDatabase, onValue, ref, remove, set
} from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDKmNGfi1cy4g1MKaIUP5YqP9hzs1CE4NI',
  authDomain: 'tf-wines.firebaseapp.com',
  databaseURL:
    'https://tf-wines-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'tf-wines',
  storageBucket: 'tf-wines.appspot.com',
  messagingSenderId: '418338342943',
  appId: '1:418338342943:web:4db66d568862149699ed2a',
  measurementId: 'G-3PRF7QNXZ4'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app);

const database = getDatabase(app)
const dbRef = ref(database, '/')

export const writeToWines = (): void => {
  onValue(child(dbRef, '/products'),
    async snapshot => {
      const wines = snapshot.val().filter((p: any) => p.categoryLevel1 === 'Vin' && p.assortmentText === 'Tillfälligt sortiment')

      await remove(ref(database, 'wines/'))
      await set(ref(database, 'wines/ts/'), wines)

      console.log('product name', wines)
    },
    {
      onlyOnce: true
    })
}

export const getWines = async (): Promise<any> => {
  return await get(child(dbRef, '/wines/ts')).then(snapshot => snapshot.val())
}
