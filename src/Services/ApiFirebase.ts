import { initializeApp } from 'firebase/app';

import { doc, setDoc , getFirestore, getDoc, collection, getDocs } from "firebase/firestore";
import { getAuth, signInWithPopup } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";

import { firebaseConfig } from './ConfigFirebase';
import { User } from '../types';
import { dialogClasses } from '@mui/material';

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const colRefUsers = collection(db, "users");
const colRefFriend = collection(db , 'friend');
const auth = getAuth();



export default {
    GooglePopup: async () => {
        try{
            let data = {}
            const provider = new GoogleAuthProvider();
            let result = await signInWithPopup(auth , provider);
            if(result){
                let data = {
                    id:result.user.uid,
                    name:result.user.displayName ? result.user.displayName  : 'Minion' ,
                    avatar:result.user.photoURL ? result.user.photoURL : 'https://lh3.googleusercontent.com/a-/AFdZucr8PnqOaNb_sAS-JgTxtfqJ9SOFC5iZVIFumczB1sA=s96-c',
                }
                return data;
            }
        }catch(err){
            console.error('Error writing new user to Firebase Database', err);
        }
    },
    addUser: async(u:User) =>{
        try {
            await setDoc(doc(colRefUsers, u.id),{
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
            let results = await getDocs(colRefUsers);
            results.docs.map(doc => {
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
    },
    getFriendList: async() =>{
        try {
            let list:User[] = [];
            let results = await getDocs(colRefFriend);
            results.docs.map(doc => {
            const response = doc.data();
                list.push({
                    id:doc.id,
                    name:response.name,
                    avatar:response.avatar,
                });
            });
            return list;
        
        }catch(error){
            
        }
    }
}

function item(item: any, arg1: (any: any) => void) {
    throw new Error('Function not implemented.');
}
