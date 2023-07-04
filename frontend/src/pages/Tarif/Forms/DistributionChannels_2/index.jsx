import React, { useState } from "react";
import { Checkbox, InputAdornment, TextField, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const DistributionChannelsInputs_2 = ({ name1, name2, name3, func }) => {
  return (
    <div className="row mt-4">
      <div className="col-xs-12 col-md-4">
        <Typography variant="subtitle2">Surcharge (relative)</Typography>
        <TextField
          onChange={(e) => func(e)}
          name={name1}
          InputProps={{
            endAdornment: <InputAdornment position="end">%</InputAdornment>,
          }}
          label="in %"
          style={{ width: "calc(100% - 4px)" }}
          variant="standard"
          type="number"
        />
      </div>
      <div className="col-xs-12 col-md-4">
        <Typography variant="subtitle2">Surcharge (absolute)</Typography>
        <TextField
          name={name2}
          onChange={(e) => func(e)}
          InputProps={{
            endAdornment: <InputAdornment position="end">€</InputAdornment>,
          }}
          label="in €"
          style={{ width: "calc(100% - 4px)" }}
          type="number"
          variant="standard"
        />
      </div>
      <div className="col-xs-12 col-md-4">
        <Typography variant="subtitle2">max. surcharge (absolute)</Typography>
        <TextField
          name={name3}
          onChange={(e) => func(e)}
          InputProps={{
            endAdornment: <InputAdornment position="end">€</InputAdornment>,
          }}
          label="in €"
          style={{ width: "calc(100% - 4px)" }}
          type="number"
          variant="standard"
        />
      </div>
    </div>
  );
};

const DistributionChannels = () => {
  const [check, setCheck] = useState({
    marketplace: false,
    marketplace_input1: 0,
    marketplace_input2: 0,
    marketplace_input3: 0,
    pro: false,
    pro_input1: 0,
    pro_input2: 0,
    pro_input3: 0,
    for_you: false,
    for_you_input1: 0,
    for_you_input2: 0,
    for_you_input3: 0,
    connect: false,
    connect_input1: 0,
    connect_input2: 0,
    connect_input3: 0,
    lite: false,
    lite_input1: 0,
    lite_input2: 0,
    lite_input3: 0,
    sales_assistant: false,
    sales_assistant_input1: 0,
    sales_assistant_input2: 0,
    sales_assistant_input3: 0,
  });

  const handleCheckboxChange = (name) => (event) => {
    const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
    setCheck((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCheck((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <div>
      <Typography variant="body2">
        Select the sales channels through which this tariff should be played
        out.
      </Typography>
      <Typography variant="body2">
        If you set a markup (percentage or absolute), it will be applied to the
        rate table prices for that channel.
      </Typography>
      <div className="my-5">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          // expanded={check.marketplace}
          >
            <Typography>
              <Checkbox
                checked={check.marketplace}
                onClick={handleCheckboxChange("marketplace")}
              />
              marketplace
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              The tariff is displayed on the public marketplace Pamyra.de.
            </Typography>
            {check.marketplace && <DistributionChannelsInputs_2 name1='marketplace_input1' name2='marketplace_input2' name3='marketplace_input3' func={handleChange} />}
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          // expanded={check.marketplace}
          >
            <Typography>
              <Checkbox
                checked={check.pro}
                onClick={handleCheckboxChange("pro")}
              />
              PRO
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              The tariff is only displayed to commercial, credit-checked
              frequent mailers with the payment method invoice. If you have any
              questions, please contact us on 0361/380 300 81.
            </Typography>
            {check.pro && <DistributionChannelsInputs_2 name1="pro_input1" name2="pro_input2" name3="pro_input3" func={handleChange} />}
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          // expanded={check.marketplace}
          >
            <Typography>
              <Checkbox
                checked={check.for_you}
                onClick={handleCheckboxChange("for_you")}
              />
              4You
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              The tariff is displayed on your own website or in the test
              environment set up for you. If you are not yet a 4You customer,
              contact us on 0361/380 300 82. Further information:
              https://www.pamyra.de/spedition-digitalisiert.
            </Typography>
            {check.for_you && <DistributionChannelsInputs_2 name1="for_you_input1" name2="for_you_input2" name3="for_you_input3" func={handleChange} />}
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          // expanded={check.marketplace}
          >
            <Typography>
              <Checkbox
                checked={check.connect}
                onClick={handleCheckboxChange("connect")}
              />
              Connect
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              The tariff is made available in the virtual network Pamyra
              Connect. Other freight forwarders can sell this tariff under their
              own name and automatically include you as a subcontractor. If you
              have any questions, please contact us on 0361/380 300 82.
            </Typography>
            {check.connect && <DistributionChannelsInputs_2 name1="connect_input1" name2="connect_input2" name3="connect_input3" func={handleChange} />}
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          // expanded={check.marketplace}
          >
            <Typography>
              <Checkbox
                checked={check.lite}
                onClick={handleCheckboxChange("lite")}
              />
              Lite
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              Der Tarif wird auf Ihrer Pamyra Lite Website ausgespielt.
            </Typography>
            {check.lite && <DistributionChannelsInputs_2 name1="lite_input1" name2="lite_input2" name3="lite_input3" func={handleChange} />}
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          // expanded={check.marketplace}
          >
            <Typography>
              <Checkbox
                checked={check.sales_assistant}
                onClick={handleCheckboxChange("sales_assistant")}
              />
              Sales Assistant
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              The tariff can be selected in the Sales Assistant and will be
              played out as an offer on your own website or in the test
              environment set up for you. If you are not yet a Sales Assistant
              customer, please contact us on 0361/380 300 82. Further
              information: https://www.pamyra.de/spedition-digitalisiert.
            </Typography>
            {check.sales_assistant && <DistributionChannelsInputs_2 name1="sales_assistant_input1" name2="sales_assistant_input2" name3="sales_assistant_input3" func={handleChange} />}
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default DistributionChannels;
