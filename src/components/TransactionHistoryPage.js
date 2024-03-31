// TransactionHistoryPage.js
import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const TransactionHistoryPage = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Reference to the "transactions" collection in the database
    const transactionsRef = firebase.database().ref('transactions');

    // Fetch transaction history from Firebase
    transactionsRef.on('value', (snapshot) => {
      const transactionData = snapshot.val();
      if (transactionData) {
        const transactionList = Object.values(transactionData);
        setTransactions(transactionList);
      }
    });

    // Cleanup function to detach event listener
    return () => {
      transactionsRef.off(); // Detach the event listener when component unmounts
    };
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <div>
      <h1>Transaction History</h1>
      <table>
        <thead>
          <tr>
            <th>Sender</th>
            <th>Receiver</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.sender}</td>
              <td>{transaction.receiver}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistoryPage;
