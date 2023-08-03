import "../../styles/charts.css";
import { Table } from "antd";
import { BarChartC, CircularChart, CountChart } from "../tallerCMR/charts";

export const SectionChartTablero = ({ data }) => {
  return (
    <>
      <section className="content">
        <h1 className="initialH">
          Customer Segmentation <b>Stay Clusters</b>
        </h1>
        <div className="column-row">
          <section className="gridFour">
            <CountChart
              title="Total ingresadas"
              data={data?.totalOportunities ?? 0}
              type="number"
            />
            <CountChart title="Total entradas" data={data?.totalSold ?? 0} />
            <CountChart title="Total salidas" data={data?.totalLost ?? 0} />
            <CountChart
              title="Multiples Entradas"
              data={data?.totalSell ?? 0}
            />
          </section>
        </div>
        <section className="gridThree">
          <CircularChart
            title="Tipo de servicio"
            data={data?.totalSellPerProduct ?? []}
          />
          <CircularChart
            title="Tipo de vehículo"
            data={data?.totalStateOportunities ?? []}
          />
          <BarChartC
            title="Ventas por tipo servicio"
            data={data?.totalSellPerAsseror ?? []}
          />
        </section>
        <section>
          <TableC
            title="Listado motos con entrada"
            data={data?.totalListOportunities ?? []}
          />
        </section>
      </section>
    </>
  );
};

const TableC = ({ title, data }) => {
  const columns = [
    {
      title: "Placa",
      dataIndex: "plaque",
      key: "plaque",
    },
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
