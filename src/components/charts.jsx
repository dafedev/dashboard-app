import "../styles/charts.css";
import { formatNumber } from "../utils/formatNumber";
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  FunnelChart,
  Funnel,
  LabelList,
  ResponsiveContainer,
} from "recharts";
import { dummyData, dummyDataAsessor } from "../utils/dummyData";

export const SectionChart = () => {
  return (
    <>
      <section className="content">
        <h1 className="initialH">
          Customer Segmentation <b>Stay Clusters</b>
        </h1>
        <section className="unique">
          <FunnelChartC title="Ventas por % de cierre" data={dummyData} />
        </section>
        <section className="gridFive">
          <CountChart title="Total Oportunidades" data={5} type="number" />
          <CountChart title="Total Vendidas" data={5} />
          <CountChart title="Total Perdidas" data={5} />
          <CountChart title="Total Sin Seguimiento" data={5} type="number" />
          <CountChart title="Total Con Seguimiento" data={5} />
          <CountChart title="Total Ventas" data={5} />
        </section>
        <section className="gridThree">
          <CircularChart title="Ventas por producto" data={dummyData} />
          <CircularChart title="Estado oportunidad" data={dummyData} />
          <BarChartC title="Ventas por asesor" data={dummyDataAsessor} />
        </section>
      </section>
    </>
  );
};

export const CountChart = ({ title, data, type }) => {
  return (
    <>
      <section className="countChart">
        <h2>{title}</h2>
        {type === "number" ? <p>{data}</p> : <p>{formatNumber(data)}</p>}
      </section>
    </>
  );
};

export const CircularChart = ({ title, data }) => {
  return (
    <>
      <section className="circularChart">
        <h2>{title}</h2>
        <PieChart width={310} height={260}>
          <Pie
            data={data}
            isAnimationActive={false}
            cx={170}
            cy={130}
            innerRadius={60}
            label
          />
          <Tooltip />
        </PieChart>
      </section>
    </>
  );
};

export const BarChartC = ({ title, data }) => {
  return (
    <>
      <section className="barChart">
        <h2>{title}</h2>
        <BarChart width={300} height={260} data={data}>
          <Tooltip />
          <XAxis dataKey="name" />
          <Bar dataKey="value" />
        </BarChart>
      </section>
    </>
  );
};

export const FunnelChartC = ({ title, data }) => {
  return (
    <>
      <section className="funnelChart">
        <h2>{title}</h2>
        <ResponsiveContainer width="100%" height={300}>
          <FunnelChart width={700} height={260}>
            <Tooltip />
            <Funnel dataKey="value" data={data} isAnimationActive>
              <LabelList position="center" fill="#ffff" dataKey="name" />
            </Funnel>
          </FunnelChart>
        </ResponsiveContainer>
      </section>
    </>
  );
};
