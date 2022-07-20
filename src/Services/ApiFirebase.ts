import { initializeApp } from 'firebase/app';

import { doc, setDoc , getFirestore, getDoc, collection, getDocs } from "firebase/firestore";
import { getAuth, signInWithPopup } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";

import { firebaseConfig } from './ConfigFirebase';
import { User } from '../types';
import { dialogClasses } from '@mui/material';

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const colRef = collection(db, "users");
const auth = getAuth();



export default {
    GooglePopup: async () => {
        try{
            const provider = new GoogleAuthProvider();
            let result = await signInWithPopup(auth , provider);
            return result;
        }catch(err){
            console.error('Error writing new user to Firebase Database', err);
        }
    },
    addUser: async(u:User) =>{
        try {
            await setDoc(doc(colRef, u.id),{
              name: u.name,
              avatar:u.avatar
            },{merge:true}); 
        }
          catch(err) {
            console.error('Error writing new user to Firebase Database', err);
          }
    },
    getContactList: async(UserId:string) => {
        try{
            let list:User[] = [];
            let results = await getDocs(colRef);
            const data = results.docs.map(doc => {
                const response = doc.data();
                if(doc.id !== UserId){
                    list.push({
                        id:doc.id,
                        name:response.name,
                        avatar:response.avatar,
                    })
                }
            });
            return list;
        }catch(err){
            console.error('Error writing users to Firebase Database', err);
        }
    }
}

function item(item: any, arg1: (any: any) => void) {
    throw new Error('Function not implemented.');
}
