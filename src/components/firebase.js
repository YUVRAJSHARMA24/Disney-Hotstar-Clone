const firebaseConfig = {
    apiKey: "AIzaSyC26BMTFFg9OvY7zybSfXj2p5Uu3OmlJ6w",
    authDomain: "disney-clone-b85b5.firebaseapp.com",
    projectId: "disney-clone-b85b5",
    storageBucket: "disney-clone-b85b5.appspot.com",
    messagingSenderId: "143913396817",
    appId: "1:143913396817:web:fc581df5d0aeb8b956a670",
    measurementId: "G-TQLEYT0YDQ"
};

const firebaseApp = firebase.initializeAPP(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage()

export { auth, provider, storage };
export default db;