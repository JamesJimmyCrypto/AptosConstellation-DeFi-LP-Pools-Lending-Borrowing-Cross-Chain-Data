import React, { useState } from "react";
import { addLiquidity, createPool } from "./services/blockchain";

function App() {
  const [tokenA, setTokenA] = useState("");
  const [tokenB, setTokenB] = useState("");
  const [amountA, setAmountA] = useState("");
  const [amountB, setAmountB] = useState("");

  const handleCreatePool = async () => {
    const response = await createPool(tokenA, tokenB);
    console.log(response);
  };

  const handleAddLiquidity = async () => {
    const response = await addLiquidity(amountA, amountB);
    console.log(response);
  };

  return (
    <div>
      <h1>Aptos Constellation</h1>
      <input
        type="text"
        value={tokenA}
        onChange={(e) => setTokenA(e.target.value)}
        placeholder="Token A"
      />
      <input
        type="text"
        value={tokenB}
        onChange={(e) => setTokenB(e.target.value)}
        placeholder="Token B"
      />
      <button onClick={handleCreatePool}>Create Pool</button>

      <input
        type="text"
        value={amountA}
        onChange={(e) => setAmountA(e.target.value)}
        placeholder="Amount A"
      />
      <input
        type="text"
        value={amountB}
        onChange={(e) => setAmountB(e.target.value)}
        placeholder="Amount B"
      />
      <button onClick={handleAddLiquidity}>Add Liquidity</button>
    </div>
  );
}

export default App;
