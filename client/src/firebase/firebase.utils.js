import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCCArM2f2RljKCpiuKu7YXvBomVHiidgAw",
    authDomain: "people-s-clothing-test.firebaseapp.com",
    projectId: "people-s-clothing-test",
    storageBucket: "people-s-clothing-test.appspot.com",
    messagingSenderId: "738795915572",
    appId: "1:738795915572:web:c4c4240c8a4c1ab4de3d61"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

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

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
}

export const convertShopItemsSnapshotToMap = (shopItems) => {
    const transformedCollection = shopItems.docs.map(shopCategory => {
        const { title, items } = shopCategory.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: shopCategory.id,
            title,
            items
        }
    });

    return transformedCollection.reduce((accumulator, shopCategory) => {
        accumulator[shopCategory.title.toLowerCase()] = shopCategory;
        return accumulator;
    }, {});
}

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth)
        }, reject)
    });
}

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
// export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;