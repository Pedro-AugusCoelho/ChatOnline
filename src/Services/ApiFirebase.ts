import { initializeApp } from 'firebase/app';
import { getFirestore , setDoc, doc, getDoc, DocumentSnapshot, DocumentData } from 'firebase/firestore/lite';

import { getAuth, signInWithPopup } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";

import { firebaseConfig } from './ConfigFirebase';
import { ProfileChat, User } from '../types';

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
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
            await setDoc(doc(db, "users", u.id),{
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
            let list = [];
            let results:DocumentData | undefined = await (await getDoc(doc(db, "users"))).data();
            if(results){
                let response = results ? results.filter((item:User) => item.id !== UserId) : results;
                list.push(response);
                return list;
            }
        }catch(err){
            console.error('Error writing users to Firebase Database', err);
        }
    }
}