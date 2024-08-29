// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {initializeAuth, getReactNativePersistence} from 'firebase/auth';
import {getStorage} from 'firebase/storage';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCbdR8ASbry6ZtzgQ8C5UB20caRGf6gklA',
  authDomain: 'psicoaxioma.firebaseapp.com',
  projectId: 'psicoaxioma',
  storageBucket: 'psicoaxioma.appspot.com',
  messagingSenderId: '857562269853',
  appId: '1:857562269853:web:3408d1359cf25a992dec74',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

// Initialize Firebase Storage
export const storage = getStorage(app);
