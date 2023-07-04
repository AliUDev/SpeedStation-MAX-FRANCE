import React from "react";
import Hidearea from "../components/Hidefilter";

const Filter = (props) => {
  return (
    <div className="filter-card-body">
      <div className="filter-card-content">
        <label>Filter </label>
        <div className="clear_filters">
          <div className=" text-decoration-none text-dark text-break">
            ausgestorben
          </div>
        </div>
      </div>
      <Hidearea
        setCustomerGroup={props.setCustomerGroup}
        setDesiredDeliveryDate={props.setDesiredDeliveryDate}
        setCargoType={props.setCargoType}
        cargoType={props.cargoType}
        setPickupNotification={props.setPickupNotification}
        setDeliveryNotification={props.setDeliveryNotification}
        pickupNotification={props.pickupNotification}
        deliveryNotification={props.deliveryNotification}
      />
    </div>
  );
};

export default Filter;
