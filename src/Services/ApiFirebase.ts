import { initializeApp} from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

import { getAuth, signInWithPopup } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";

import { firebaseConfig } from './ConfigFirebase';

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth();

export default {
    GooglePopup: async () => {
        const provider = new GoogleAuthProvider();
        let result = await signInWithPopup(auth , provider);
        return result;
    }
}