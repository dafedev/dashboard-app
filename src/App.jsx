import { useEffect, useState } from "react";
import "./styles/App.css";
import { Filter } from "./components/tallerCMR/filters";
import { SectionChart } from "./components/tallerCMR/charts";
import { dataTest } from "./utils/dummyData";
import { FilterTablero } from "./components/tallerTablero/filters";
import { SectionChartTablero } from "./components/tallerTablero/charts";

function App() {
  const [filter, setFilter] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    setData(dataTest);
  }, []);

  useEffect(() => {
    if (!filter || filter.type === "clear") {
      setData(dataTest);
    } else {
      setData([]);
    }
  }, [filter]);

  return (
    <>
      {/* Tablero CMR */}
      {/* <main>
        <Filter setFilter={setFilter} />
        <SectionChart data={data} />
      </main> */}
      {/* Tablero Taller */}
      <main>
        <FilterTablero setFilter={setFilter} />
        <SectionChartTablero data={data} />
      </main>
    </>
  );
}

export default App;
