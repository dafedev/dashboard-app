import "../../styles/filters.css";
import moment from "moment";
import { listSeller, listOptions } from "../../utils/dummyData";

export const Filter = ({ setFilter }) => {
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
              title="Intervalo fechas oportunidad"
              changeFilter={changeFilter}
            />
            <ProductFilter
              title="Producto"
              changeFilter={changeFilter}
              listOptions={listOptions}
            />
            <CityFilter
              title="Ciudad"
              changeFilter={changeFilter}
              listOptions={listOptions}
            />
            <DistrictFilter
              title="Barrio"
              changeFilter={changeFilter}
              listOptions={listOptions}
            />
            <SellerFilter
              title="Vendedor"
              changeFilter={changeFilter}
              listOptions={listSeller}
            />
            <OportunityFilter
              title="Estado Oportunidad"
              changeFilter={changeFilter}
              listOptions={listOptions}
            />
          </div>
        </nav>
      </header>
    </>
  );
};

export const ClearAndSearch = ({ title, changeFilter }) => {
  return (
    <>
      <section className="searchFilter">
        <h2>{title}</h2>
        <input
          type="text"
          placeholder="Buscar..."
          onChange={(e) => {
            changeFilter("search", e);
          }}
        />
        <button
          className="clear"
          onClick={(e) => {
            changeFilter("clear", e);
          }}
        >
          Limpiar Filtros
        </button>
      </section>
    </>
  );
};

export const DateFilter = ({ title, changeFilter }) => {
  return (
    <>
      <section className="dateFilter">
        <h2>{title}</h2>
        <div className="inputsDate">
          <input
            type="date"
            id="startDate"
            onChange={(e) => {
              changeFilter("date", e);
            }}
          />
          -
          <input
            type="date"
            id="endDate"
            onChange={(e) => {
              changeFilter("date", e);
            }}
          />
        </div>
      </section>
    </>
  );
};

export const ProductFilter = ({ title, listOptions, changeFilter }) => {
  return (
    <>
      <section className="productFilter">
        <h2>{title}</h2>
        <select
          type="text"
          onChange={(e) => {
            changeFilter("product", e);
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

export const CityFilter = ({ title, listOptions, changeFilter }) => {
  return (
    <>
      <section className="productFilter">
        <h2>{title}</h2>
        <select
          type="text"
          onChange={(e) => {
            changeFilter("city", e);
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

export const DistrictFilter = ({ title, listOptions, changeFilter }) => {
  return (
    <>
      <section className="productFilter">
        <h2>{title}</h2>
        <select
          type="text"
          onChange={(e) => {
            changeFilter("district", e);
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

export const SellerFilter = ({ title, listOptions, changeFilter }) => {
  return (
    <>
      <section className="productFilter">
        <h2>{title}</h2>
        <select
          type="text"
          onChange={(e) => {
            changeFilter("seller", e);
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

export const OportunityFilter = ({ title, listOptions, changeFilter }) => {
  return (
    <>
      <section className="productFilter">
        <h2>{title}</h2>
        <select
          type="text"
          onChange={(e) => {
            changeFilter("oportunity", e);
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
