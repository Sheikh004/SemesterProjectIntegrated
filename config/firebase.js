import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

// add firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAYzI0E9QUh1jdCnQEWWfyjMWk-O95rRII",
  authDomain: "fir-demo-71fab.firebaseapp.com",
  projectId: "fir-demo-71fab",
  storageBucket: "fir-demo-71fab.appspot.com",
  messagingSenderId: "839344369981",
  appId: "1:839344369981:web:e2f6472e23a80f9fe6d554"
};

// initialize firebase
const app = initializeApp(firebaseConfig);

// initialize auth
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };
