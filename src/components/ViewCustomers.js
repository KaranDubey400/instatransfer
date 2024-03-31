// ViewCustomers.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import '../styles/style.css'; // Assuming your stylesheet defines margins/padding
import mazeWebpImage from '../images/mazze.webp';

const ViewCustomers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    // Reference to the "customers" collection in the database
    const customersRef = firebase.database().ref('customers');

    // Fetch customer data from Firebase
    customersRef.on('value', (snapshot) => {
      const customerData = snapshot.val();
      if (customerData) {
        const customerList = Object.values(customerData);
        setCustomers(customerList);
      }
    });

    // Cleanup function to detach event listener
    return () => {
      customersRef.off(); // Detach the event listener when component unmounts
    };
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <section id="title">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <Link className="navbar-brand" to="/">
            <h6 className="navbar-heading">Maze Bank</h6>
            <img className="m-img" src={mazeWebpImage} alt="Maze Bank Logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/customer-list">View Customers</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about-us">About Bank</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="my-info text-center">
        <Link to="/create-new-user">
          <button className="btn btn-outline-light" data-toggle="modal" data-target="#createUserModal">Create a User</button>
        </Link>
        <span className="button-spacer">  </span>
        <Link to="/delete-user">
          <button className="btn btn-outline-light">Delete User</button>
        </Link>
        <span className="button-spacer">  </span>
        <Link to="/transfer">
          <button className="btn btn-outline-light">Transfer</button>
        </Link>
        <span className="button-spacer">  </span>
        <Link to="/transaction-history">
          <button className="btn btn-outline-light">Transaction History</button>
        </Link>
      </div>

      <div className="customer-table" style={{ marginTop: '50px' }}>
        <h2>list</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr key={index}>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ViewCustomers;
