interface TransactionComponentProps {
  senderAddress: string;
  amount: number;
  receiverAddress: string;
}

const TransactionComponent = (props: TransactionComponentProps) => {
  return (
    <div className="flex flex-col gap-y-2 justify-between border px-4 py-1 border-gray-600 rounded-lg">
      <div className="flex flex-col ">
        Sent From <p>{props.senderAddress}</p>
      </div>
      <div className="flex flex-col ">
        Sent To <p>{props.receiverAddress}</p>
      </div>
      <div className="flex flex-col  ">
        Amount <p>{props.amount} BTC</p>
      </div>
    </div>
  );
};

export default TransactionComponent;
