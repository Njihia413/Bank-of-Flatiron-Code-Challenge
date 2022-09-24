import React from "react";
import Transaction from "./Transaction";


//Search functionality
function TransactionsList({ transactions, onDeleteTransaction, search}) {

  let transactionList = "Loading transactions..."

  if(transactions){
    const filteredTransactions = transactions.filter(transaction => {
      return (
        transaction.description.toLowerCase().includes(search.toLowerCase())) ||
        transaction.category.toLowerCase().includes(search.toLowerCase())
    })

    transactionList = filteredTransactions.map(transaction => {
      return <Transaction key={transaction.id} transaction={transaction} onDeleteTransaction={onDeleteTransaction}/>
    })
  }

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Action</h3>
          </th>
        </tr>
        {/* render a list of <Transaction> components here */}
          {transactionList}
      </tbody>
    </table>
  );
}

export default TransactionsList;
