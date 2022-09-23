import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {

  const transactionsUrl = "http://localhost:8001/transactions"
  const [transactions, setTransactions]  = useState([]);

//Fetch Transactions
  useEffect(() => {
    fetch(`${transactionsUrl}`)
    .then(response => response.json())
    .then(data => setTransactions(data));
  }, [])


//Create a new transaction
function addNewTransaction (newTransaction) {
  const updatedTransactions = [...transactions, newTransaction]
  setTransactions(updatedTransactions);
}  

//Delete a transaction
function deleteTransaction(id) {
  const updatedTransactions = transactions.filter(transaction => transaction.id !== id);
  setTransactions(updatedTransactions);
}
  return (
    <div>
      <Search />
      <AddTransactionForm onAddTransaction={addNewTransaction} />
      <TransactionsList transactions={transactions} onDeleteTransaction={deleteTransaction}/>
    </div>
  );
}

export default AccountContainer;
