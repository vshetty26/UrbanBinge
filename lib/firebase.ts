import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyDYVCLIRts_LRu5ls1jb7afJOJ3HF_RMSs",
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "urban-binge-oms.firebaseapp.com",
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "urban-binge-oms",
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "urban-binge-oms.firebasestorage.app",
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "67075323430",
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:67075323430:web:508d57534dbeda7da3d8e7",
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-KJERRFJZ1Z",
};

// Initialize Firebase (prevent re-initialization in dev hot reload)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

export { app, db };
