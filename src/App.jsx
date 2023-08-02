import "./styles/App.css";
import { Filter } from "./components/filters";
import { SectionChart } from "./components/charts";
function App() {
  return (
    <>
      <main>
        <Filter />
        <SectionChart />
      </main>
    </>
  );
}

export default App;
