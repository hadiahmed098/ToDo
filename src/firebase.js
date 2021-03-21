import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyCLZnubhrut_4tDniRZvC67xCbHTOrxpGU",
    authDomain: "ss-s2021-vuejs.firebaseapp.com",
    databaseURL: "https://ss-s2021-vuejs-default-rtdb.firebaseio.com",
    projectId: "ss-s2021-vuejs",
    storageBucket: "ss-s2021-vuejs.appspot.com",
    messagingSenderId: "134208489519",
    appId: "1:134208489519:web:54d0c64132045e54ffdeda"
};

firebase.initializeApp(firebaseConfig);

// Load required librares
const db = firebase.database();
const auth = firebase.auth();

export {
    db,
    auth,
}
