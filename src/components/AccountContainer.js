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


  return (
    <div>
      <Search />
      <AddTransactionForm />
      <TransactionsList transactions={transactions}/>
    </div>
  );
}

export default AccountContainer;
