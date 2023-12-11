import './TransactionHistory.css'
const TransactionHistory = ({ transactions }) => {
  const transaction = transactions.map(trans => (
    <tr key={trans.id}>
      <td>{trans.type}</td>
      <td>{trans.amount}</td>
      <td>{trans.currency}</td>
    </tr>
  ));
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>{transaction}</tbody>
    </table>
  );
};

export default TransactionHistory;
