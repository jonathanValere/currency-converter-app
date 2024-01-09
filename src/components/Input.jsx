export default function Input({ currencyValue, onChange, currency }) {
  return (
    <div>
      {currency === "$" ? (
        <input type="text" placeholder="0" value={currencyValue} readOnly />
      ) : (
        <input
          type="text"
          placeholder="0"
          onChange={onChange}
          value={currencyValue}
        />
      )}
      <span className="devise">{currency}</span>
    </div>
  );
}
