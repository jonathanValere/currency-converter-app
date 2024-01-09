import Input from "./Input";

export default function EurToUsd({ ...props }) {
  return (
    <>
      <Input
        currencyValue={props.currencyValueEur}
        onChange={props.onChange}
        currency="€"
      />
      <span className="icon">⬇️</span>
      <Input currencyValue={props.currencyValueUsd} currency="$" />
    </>
  );
}
