import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import firebase from 'firebase/compat/app'; // Import Firebase
import 'firebase/compat/database';
import HomePage from './components/homepage';
import AboutUs from './components/aboutus';
import ViewCustomer from './components/ViewCustomers';
import Contactus from './components/contactus';
import NewUser from './components/newuser';
import DeleteUser from './components/deleteuser';
import TransferBalancePage from './components/transfer';
import TransactionHistoryPage from './components/TransactionHistoryPage';


const firebaseConfig = {
  apiKey: "AIzaSyC89H7sf9oE6pkXKv5EWxF-zR2d-W-OSKg",
  authDomain: "basic-banking-system-f38af.firebaseapp.com",
  databaseURL: "https://basic-banking-system-f38af-default-rtdb.firebaseio.com",
  projectId: "basic-banking-system-f38af",
  storageBucket: "basic-banking-system-f38af.appspot.com",
  messagingSenderId: "916292491583",
  appId: "1:916292491583:web:59fa1ac024a6c0bac95b8a",
  measurementId: "G-98MEXP183M"
};
firebase.initializeApp(firebaseConfig);
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/customer-list" element={<ViewCustomer />} />
          <Route path="/contact-us" element={<Contactus />} />
          <Route path="/create-new-user" element={<NewUser />} />
          <Route path="/delete-user" element={<DeleteUser />} />
          <Route path="/transfer" element={<TransferBalancePage />} />
          <Route path="/transaction-history" element={<TransactionHistoryPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
