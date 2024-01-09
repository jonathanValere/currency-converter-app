import { useState } from "react";
import rates from "./rates";
import "./App.css";
import EurToUsd from "./components/EurToUsd";
import ButtonBonus from "./components/ButtonBonus";
import Converter from "./components/Converter";
// Import FOntAwesome ----
import { library } from "@fortawesome/fontawesome-svg-core";
import { faRotate } from "@fortawesome/free-solid-svg-icons";
library.add(faRotate);

function App() {
  const [eurCurrency, setEurCurrency] = useState(rates.EUR);
  const [usdCurrency, setUsdCurrency] = useState(rates.USD);

  const [bonus, setBonus] = useState(false);

  const handleEurCurrency = (event) => {
    const valueEur = event.target.value;
    if (!isNaN(valueEur)) {
      const valueNumber = Number(valueEur);
      setUsdCurrency(valueEur * rates.USD);
      return setEurCurrency(valueNumber);
    }
  };

  const toggleBonus = () => {
    return setBonus(!bonus);
  };

  return (
    <>
      <header className="container">
        {bonus ? "Converter" : "💶 Eur to Usd 💵"}
      </header>
      <main className="container">
        <ButtonBonus onClick={toggleBonus} value={bonus} />
        {bonus ? (
          <>
            <Converter rates={rates} />
          </>
        ) : (
          <>
            <EurToUsd
              currencyValueEur={eurCurrency}
              currencyValueUsd={usdCurrency}
              onChange={handleEurCurrency}
            />
          </>
        )}
      </main>
    </>
  );
}

export default App;
