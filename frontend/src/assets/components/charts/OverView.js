import dayjs from "dayjs";
import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { getOrdersBycompanyName } from "../../apis/ApiSerives";

const OverView = () => {
  const [chartsData, setChartsData] = useState([]);
  const [error, setError] = useState(true);

  const userData = useSelector((state) => state.auth.user);

  let currentDate = dayjs(new Date()).format("YYYY-MM-DD");
  let getMonth = dayjs(currentDate).get("months") + 1;

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

  const handleCalculateTotalCost = () => {
    let inTotal = 0;
    chartsData
      .filter((data) => dayjs(data.pickUpDate).get("months") + 1 === getMonth)
      .map((data) => (inTotal += parseInt(data.totalCost)));
    return inTotal;
  };

  const handleCalculateTotalCostForToday = () => {
    let todayTotal = 0;
    console.log(todayTotal);
    chartsData
      .filter((data) => data.pickUpDate === currentDate)
      .map((data) => (todayTotal += parseInt(data.totalCost)));
    return todayTotal;
  };

  useEffect(() => {
    handleGetUserOrder();
  }, [handleGetUserOrder]);

  return (
    <div className="overview-cards-wrapper">
      <div className="card p-3">
        <strong>Verkauf</strong>
        <div className="overview-cards-table">
          <table class="table">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Heute</th>
                <th scope="col">Aktueller Monat</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>In Summe</td>
                <td>€{handleCalculateTotalCostForToday()}</td>
                <td>€{handleCalculateTotalCost()}</td>
              </tr>
              <tr>
                <td>Webseite</td>
                <td>€{handleCalculateTotalCostForToday()}</td>
                <td>€{handleCalculateTotalCost()}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Link to={"/analyse-sales"}>Umsatz analysieren</Link>
      </div>
      <div className="card p-3">
        <strong>Buchungen</strong>
        <div className="overview-cards-table">
          <table class="table">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Heute</th>
                <th scope="col">Aktueller Monat</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>In Summe</td>
                <td>€{handleCalculateTotalCostForToday()}</td>
                <td>€{handleCalculateTotalCost()}</td>
              </tr>
              <tr>
                <td>Webseite</td>
                <td>€{handleCalculateTotalCostForToday()}</td>
                <td>€{handleCalculateTotalCost()}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Link to={"/analyse-shippings"}>Buchungen analysieren</Link>
      </div>
      <div>
        <Link className="btn btn-overview-all-order-btn" to={"/orders"}>
          Siehe Alle Bestellungen
        </Link>
      </div>
    </div>
  );
};

export default OverView;
