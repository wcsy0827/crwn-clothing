import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc

} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCm6Yv4oKqXbWNnvkiByvcQpAYVl64V1rk",
    authDomain: "crwn-clothing-dvb.firebaseapp.com",
    projectId: "crwn-clothing-dvb",
    storageBucket: "crwn-clothing-dvb.appspot.com",
    messagingSenderId: "344180254090",
    appId: "1:344180254090:web:563eb2aad68fa2367f9473"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    promt: "select_account"

})
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();


export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)
    //即使沒有user資料，firebase依然會先預產該user的uid
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createAt,
            });
        }
        catch (error) {
            console.log('error creating teh user', error.log);
        }
    }
    return userDocRef;
}