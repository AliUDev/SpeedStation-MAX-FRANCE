import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { getOrdersBycompanyName } from "../../apis/ApiSerives";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import dayjs from "dayjs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "november",
  "December",
];

const ShippingPerMonthChart = () => {
  const [chartsData, setChartsData] = useState([]);
  const [error, setError] = useState(true);

  const counts =
    chartsData.length === 0
      ? Array.from({ length: 12 }, () => 0)
      : chartsData
          .map((data) => dayjs(data.pickUpDate).month())
          .reduce(
            (acc, curr) => {
              acc[curr] = (acc[curr] || 0) + 1;
              return acc;
            },
            Array.from({ length: 12 }, () => 0)
          );

  console.log(counts, "=============>>>>>>");
  console.log(chartsData.map((data) => data.createdAt));

  const data = {
    labels,
    datasets: [
      {
        label: "Versand pro Monat",
        data: counts,
        borderColor: "#345FA6",
        backgroundColor: "#345FA6",
      },
    ],
  };

  const userData = useSelector((state) => state.auth.user);

  const handleGetUserOrder = useCallback(async () => {
    try {
      let response = await getOrdersBycompanyName(userData.company);
      if (response.status === 200 && response.data.data.length !== 0) {
        setChartsData(response.data.data);
        setError(false);
      } else if (response.data.data.length === 0) {
        setError(true);
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Etwas ist schief gelaufen",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      if (error.response.status === 404) {
        setError(true);
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: error,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  }, [userData._id, userData.company, userData.isFrightForwarder]);

  useEffect(() => {
    handleGetUserOrder();
  }, [handleGetUserOrder]);

  return (
    <div className="shipping-per-month-chart">
      <Line className="h-75 w-75" options={options} data={data} />
    </div>
  );
};

export default ShippingPerMonthChart;
