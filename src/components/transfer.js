// TransferBalancePage.js
import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const TransferBalancePage = () => {
  // State variables to store form data
  const [sender, setSender] = useState('');
  const [receiver, setReceiver] = useState('');
  const [amount, setAmount] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from submitting normally

    // Reference to the "customers" collection in the database
    const customersRef = firebase.database().ref('customers');

    // Fetch sender and receiver data from Firebase
    customersRef.once('value').then((snapshot) => {
      const senderData = snapshot.val()[sender];
      const receiverData = snapshot.val()[receiver];

      // Check if sender and receiver exist
      if (!senderData || !receiverData) {
        setErrorMessage('Sender or receiver not found!');
        return;
      }

      // Convert amount to a number
      const transferAmount = parseFloat(amount);

      // Check if amount is valid
      if (isNaN(transferAmount) || transferAmount <= 0) {
        setErrorMessage('Invalid transfer amount!');
        return;
      }

      // Check if sender has sufficient balance
      if (senderData.balance < transferAmount) {
        setErrorMessage('Insufficient balance!');
        return;
      }

      // Update balances in Firebase
      customersRef.child(sender).update({
        balance: senderData.balance - transferAmount
      });
      customersRef.child(receiver).update({
        balance: receiverData.balance + transferAmount
      }).then(() => {
        // Store transaction details in the "transactions" collection
        const transactionsRef = firebase.database().ref('transactions');
        transactionsRef.push({
          sender: sender,
          receiver: receiver,
          amount: transferAmount
        }).then(() => {
          // Reset form and error message after successful transfer
          setSender('');
          setReceiver('');
          setAmount('');
          setErrorMessage('');
          alert('Balance transferred successfully!');
        }).catch((error) => {
          console.error('Error storing transaction: ', error);
          setErrorMessage('An error occurred while storing the transaction.');
        });
      }).catch((error) => {
        console.error('Error transferring balance: ', error);
        setErrorMessage('An error occurred while transferring balance.');
      });
    });
  };

  return (
    <div>
      <h1>Transfer Balance</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="sender">Sender:</label><br />
          <input type="text" id="sender" name="sender" value={sender} onChange={(e) => setSender(e.target.value)} required /><br />
        </div>
        <div>
          <label htmlFor="receiver">Receiver:</label><br />
          <input type="text" id="receiver" name="receiver" value={receiver} onChange={(e) => setReceiver(e.target.value)} required /><br />
        </div>
        <div>
          <label htmlFor="amount">Amount:</label><br />
          <input type="number" id="amount" name="amount" value={amount} onChange={(e) => setAmount(e.target.value)} required /><br />
        </div>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <button type="submit">Transfer</button>
      </form>
    </div>
  );
};

export default TransferBalancePage;
