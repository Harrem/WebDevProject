import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Replace with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPkIK9RMT9qUdlaIDQhX3utMVzc3N6nAM",
  authDomain: "test-5af71.firebaseapp.com",
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://test-5af71-default-rtdb.firebaseio.com/",
  projectId: "test-5af71",
  storageBucket: "PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID",
  // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
  measurementId: "G-MEASUREMENT_ID",
};

const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);
