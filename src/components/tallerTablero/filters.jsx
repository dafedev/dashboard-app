import "../../styles/filters.css";
import moment from "moment";
import { listSeller, listOptions } from "../../utils/dummyData";
import {
  ClearAndSearch,
  DateFilter,
  ProductFilter,
} from "../tallerCMR/filters";

export const FilterTablero = ({ setFilter }) => {
  const changeFilter = (type, e) => {
    if (type === "search") {
      setFilter({
        type: "search",
        value: e.target.value,
      });
    }
    if (type === "clear") {
      setFilter({
        type: "clear",
        value: null,
      });
    }
    if (type === "date") {
      if (e.target.id === "startDate") {
        setFilter((prev) => ({
          ...prev,
          type: "date",
          startDate: moment(e.target.value).format("YYYY-MM-DD"),
        }));
      } else {
        setFilter((prev) => ({
          ...prev,
          type: "date",
          endDate: moment(e.target.value).format("YYYY-MM-DD"),
        }));
      }
    }
    if (type === "product") {
      setFilter({
        type: "product",
        value: e.target.value,
      });
    }
    if (type === "city") {
      setFilter({
        type: "city",
        value: e.target.value,
      });
    }
    if (type === "district") {
      setFilter({
        type: "district",
        value: e.target.value,
      });
    }
    if (type === "seller") {
      setFilter({
        type: "seller",
        value: e.target.value,
      });
    }
    if (type === "oportunity") {
      setFilter({
        type: "oportunity",
        value: e.target.value,
      });
    }
  };

  return (
    <>
      <header>
        <nav className="contentNav">
          <div className="logoSection">
            <img
              src="https://www.strunkmedia.com/wp-content/uploads/2018/05/bigstock-Print-163213010.png"
              alt="logo"
            />
            <h1>LogoApp</h1>
          </div>
          <div className="filterSection">
            <h2>Filtros</h2>
            <ClearAndSearch title="Buscar" changeFilter={changeFilter} />
            <DateFilter
              title="Intervalo fechas ordenes"
              changeFilter={changeFilter}
            />
            <ProductFilter
              title="Producto"
              changeFilter={changeFilter}
              listOptions={listOptions}
            />
            <TypeRevision
              title="Tipo de revisión"
              changeFilter={changeFilter}
              listOptions={listOptions}
            />
            <TypeVehicle
              title="Tipo de vehículo"
              changeFilter={changeFilter}
              listOptions={listOptions}
            />
            <TypeAsessor
              title="Asesor"
              changeFilter={changeFilter}
              listOptions={listSeller}
            />
            <StateInOut
              title="Estado entrada/salida"
              changeFilter={changeFilter}
              listOptions={listOptions}
            />
          </div>
        </nav>
      </header>
    </>
  );
};

const TypeRevision = ({ title, listOptions, changeFilter }) => {
  return (
    <>
      <section className="productFilter">
        <h2>{title}</h2>
        <select
          type="text"
          onChange={(e) => {
            changeFilter("typeRevision", e);
          }}
        >
          {listOptions.map((item, index) => (
            <option key={index} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </section>
    </>
  );
};

const TypeVehicle = ({ title, listOptions, changeFilter }) => {
  return (
    <>
      <section className="productFilter">
        <h2>{title}</h2>
        <select
          type="text"
          onChange={(e) => {
            changeFilter("typeVehicle", e);
          }}
        >
          {listOptions.map((item, index) => (
            <option key={index} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </section>
    </>
  );
};

const TypeAsessor = ({ title, listOptions, changeFilter }) => {
  return (
    <>
      <section className="productFilter">
        <h2>{title}</h2>
        <select
          type="text"
          onChange={(e) => {
            changeFilter("typeAsessor", e);
          }}
        >
          {listOptions.map((item, index) => (
            <option key={index} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </section>
    </>
  );
};

const StateInOut = ({ title, listOptions, changeFilter }) => {
  return (
    <>
      <section className="productFilter">
        <h2>{title}</h2>
        <select
          type="text"
          onChange={(e) => {
            changeFilter("stateInOut", e);
          }}
        >
          {listOptions.map((item, index) => (
            <option key={index} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </section>
    </>
  );
};
