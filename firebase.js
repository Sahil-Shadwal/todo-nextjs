import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD5_oNoRUIyLjHywGoVDpQ_hKDgC3JS6gs",
    authDomain: "next-todo-7a845.firebaseapp.com",
    projectId: "next-todo-7a845",
    storageBucket: "next-todo-7a845.appspot.com",
    messagingSenderId: "987505322638",
    appId: "1:987505322638:web:0ebf58f265a6135a1637df"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)