import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDeoUBiXrBIT3lYvbkOnwHUMI0AiWT6ny8",
        authDomain: "ecommerce-test-d3ba8.firebaseapp.com",
    projectId: "ecommerce-test-d3ba8",
    storageBucket: "ecommerce-test-d3ba8.appspot.com",
    messagingSenderId: "68886513636",
    appId: "1:68886513636:web:d3b65df9e71dc8b54a29f1",
    measurementId: "G-JBEK09113X"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const storage = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = storage.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdDate = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdDate,
                ...additionalData
            });
        } catch (e) {
            console.log('Error created user: ', e.message);
        }
    }

    return userRef;
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;