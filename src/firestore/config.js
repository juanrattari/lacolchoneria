import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAwfzjXQMe9y0tLKfhNVEKjvwj-Wk__60E",
  authDomain: "la-colchoneria.firebaseapp.com",
  projectId: "la-colchoneria",
  storageBucket: "la-colchoneria.appspot.com",
  messagingSenderId: "656020953281",
  appId: "1:656020953281:web:208af28e13d82364959c40"
};

const app = initializeApp(firebaseConfig);

export const initFirestoreApp = () => {
    return app
}