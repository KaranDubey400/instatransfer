// DeleteCustomerPage.js
import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const DeleteCustomerPage = () => {
  // State variable to store the customer name to delete
  const [customerName, setCustomerName] = useState('');

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

    // Check if the customer name is provided
    if (!customerName) {
      alert('Please enter a customer name!');
      return;
    }

    // Query the database to find the customer with the given name
    customersRef.orderByChild('name').equalTo(customerName).once('value', (snapshot) => {
      const customerData = snapshot.val();

      // Check if the customer exists in the database
      if (!customerData) {
        alert('Customer not found!');
        return;
      }

      // Get the customer ID from the snapshot
      const customerId = Object.keys(customerData)[0];

      // Delete the customer from the database
      customersRef.child(customerId).remove()
        .then(() => {
          // Reset form after successful deletion
          setCustomerName('');
          alert('Customer deleted successfully!');
        })
        .catch((error) => {
          console.error('Error deleting customer: ', error);
          alert('An error occurred while deleting the customer.');
        });
    });
  };

  return (
    <div>
      <h1>Delete Customer</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="customerName">Customer Name:</label><br />
        <input type="text" id="customerName" name="customerName" value={customerName} onChange={(e) => setCustomerName(e.target.value)} /><br /><br />
        <button type="submit">Delete Customer</button>
      </form>
    </div>
  );
};

export default DeleteCustomerPage;
