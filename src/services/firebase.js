import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBLHfn9xbwVdTRIgVSCKFgP8CMtd9ztS8Y",
  authDomain: "proyecto-home-deco.firebaseapp.com",
  projectId: "proyecto-home-deco",
  storageBucket: "proyecto-home-deco.appspot.com",
  messagingSenderId: "445720334935",
  appId: "1:445720334935:web:7654c3a739dfef2b6d8912"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)