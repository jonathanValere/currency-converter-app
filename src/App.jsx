import { useState } from "react";
import rates from "./rates";
import "./App.css";

function App() {
  const [eurCurrency, setEurCurrency] = useState("");
  const [usdCurrency, setUsdCurrency] = useState("");

  const handleEurCurrency = (event) => {
    const valueEur = event.target.value;
    if (!isNaN(valueEur)) {
      const valueNumber = Number(valueEur);
      setUsdCurrency(valueEur * rates.USD);
      return setEurCurrency(valueNumber);
    }
  };

  return (
    <>
      <h1>💶 Converter 💵</h1>
      <main>
        <div>
          <input
            type="text"
            placeholder="0"
            onChange={handleEurCurrency}
            value={eurCurrency}
          />
          <span>€</span>
        </div>
        <span>⬇️</span>
        <div>
          <input type="text" placeholder="0" value={usdCurrency} readOnly />
          <span>$</span>
        </div>
      </main>
    </>
  );
}

export default App;
