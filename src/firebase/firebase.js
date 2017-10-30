import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// // child_removed
// database.ref('expenses').on('child_removed', snapshot => {
//   console.log('------------------------------------');
//   console.log(snapshot.key, snapshot.val());
//   console.log('------------------------------------');
// });

// // child_changed
// database.ref('expenses').on('child_changed', snapshot => {
//   console.log('------------------------------------');
//   console.log(snapshot.key, snapshot.val());
//   console.log('------------------------------------');
// });

// // child_added
// database.ref('expenses').on('child_added', snapshot => {
//   console.log('------------------------------------');
//   console.log(snapshot.key, snapshot.val());
//   console.log('------------------------------------');
// });

// database.ref('expenses').on('value', snapshot => {
//   const expenses = [];
//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });

//   console.log('------------------------------------');
//   console.log(expenses);
//   console.log('------------------------------------');
// });
