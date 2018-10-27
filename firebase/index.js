import firebase from 'firebase'
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyBaOuG23g_bN8eLK48VFobPgnq8i6OGk-s",
  authDomain: "desarrollochallenge9ledesma.firebaseapp.com",
  databaseURL: "https://desarrollochallenge9ledesma.firebaseio.com",
  projectId: "desarrollochallenge9ledesma",
  storageBucket: "desarrollochallenge9ledesma.appspot.com",
  messagingSenderId: "803587637890"
}

firebase.initializeApp(config)

// Initialize Cloud Firestore through Firebase
export const db = firebase.firestore()
export const auth = firebase.auth()

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true,
})

export const getCurrentUser = () => {
  if (auth.currentUser) {
    return Promise.resolve(auth.currentUser)
  }

  return auth
    .signInAnonymously()
    .then(() => auth.currentUser)
    .catch(error => console.error(error))
}

export default firebase
