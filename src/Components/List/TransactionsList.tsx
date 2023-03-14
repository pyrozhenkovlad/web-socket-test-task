import TransactionComponent from "./TransactionComponent";

interface TransactionsListProps {
  transactions: any[];
  total: number;
}

const TransactionsList = (props: TransactionsListProps) => {
  return (
    <div className="flex flex-col gap-y-8">
      <div className="grid place-content-center text-4xl">
        Total : {props.total} BTC
      </div>
      <div className="max-h-[550px] h-[550px] overflow-auto">
        <div className="flex-col flex gap-y-4">
          {props.transactions.map((transaction, i) => (
            <TransactionComponent
              key={i}
              senderAddress={transaction.senderAddress}
              amount={transaction.amount}
              receiverAddress={transaction.receiverAddress}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransactionsList;
