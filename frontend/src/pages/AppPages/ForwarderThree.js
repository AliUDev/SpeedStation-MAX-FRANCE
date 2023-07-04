import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/logo.png";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarIcon from "@mui/icons-material/Star";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box } from "@mui/system";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ErrorIcon from "@mui/icons-material/Error";

import { Container, Row } from "react-bootstrap";
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ForwarderThree = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const activeDetail = (event) => {
    console.log(
      event.target.parentNode.parentNode.nextSibling.classList.toggle(
        "detail_item"
      )
    );
  };

  return (
    <div className="pakages_Cards_wrapper">
      <div className="deals_header">
        <div>Address</div>
        <div className="tabs_button_outer_Container">
          <div className="Tabs_button_container">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Item One" {...a11yProps(0)} />
              <Tab label="Item Two" {...a11yProps(1)} />
              <Tab label="Item Three" {...a11yProps(2)} />
            </Tabs>
          </div>
        </div>
      </div>
      <div className="filters_pakages_outer_Container">
        <div className="filter_Accordian_container">
          <div className="accordian_header">
            <p className="heading">Filter</p>
            <p className="button">Extinguish</p>
          </div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <p className="accordian_title">Customer Group</p>
            </AccordionSummary>
            <AccordionDetails>
              <div className="accordian_details">
                <div className="accordian_details_button_outer">
                  <div className="filter_button">
                    For Commercial Customers
                    <Tooltip title="The loading meter is a unit of measurement for the loading area required by packages. A loading meter corresponds to one meter of the loading space of a truck in length when using the standard width of 2.40 m.">
                      <IconButton>
                        <ErrorIcon />
                      </IconButton>
                    </Tooltip>
                  </div>
                  <div className="filter_button">
                    For Private Customers
                    <Tooltip title="The loading meter is a unit of measurement for the loading area required by packages. A loading meter corresponds to one meter of the loading space of a truck in length when using the standard width of 2.40 m.">
                      <IconButton>
                        <ErrorIcon />
                      </IconButton>
                    </Tooltip>
                  </div>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="Tab_Panel_Data_Container">
          <TabPanel value={value} index={0}>
            <div className="tab_panel_data_inner">
              <div className={`tab_panel_data_card_outer `}>
                <div className="tab_panel_data_card">
                  <div className="card_review_container">
                    <img src={Logo}></img>
                    <div className="company_name_and_review">
                      <Tooltip title="The loading meter is a unit of measurement for the loading area required by packages. A loading meter corresponds to one meter of the loading space of a truck in length when using the standard width of 2.40 m.">
                        <IconButton>
                          <p>Mohsin Ali</p>
                          <div className="rating_star">
                            <span>4.9</span>
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarHalfIcon />
                          </div>
                        </IconButton>
                      </Tooltip>
                    </div>
                  </div>
                  <div className="card_description_container"></div>
                  <div className="card_price_booking_container">
                    <p className="price">€135.14</p>
                    <Tooltip title="The loading meter is a unit of measurement for the loading area required by packages. A loading meter corresponds to one meter of the loading space of a truck in length when using the standard width of 2.40 m.">
                      <IconButton>
                        <p>excl. 19% VAT.</p>
                        <p>(€160.82 gross)</p>
                      </IconButton>
                    </Tooltip>
                    <Link onClick={activeDetail}>Details Of Booking</Link>
                  </div>
                </div>
                <div className="detailpkg">Mohsin</div>
              </div>
              <div className={`tab_panel_data_card_outer `}>
                <div className="tab_panel_data_card">
                  <div className="card_review_container">
                    <img src={Logo}></img>
                    <div className="company_name_and_review">
                      <Tooltip title="The loading meter is a unit of measurement for the loading area required by packages. A loading meter corresponds to one meter of the loading space of a truck in length when using the standard width of 2.40 m.">
                        <IconButton>
                          <p>Mohsin Ali</p>
                          <div className="rating_star">
                            <span>4.9</span>
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarHalfIcon />
                          </div>
                        </IconButton>
                      </Tooltip>
                    </div>
                  </div>
                  <div className="card_description_container"></div>
                  <div className="card_price_booking_container">
                    <p className="price">€135.14</p>
                    <Tooltip title="The loading meter is a unit of measurement for the loading area required by packages. A loading meter corresponds to one meter of the loading space of a truck in length when using the standard width of 2.40 m.">
                      <IconButton>
                        <p>excl. 19% VAT.</p>
                        <p>(€160.82 gross)</p>
                      </IconButton>
                    </Tooltip>
                    <Link onClick={activeDetail}>Details Of Booking</Link>
                  </div>
                </div>
                <div className="detailpkg">Mohsin</div>
              </div>
              <div className={`tab_panel_data_card_outer `}>
                <div className="tab_panel_data_card">
                  <div className="card_review_container">
                    <img src={Logo}></img>
                    <div className="company_name_and_review">
                      <Tooltip title="The loading meter is a unit of measurement for the loading area required by packages. A loading meter corresponds to one meter of the loading space of a truck in length when using the standard width of 2.40 m.">
                        <IconButton>
                          <p>Mohsin Ali</p>
                          <div className="rating_star">
                            <span>4.9</span>
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarHalfIcon />
                          </div>
                        </IconButton>
                      </Tooltip>
                    </div>
                  </div>
                  <div className="card_description_container"></div>
                  <div className="card_price_booking_container">
                    <p className="price">€135.14</p>
                    <Tooltip title="The loading meter is a unit of measurement for the loading area required by packages. A loading meter corresponds to one meter of the loading space of a truck in length when using the standard width of 2.40 m.">
                      <IconButton>
                        <p>excl. 19% VAT.</p>
                        <p>(€160.82 gross)</p>
                      </IconButton>
                    </Tooltip>
                    <Link onClick={activeDetail}>Details Of Booking</Link>
                  </div>
                </div>
                <div className="detailpkg">Mohsin</div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div className="tab_panel_data_inner">
              <div className={`tab_panel_data_card_outer `}>
                <div className="tab_panel_data_card">
                  <div className="card_review_container">
                    <img src={Logo}></img>
                    <div className="company_name_and_review">
                      <Tooltip title="The loading meter is a unit of measurement for the loading area required by packages. A loading meter corresponds to one meter of the loading space of a truck in length when using the standard width of 2.40 m.">
                        <IconButton>
                          <p>Mohsin Ali</p>
                          <div className="rating_star">
                            <span>4.9</span>
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarHalfIcon />
                          </div>
                        </IconButton>
                      </Tooltip>
                    </div>
                  </div>
                  <div className="card_description_container"></div>
                  <div className="card_price_booking_container">
                    <p className="price">€135.14</p>
                    <Tooltip title="The loading meter is a unit of measurement for the loading area required by packages. A loading meter corresponds to one meter of the loading space of a truck in length when using the standard width of 2.40 m.">
                      <IconButton>
                        <p>excl. 19% VAT.</p>
                        <p>(€160.82 gross)</p>
                      </IconButton>
                    </Tooltip>
                    <Link onClick={activeDetail}>Details Of Booking</Link>
                  </div>
                </div>
                <div className="detailpkg">Mohsin</div>
              </div>
              <div className={`tab_panel_data_card_outer `}>
                <div className="tab_panel_data_card">
                  <div className="card_review_container">
                    <img src={Logo}></img>
                    <div className="company_name_and_review">
                      <Tooltip title="The loading meter is a unit of measurement for the loading area required by packages. A loading meter corresponds to one meter of the loading space of a truck in length when using the standard width of 2.40 m.">
                        <IconButton>
                          <p>Mohsin Ali</p>
                          <div className="rating_star">
                            <span>4.9</span>
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarHalfIcon />
                          </div>
                        </IconButton>
                      </Tooltip>
                    </div>
                  </div>
                  <div className="card_description_container"></div>
                  <div className="card_price_booking_container">
                    <p className="price">€135.14</p>
                    <Tooltip title="The loading meter is a unit of measurement for the loading area required by packages. A loading meter corresponds to one meter of the loading space of a truck in length when using the standard width of 2.40 m.">
                      <IconButton>
                        <p>excl. 19% VAT.</p>
                        <p>(€160.82 gross)</p>
                      </IconButton>
                    </Tooltip>
                    <Link onClick={activeDetail}>Details Of Booking</Link>
                  </div>
                </div>
                <div className="detailpkg">Mohsin</div>
              </div>
              <div className={`tab_panel_data_card_outer `}>
                <div className="tab_panel_data_card">
                  <div className="card_review_container">
                    <img src={Logo}></img>
                    <div className="company_name_and_review">
                      <Tooltip title="The loading meter is a unit of measurement for the loading area required by packages. A loading meter corresponds to one meter of the loading space of a truck in length when using the standard width of 2.40 m.">
                        <IconButton>
                          <p>Mohsin Ali</p>
                          <div className="rating_star">
                            <span>4.9</span>
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarHalfIcon />
                          </div>
                        </IconButton>
                      </Tooltip>
                    </div>
                  </div>
                  <div className="card_description_container"></div>
                  <div className="card_price_booking_container">
                    <p className="price">€135.14</p>
                    <Tooltip title="The loading meter is a unit of measurement for the loading area required by packages. A loading meter corresponds to one meter of the loading space of a truck in length when using the standard width of 2.40 m.">
                      <IconButton>
                        <p>excl. 19% VAT.</p>
                        <p>(€160.82 gross)</p>
                      </IconButton>
                    </Tooltip>
                    <Link onClick={activeDetail}>Details Of Booking</Link>
                  </div>
                </div>
                <div className="detailpkg">Mohsin</div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div className="tab_panel_data_inner">
              <div className={`tab_panel_data_card_outer `}>
                <div className="tab_panel_data_card">
                  <div className="card_review_container">
                    <img src={Logo}></img>
                    <div className="company_name_and_review">
                      <Tooltip title="The loading meter is a unit of measurement for the loading area required by packages. A loading meter corresponds to one meter of the loading space of a truck in length when using the standard width of 2.40 m.">
                        <IconButton>
                          <p>Mohsin Ali</p>
                          <div className="rating_star">
                            <span>4.9</span>
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarHalfIcon />
                          </div>
                        </IconButton>
                      </Tooltip>
                    </div>
                  </div>
                  <div className="card_description_container"></div>
                  <div className="card_price_booking_container">
                    <p className="price">€135.14</p>
                    <Tooltip title="The loading meter is a unit of measurement for the loading area required by packages. A loading meter corresponds to one meter of the loading space of a truck in length when using the standard width of 2.40 m.">
                      <IconButton>
                        <p>excl. 19% VAT.</p>
                        <p>(€160.82 gross)</p>
                      </IconButton>
                    </Tooltip>
                    <Link onClick={activeDetail}>Details Of Booking</Link>
                  </div>
                </div>
                <div className="detailpkg">Mohsin</div>
              </div>
              <div className={`tab_panel_data_card_outer `}>
                <div className="tab_panel_data_card">
                  <div className="card_review_container">
                    <img src={Logo}></img>
                    <div className="company_name_and_review">
                      <Tooltip title="The loading meter is a unit of measurement for the loading area required by packages. A loading meter corresponds to one meter of the loading space of a truck in length when using the standard width of 2.40 m.">
                        <IconButton>
                          <p>Mohsin Ali</p>
                          <div className="rating_star">
                            <span>4.9</span>
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarHalfIcon />
                          </div>
                        </IconButton>
                      </Tooltip>
                    </div>
                  </div>
                  <div className="card_description_container"></div>
                  <div className="card_price_booking_container">
                    <p className="price">€135.14</p>
                    <Tooltip title="The loading meter is a unit of measurement for the loading area required by packages. A loading meter corresponds to one meter of the loading space of a truck in length when using the standard width of 2.40 m.">
                      <IconButton>
                        <p>excl. 19% VAT.</p>
                        <p>(€160.82 gross)</p>
                      </IconButton>
                    </Tooltip>
                    <Link onClick={activeDetail}>Details Of Booking</Link>
                  </div>
                </div>
                <div className="detailpkg">Mohsin</div>
              </div>
              <div className={`tab_panel_data_card_outer `}>
                <div className="tab_panel_data_card">
                  <div className="card_review_container">
                    <img src={Logo}></img>
                    <div className="company_name_and_review">
                      <Tooltip title="The loading meter is a unit of measurement for the loading area required by packages. A loading meter corresponds to one meter of the loading space of a truck in length when using the standard width of 2.40 m.">
                        <IconButton>
                          <p>Mohsin Ali</p>
                          <div className="rating_star">
                            <span>4.9</span>
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarHalfIcon />
                          </div>
                        </IconButton>
                      </Tooltip>
                    </div>
                  </div>
                  <div className="card_description_container"></div>
                  <div className="card_price_booking_container">
                    <p className="price">€135.14</p>
                    <Tooltip title="The loading meter is a unit of measurement for the loading area required by packages. A loading meter corresponds to one meter of the loading space of a truck in length when using the standard width of 2.40 m.">
                      <IconButton>
                        <p>excl. 19% VAT.</p>
                        <p>(€160.82 gross)</p>
                      </IconButton>
                    </Tooltip>
                    <Link onClick={activeDetail}>Details Of Booking</Link>
                  </div>
                </div>
                <div className="detailpkg">Mohsin</div>
              </div>
            </div>
          </TabPanel>
        </div>
      </div>
    </div>
  );
};

export default ForwarderThree;
