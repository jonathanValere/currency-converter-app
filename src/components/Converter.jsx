import Input from "./Input";
import { useState } from "react";

export default function Converter({ ...props }) {
  const [currencyOne, setCurrencyOne] = useState("EUR"); // Choix de la devise
  const [currencyTwo, setCurrencyTwo] = useState("USD"); // Choix de la devise
  const [value1, setValue1] = useState(props.rates.EUR);
  const [value2, setValue2] = useState(props.rates.USD);

  const currencyChoice = (event) => {
    const value = event.target.value;
    if (event.target.name === "value1") {
      setCurrencyOne(value);
      setValue1(props.rates[value]);
    } else {
      setCurrencyTwo(value);
      setValue2(props.rates[value]);
    }
  };

  const handleChangeValue = (event) => {
    //  A FAIRE
    return;
  };

  return (
    <>
      <div className="convertInput">
        <Input currencyValue={value1} onChange={handleChangeValue} />

        <select value={currencyOne} onChange={currencyChoice} name="value1">
          {Object.keys(props.rates).map((key) => {
            return (
              <option key={key} value={key}>
                {key}
              </option>
            );
          })}
        </select>
      </div>
      <span className="icon">⬇️ ⬆️</span>
      <div className="convertInput">
        <Input currencyValue={value2} onChange={handleChangeValue} />
        <select value={currencyTwo} onChange={currencyChoice} name="value2">
          {Object.keys(props.rates).map((key) => {
            return (
              <option key={key} value={key}>
                {key}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
}
