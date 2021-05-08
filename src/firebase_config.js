import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyChwlbC4nFTM5Fk-u_FQbbFgRsXCTjVaS0",
  authDomain: "chat-app-hokagocreate.firebaseapp.com",
  projectId: "chat-app-hokagocreate",
  storageBucket: "chat-app-hokagocreate.appspot.com",
  messagingSenderId: "1086129423298",
  appId: "1:1086129423298:web:c44fd0c96c208e32bc8c5b"
};

firebase.initializeApp(firebaseConfig)
export default firebase