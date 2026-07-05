import "./Filters.css";
import { FaSearch } from "react-icons/fa";
function Filters({ search, setSearch, ordering, setOrdering }) {
  return (
    <section className="filters">
      <FaSearch />
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Buscar un juego..."
        className="search-input"
      />

      <select
        className="order-select"
        value={ordering}
        onChange={(e) => setOrdering(e.target.value)}
      >
        <option value="">Ordenar por</option>
        <option value="-rating">Mejor valorados</option>
        <option value="-released">Más recientes</option>
        <option value="released">Más antiguos</option>
        <option value="name">Nombre (A-Z)</option>
        <option value="-name">Nombre (Z-A)</option>
      </select>
    </section>
  );
}

export default Filters;
