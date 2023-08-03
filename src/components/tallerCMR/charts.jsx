import { useEffect, useState } from "react";
import "../../styles/charts.css";
import { formatNumber } from "../../utils/formatNumber";
import { Table } from "antd";
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

export const SectionChart = ({ data }) => {
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <>
      <section className="content">
        <h1 className="initialH">
          Customer Segmentation <b>Stay Clusters</b>
        </h1>
        <div className="column-row">
          <div className="grid">
            <section className="gridFive">
              <CountChart
                title="Total Oportunidades"
                data={data?.totalOportunities ?? 0}
                type="number"
              />
              <CountChart title="Total Vendidas" data={data?.totalSold ?? 0} />
            </section>
            <section className="unique">
              <FunnelChartC
                title="Ventas por % de cierre"
                data={data?.totalSellPerClose ?? []}
                width={width}
              />
            </section>
            <section className="gridFive Last">
              <CountChart title="Total Perdidas" data={data?.totalLost ?? 0} />
              <CountChart title="Total Ventas" data={data?.totalSell ?? 0} />
            </section>
          </div>
        </div>
        <section className="gridThree">
          <CircularChart
            title="Ventas por producto"
            data={data?.totalSellPerProduct ?? []}
          />
          <CircularChart
            title="Estado oportunidad"
            data={data?.totalStateOportunities ?? []}
          />
          <BarChartC
            title="Ventas por asesor"
            data={data?.totalSellPerAsseror ?? []}
          />
        </section>
        <section>
          <TableC
            title="Listado oportunidades"
            data={data?.totalListOportunities ?? []}
          />
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

export const FunnelChartC = ({ title, data, width }) => {
  console.log(width);
  return (
    <>
      <section className="funnelChart">
        <h2>{title}</h2>
        {
          <ResponsiveContainer
            width={width < 1400 && width > 768 ? 500 : width < 768 ? 300 : 700}
            height={300}
          >
            <FunnelChart width={700} height={260}>
              <Tooltip />
              <Funnel dataKey="value" data={data} isAnimationActive>
                <LabelList position="center" fill="#ffff" dataKey="name" />
              </Funnel>
            </FunnelChart>
          </ResponsiveContainer>
        }
      </section>
    </>
  );
};

export const TableC = ({ title, data }) => {
  const columns = [
    {
      title: "Cédula",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Producto",
      dataIndex: "product",
      key: "product",
    },
    {
      title: "Total Vendidas",
      dataIndex: "value",
      key: "value",
    },
  ];

  return (
    <>
      <section className="table">
        <h2>{title}</h2>
        <Table columns={columns} bordered dataSource={data} />
      </section>
    </>
  );
};
