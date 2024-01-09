import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ButtonBonus({ value, onClick }) {
  return (
    <button onClick={onClick}>
      <FontAwesomeIcon icon="rotate" />{" "}
      {value ? "Masquer bonus" : "Afficher bonus"}
    </button>
  );
}
