import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import {
  getOrders,
  getOrdersBycompanyName,
  cancelOrderById,
} from "../../apis/ApiSerives";

const SortTable = () => {
  const [data, setData] = useState([]);
  const [order, setOrder] = useState("ASC");
  const [error, setError] = useState(true);

  const userData = useSelector((state) => state.auth.user);

  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("ASC");
    }
  };

  const handleGetUserOrder = useCallback(async () => {
    let response = null;
    try {
      if (userData.isFrightForwarder) {
        response = await getOrdersBycompanyName(userData.company);
      } else {
        response = await getOrders(userData._id);
      }
      if (response.status === 200 && response.data.data.length !== 0) {
        setData(response.data.data);
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

  const handleCancelOrder = async (event, index) => {
    event.preventDefault();
    try {
      let response = await cancelOrderById(data[index]._id);
      if (response.status === 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Bestellung erfolgreich storniert",
          showConfirmButton: false,
          timer: 1500,
        });
        handleGetUserOrder();
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
      Swal.fire({
        position: "center",
        icon: "error",
        title: error,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="sortable_table">
      <table>
        <thead>
          <th onClick={() => sorting("senderFirstName")}>Absender</th>
          <th onClick={() => sorting("reciverFirstname")}>Empfängername</th>
          <th onClick={() => sorting("senderEmail")}>Absender E-Mail</th>
          <th onClick={() => sorting("reciverEmail")}>
            E-Mail wiederherstellen
          </th>
          <th onClick={() => sorting("reciverAddress")}>Lieferanschrift</th>
          <th onClick={() => sorting("companyName")}>Name der Firma</th>
          <th onClick={() => sorting("companyEmail")}>Firmen-E-Mail</th>
          <th onClick={() => sorting("shippingCost")}>Versandkosten</th>
          <th onClick={() => sorting("totalCost")}>Versandkosten</th>
          <th onClick={() => sorting("deliveryDate")}>Liefertermin</th>
          <th>Bestellung stornieren</th>
        </thead>
        <tbody>
          {data.map((data, index) => (
            <tr key={data._id}>
              <td>
                {data.senderFirstName} {data.senderLastName}
              </td>
              <td>
                {data.reciverFirstname} {data.reciverLastName}
              </td>
              <td>{data.senderEmail}</td>
              <td>{data.reciverEmail}</td>
              <td>{data.reciverAddress}</td>
              <td>{data.companyName}</td>
              <td>{data.companyEmail}</td>
              <td>{data.shippingCost}</td>
              <td>{data.totalCost}</td>
              <td>{data.deliveryDate}</td>
              <td>
                <button
                  onClick={(event) => handleCancelOrder(event, index)}
                  className="btn btn-danger"
                >
                  stornieren
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {error && <div>Keine Befehle zum Anzeigen</div>}
    </div>
  );
};

export default SortTable;
