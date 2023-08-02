import { useState } from "react";
import "../styles/filters.css";
import moment from "moment";
import { listSeller } from "../utils/dummyData";

export const Filter = () => {
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
            <DateFilter title="Intervalo fechas oportunidad" />
            <ProductFilter title="Producto" />
            <CityFilter title="Ciudad" />
            <DistrictFilter title="Barrio" />
            <SellerFilter title="Vendedor" data={listSeller} />
            <OportunityFilter title="Estado Oportunidad" data={listSeller} />
          </div>
        </nav>
      </header>
    </>
  );
};

export const DateFilter = ({ title }) => {
  const [dateStart, setDateStart] = useState(new Date());
  const [dateEnd, setDateEnd] = useState(new Date());

  return (
    <>
      <section className="dateFilter">
        <h2>{title}</h2>
        <div className="inputsDate">
          <input type="date" onChange={setDateStart} />
          -
          <input type="date" onChange={setDateEnd} />
        </div>
      </section>
    </>
  );
};

export const ProductFilter = ({ title }) => {
  const [product, setProduct] = useState("");

  return (
    <>
      <section className="productFilter">
        <h2>{title}</h2>
        <input
          type="text"
          onChange={setProduct}
          placeholder="Buscar producto..."
        />
      </section>
    </>
  );
};

export const CityFilter = ({ title }) => {
  const [city, setCity] = useState("");

  return (
    <>
      <section className="productFilter">
        <h2>{title}</h2>
        <input type="text" onChange={setCity} placeholder="Buscar ciudad..." />
      </section>
    </>
  );
};

export const DistrictFilter = ({ title }) => {
  const [district, setDistrict] = useState("");

  return (
    <>
      <section className="productFilter">
        <h2>{title}</h2>
        <input
          type="text"
          onChange={setDistrict}
          placeholder="Buscar barrio..."
        />
      </section>
    </>
  );
};

export const SellerFilter = ({ title, data }) => {
  const [seller, setSeller] = useState("");

  return (
    <>
      <section className="sellerFilter">
        <h2>{title}</h2>

        {data.map(
          (item, index) =>
            index < 5 && (
              <>
                <div
                  className="sellerItem"
                  onClick={() => {
                    setSeller(item.name);
                  }}
                >
                  <p>{item.name}</p>
                </div>
              </>
            )
        )}

        <input
          type="text"
          onChange={setSeller}
          placeholder="Buscar Vendedor..."
        />
      </section>
    </>
  );
};

export const OportunityFilter = ({ title }) => {
  const [oportunity, setOportunity] = useState("");

  return (
    <>
      <section className="productFilter">
        <h2>{title}</h2>
        <input
          type="text"
          onChange={setOportunity}
          placeholder="Buscar oportunidad..."
        />
      </section>
    </>
  );
};
