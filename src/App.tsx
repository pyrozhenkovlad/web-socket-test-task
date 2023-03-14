import React, { useEffect } from "react";
import Buttons from "./Components/Controls/Buttons";
import TransactionsList from "./Components/List/TransactionsList";

function App() {
  const [transactions, setTransactions] = React.useState<any[]>([]);
  const [webSocket, setWebSocket] = React.useState<WebSocket | null>(null);
  const [total, setTotal] = React.useState<number>(0);

  useEffect(() => {
    const socket = new WebSocket("wss://ws.blockchain.info/inv");
    socket.onopen = () => {
      setWebSocket(socket);
    };
    return () => {
      if (webSocket) {
        webSocket.close();
      }
    };
  }, []);

  const start = () => {
    if (webSocket) {
      webSocket.send(
        JSON.stringify({
          op: "unconfirmed_sub",
        })
      );
      webSocket.onmessage = (event) => {
        const transaction = {
          amount: JSON.parse(event.data).x.out[0].value / 100000000,
          senderAddress: JSON.parse(event.data).x.inputs[0].prev_out.addr,
          receiverAddress: JSON.parse(event.data).x.out[0].addr,
        };

        setTotal((prev) => prev + transaction.amount);
        setTransactions((prev) => [...prev, transaction]);
      };
    }
  };

  const stop = () => {
    if (webSocket) {
      webSocket.send(
        JSON.stringify({
          op: "unconfirmed_unsub",
        })
      );
    }
  };

  const clear = () => {
    setTransactions([]);
    setTotal(0);
  };

  return (
    <div className="grid place-content-center h-screen mx-[10%]">
      <div className="w-[800px] flex flex-col gap-y-4">
        <Buttons start={start} stop={stop} clear={clear} />
        <TransactionsList transactions={transactions.reverse()} total={total} />
      </div>
    </div>
  );
}

export default App;
