import React, { useCallback, useEffect, useState } from "react";
import "../assets/sass/style.scss";
import FilterCard from "../assets/components/FilterCrad.js";
import Companyinfo from "../assets/components/Companyinfo";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { GetDeliveryLocation } from "../assets/apis/ApiSerives";
const { getName } = require("country-list");

const Step = () => {
  const { state } = useLocation();

  const navigate = useNavigate();

  const [error, setError] = useState(false);
  const [comapniesData, setComapniesData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [customerGroup, setCustomerGroup] = useState("");
  const [desiredDeliveryDate, setDesiredDeliveryDate] = useState("");
  const [cargoType, setCargoType] = useState("");
  const [pickupNotification, setPickupNotification] = useState(false);
  const [deliveryNotification, setDeliveryNotification] = useState(false);

  const handleGetCompanies = useCallback(async () => {
    try {
      let response = await GetDeliveryLocation(state.deliveryLocation);
      if (response.data.data.length > 0) {
        setComapniesData(response.data.data);
        setFilteredData(response.data.data);
        setError(false);
      } else {
        setError(true);
      }
    } catch (error) {
      if (error.response.status === 404) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "No comapnies found",
          showConfirmButton: false,
          timer: 1500,
        });
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
  }, [state.deliveryLocation]);

  const handleNavigate = (event, index) => {
    event.preventDefault();
    navigate("/checkout", {
      state: {
        ...state,
        totalCost: handleCalculateShippingCost(comapniesData[index].tariff),
        companyName: comapniesData[index].company,
        companyEmail: comapniesData[index].email,
        desiredDeliveryDate: desiredDeliveryDate,
        cargoType: cargoType,
        pickupNotification: pickupNotification,
        deliveryNotification: deliveryNotification,
      },
    });
  };

  const handleCalculateShippingCost = (tariff) => {
    let calculatedShippingCost = 0;
    if (state.pakages) {
      calculatedShippingCost += state.shippingCost * tariff * state.distance;
    } else {
      calculatedShippingCost += state.shippingCost * tariff * state.distance;
    }
    return calculatedShippingCost;
  };

  useEffect(() => {
    handleGetCompanies();
  }, [handleGetCompanies]);

  useEffect(() => {
    if (customerGroup === "commercial") {
      setFilteredData(
        comapniesData.filter((data) => data.isCommercial === true)
      );
    } else if (customerGroup === "private") {
      setFilteredData(
        comapniesData.filter((data) => data.isCommercial === false)
      );
    } else {
      setFilteredData(comapniesData);
    }
  }, [customerGroup, comapniesData]);

  return (
    <div className="step-body">
      <div className="step-content">
        <div className="step-header">
          <div>
            {comapniesData.length} Ergebnisse zu Ihrer Suche nach{" "}
            {getName(state.deliveryLocation)}
          </div>
          <div>{state.charge.length} Pakete</div>
          <Link className="text-decoration-none" to="/charge">
            [Ändern]
          </Link>
        </div>
        <div className="after-header">
          <div className="after-header-content">
            <div className="filter-section">
              <FilterCard
                setCustomerGroup={setCustomerGroup}
                setDesiredDeliveryDate={setDesiredDeliveryDate}
                setCargoType={setCargoType}
                cargoType={cargoType}
                setPickupNotification={setPickupNotification}
                setDeliveryNotification={setDeliveryNotification}
                pickupNotification={pickupNotification}
                deliveryNotification={deliveryNotification}
              />
            </div>
            <div className="company-info-section">
              {comapniesData.length === 0 && (
                <div>Keine Unternehmen gefunden</div>
              )}
              {filteredData.map((data, index) => (
                <Companyinfo
                  key={index}
                  onClick={(event) => handleNavigate(event, index)}
                  companyName={data.company}
                  companyEmail={data.email}
                  load={state.charge}
                  shippingCost={handleCalculateShippingCost(
                    data.tariff
                  ).toFixed(2)}
                  error={error}
                  isCommercial={data.isCommercial}
                  firstName={data.firstName}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step;
