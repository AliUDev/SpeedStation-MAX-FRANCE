/* eslint-disable react/jsx-pascal-case */
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import Basic_1 from "./Forms/Basic_1";
import { Button, Divider } from "@mui/material";
import CatchmentArea_3 from "./Forms/CatchmentArea_3";
import DistributionChannels_2 from "./Forms/DistributionChannels_2";
import ExclusionCriteria_4 from "./Forms/ExclusionCriteria_4";
import RunTimes_6 from "./Forms/RunTimes_6";
import Subscription_8 from "./Forms/Subscription_8";
import PaymentMethods_9 from "./Forms/PaymentMethods_9";
import Precalculation_5 from "./Forms/Precalculation_5";
import AdditionalServices_7 from "./Forms/AdditionalServices_7";
import Rateattribute_10 from "./Forms/Rateattribute_10";
import OrderSubmission_12 from "./Forms/OrderSubmission_12";
import Miscellaneous_11 from "./Forms/Miscellaneous_11";

export default function TarifForm() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpand = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="p-5">
      <div className="row">
        <div className="col-4">
          <h4 className="fw-bolder text-muted">Tarifdetails</h4>
        </div>
        <div className="col-8 text-end"></div>
      </div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleExpand("panel1")}
      >
        <AccordionSummary>
          <Typography sx={{ width: "33%", flexShrink: 0 }} variant="subtitle1">
            Basics
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Basic_1 />
          <div className="my-4">
            <Divider />
          </div>
          <Button
            style={{ marginLeft: "85%" }}
            variant="contained"
            color="success"
            onClick={(e) => handleExpand("panel2")(e, true)}
          >
            Further
          </Button>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleExpand("panel2")}
      >
        <AccordionSummary>
          <Typography sx={{ width: "33%", flexShrink: 0 }} variant="subtitle1">
            Vertriebskanäle
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <DistributionChannels_2 />
          <div className="my-4">
            <Divider />
          </div>
          <div style={{ display: "flex", marginLeft: "76%" }}>
            <Button
              variant="text"
              color="success"
              onClick={(e) => handleExpand("panel1")(e, true)}
            >
              return
            </Button>
            <Button
              className="mx-3"
              variant="contained"
              color="success"
              onClick={(e) => handleExpand("panel3")(e, true)}
            >
              Further
            </Button>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleExpand("panel3")}
      >
        <AccordionSummary>
          <Typography sx={{ width: "33%", flexShrink: 0 }} variant="subtitle1">
            Einzugsgebiet
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CatchmentArea_3 />
          <div className="my-4">
            <Divider />
          </div>
          <div style={{ display: "flex", marginLeft: "76%" }}>
            <Button
              variant="text"
              color="success"
              onClick={(e) => handleExpand("panel2")(e, true)}
            >
              return
            </Button>
            <Button
              className="mx-3"
              variant="contained"
              color="success"
              onClick={(e) => handleExpand("panel4")(e, true)}
            >
              Further
            </Button>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleExpand("panel4")}
      >
        <AccordionSummary>
          <Typography sx={{ width: "33%", flexShrink: 0 }} variant="subtitle1">
            Ausschlusskriterien
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ExclusionCriteria_4 />
          <div className="my-4">
            <Divider />
          </div>
          <div style={{ display: "flex", marginLeft: "76%" }}>
            <Button
              variant="text"
              color="success"
              onClick={(e) => handleExpand("panel3")(e, true)}
            >
              return
            </Button>
            <Button
              className="mx-3"
              variant="contained"
              color="success"
              onClick={(e) => handleExpand("panel5")(e, true)}
            >
              Further
            </Button>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleExpand("panel5")}
      >
        <AccordionSummary>
          <Typography sx={{ width: "33%", flexShrink: 0 }} variant="subtitle1">
            Vorberechnung
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Precalculation_5 />
          <div className="my-4">
            <Divider />
          </div>
          <div style={{ display: "flex", marginLeft: "76%" }}>
            <Button
              variant="text"
              color="success"
              onClick={(e) => handleExpand("panel4")(e, true)}
            >
              return
            </Button>
            <Button
              className="mx-3"
              variant="contained"
              color="success"
              onClick={(e) => handleExpand("panel6")(e, true)}
            >
              Further
            </Button>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleExpand("panel6")}
      >
        <AccordionSummary>
          <Typography sx={{ width: "33%", flexShrink: 0 }} variant="subtitle1">
            Laufzeiten
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <RunTimes_6 />
          <div className="my-4">
            <Divider />
          </div>
          <div style={{ display: "flex", marginLeft: "76%" }}>
            <Button
              variant="text"
              color="success"
              onClick={(e) => handleExpand("panel5")(e, true)}
            >
              return
            </Button>
            <Button
              className="mx-3"
              variant="contained"
              color="success"
              onClick={(e) => handleExpand("panel7")(e, true)}
            >
              Further
            </Button>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel7"}
        onChange={handleExpand("panel7")}
      >
        <AccordionSummary>
          <Typography sx={{ width: "33%", flexShrink: 0 }} variant="subtitle1">
            Zubuchbare Leistungen
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AdditionalServices_7 />
          <div className="my-4">
            <Divider />
          </div>
          <div style={{ display: "flex", marginLeft: "76%" }}>
            <Button
              variant="text"
              color="success"
              onClick={(e) => handleExpand("panel6")(e, true)}
            >
              return
            </Button>
            <Button
              className="mx-3"
              variant="contained"
              color="success"
              onClick={(e) => handleExpand("panel8")(e, true)}
            >
              Further
            </Button>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel8"}
        onChange={handleExpand("panel8")}
      >
        <AccordionSummary>
          <Typography sx={{ width: "33%", flexShrink: 0 }} variant="subtitle1">
            Kontingent
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Subscription_8 />
          <div className="my-4">
            <Divider />
          </div>
          <div style={{ display: "flex", marginLeft: "76%" }}>
            <Button
              variant="text"
              color="success"
              onClick={(e) => handleExpand("panel7")(e, true)}
            >
              return
            </Button>
            <Button
              className="mx-3"
              variant="contained"
              color="success"
              onClick={(e) => handleExpand("panel9")(e, true)}
            >
              Further
            </Button>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel9"}
        onChange={handleExpand("panel9")}
      >
        <AccordionSummary>
          <Typography sx={{ width: "33%", flexShrink: 0 }} variant="subtitle1">
            Zahlungsmethoden
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <PaymentMethods_9 />
          <div className="my-4">
            <Divider />
          </div>
          <div style={{ display: "flex", marginLeft: "76%" }}>
            <Button
              variant="text"
              color="success"
              onClick={(e) => handleExpand("panel8")(e, true)}
            >
              return
            </Button>
            <Button
              className="mx-3"
              variant="contained"
              color="success"
              onClick={(e) => handleExpand("panel10")(e, true)}
            >
              Further
            </Button>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel10"}
        onChange={handleExpand("panel10")}
      >
        <AccordionSummary>
          <Typography sx={{ width: "33%", flexShrink: 0 }} variant="subtitle1">
            Tarifattribute
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Rateattribute_10 />
          <div className="my-4">
            <Divider />
          </div>
          <div style={{ display: "flex", marginLeft: "76%" }}>
            <Button
              variant="text"
              color="success"
              onClick={(e) => handleExpand("panel9")(e, true)}
            >
              return
            </Button>
            <Button
              className="mx-3"
              variant="contained"
              color="success"
              onClick={(e) => handleExpand("panel11")(e, true)}
            >
              Further
            </Button>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel11"}
        onChange={handleExpand("panel11")}
      >
        <AccordionSummary>
          <Typography sx={{ width: "33%", flexShrink: 0 }} variant="subtitle1">
            Sonstiges
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Miscellaneous_11 />
          <div className="my-4">
            <Divider />
          </div>
          <div style={{ display: "flex", marginLeft: "76%" }}>
            <Button
              variant="text"
              color="success"
              onClick={(e) => handleExpand("panel10")(e, true)}
            >
              return
            </Button>
            <Button
              className="mx-3"
              variant="contained"
              color="success"
              onClick={(e) => handleExpand("panel12")(e, true)}
            >
              Further
            </Button>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel12"}
        onChange={handleExpand("panel12")}
      >
        <AccordionSummary>
          <Typography sx={{ width: "33%", flexShrink: 0 }} variant="subtitle1">
            Auftragsübermittlung
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <OrderSubmission_12 />
          <div className="my-4">
            <Divider />
          </div>
          <div style={{ display: "flex", marginLeft: "68%" }}>
            <Button
              variant="text"
              color="success"
              onClick={(e) => handleExpand("panel11")(e, true)}
            >
              return
            </Button>
            <Button
              className="mx-3"
              variant="contained"
              color="success"
            //   onClick={(e) => handleExpand("panel")(e, true)}
            >
              CREATE A TARIF
            </Button>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
