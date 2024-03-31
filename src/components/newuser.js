import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const AddCustomerForm = () => {
  // State variables to store form data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [balance, setBalance] = useState('');

  // Initialize Firebase and attach event listener
  useEffect(() => {
    // Firebase configuration
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
    // Initialize Firebase if not already initialized
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    // Cleanup function to detach event listener
    return () => {
      // Detach any Firebase listeners here if needed
    };
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from submitting normally

    // Reference to the "customers" collection in the database
    const customersRef = firebase.database().ref('customers');

    // Add new customer to the database
    const newCustomerRef = customersRef.push();
    newCustomerRef.set({
      balance: balance,
      email: email,
      name: name
    }).then(() => {
      // Reset form after successful addition
      setName('');
      setEmail('');
      setBalance('');
      alert('Customer added successfully!');
    }).catch((error) => {
      console.error('Error adding customer: ', error);
      alert('An error occurred while adding the customer.');
    });
  };

  return (
    <div>
      <h2>Add New Customer</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label><br />
        <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} /><br />
        <label htmlFor="email">Email:</label><br />
        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
        <label htmlFor="balance">Balance:</label><br />
        <input type="number" id="balance" name="balance" value={balance} onChange={(e) => setBalance(e.target.value)} /><br /><br />
        <button type="submit">Add Customer</button>
      </form>
    </div>
  );
};

export default AddCustomerForm;
