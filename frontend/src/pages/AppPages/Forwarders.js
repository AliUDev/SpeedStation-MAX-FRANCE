import React, { useState } from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Link } from "react-router-dom";
import Flag from "../../assets/images/Deutschland.png";
import Logo from "../../assets/images/logo.png";
import MenuItem from "@mui/material/MenuItem";
import SearchAble from "../../assets/components/SearchAble";
import SearchIcon from "@mui/icons-material/Search";

const Forwarders = () => {
  const [city, setCity] = useState("");
  const [pakagetype, setpakagetype] = useState("");

  const handleChange = (event) => {
    setCity(event.target.value);
  };
  const handlepackage = (event) => {
    setpakagetype(event.target.value);
  };
  return (
    <div className="forwareser_outer_container">
      <div></div>
      <div>
        <div className="forwareder_heading">
          <h1>Freight Forwarders</h1>
          <p>Compare and Book</p>
        </div>
        <div className="dropDowns_outer">
          <form>
            <div className="home_banner_input_container_outer">
              <div className="home_banner_selct_container">
                <Select
                  value={city}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value={"DE"}>Deutschland</MenuItem>
                  <MenuItem value={"AT"}>Österreich</MenuItem>
                  <MenuItem value={"CH"}>Schweiz</MenuItem>
                  <MenuItem value={"AL"}>Albanien</MenuItem>
                  <MenuItem value={"BE"}>Belgien</MenuItem>
                  <MenuItem value={"BA"}>Bosnien und Herzegowina</MenuItem>
                  <MenuItem value={"BG"}>Bulgarien</MenuItem>
                  <MenuItem value={"DK"}>Dänemark</MenuItem>
                  <MenuItem value={"EE"}>Estland</MenuItem>
                  <MenuItem value={"FE"}>Finnland</MenuItem>
                  <MenuItem value={"FR"}>Frankreich</MenuItem>
                  <MenuItem value={"GR"}>Griechenland</MenuItem>
                  <MenuItem value={"GB"}>Großbritannien</MenuItem>
                  <MenuItem value={"IE"}>Irland</MenuItem>
                  <MenuItem value={"IT"}>Italien</MenuItem>
                  <MenuItem value={"XK"}>Kosovo</MenuItem>
                  <MenuItem value={"HR"}>Kroatien</MenuItem>
                  <MenuItem value={"LV"}>Lettland</MenuItem>
                  <MenuItem value={"LI"}>Liechtenstein</MenuItem>
                  <MenuItem value={"LT"}>Litauen</MenuItem>
                  <MenuItem value={"LU"}>Luxemburg</MenuItem>
                  <MenuItem value={"MT"}>Malta</MenuItem>
                  <MenuItem value={"ME"}>Montenegro</MenuItem>
                  <MenuItem value={"NL"}>Niederlande</MenuItem>
                  <MenuItem value={"MK"}>Nordmazedonien</MenuItem>
                  <MenuItem value={"NO"}>Norwegen</MenuItem>
                  <MenuItem value={"PL"}>Polen</MenuItem>
                  <MenuItem value={"PT"}>Portugal</MenuItem>
                  <MenuItem value={"RO"}>Rumänien</MenuItem>
                  <MenuItem value={"SE"}>Schweden</MenuItem>
                  <MenuItem value={"RS"}>Serbien</MenuItem>
                  <MenuItem value={"SK"}>Slowakei</MenuItem>
                  <MenuItem value={"SI"}>Slowenien</MenuItem>
                  <MenuItem value={"IT"}>Spanien</MenuItem>
                  <MenuItem value={"CZ"}>Tschechien</MenuItem>
                  <MenuItem value={"TR"}>Türkei</MenuItem>
                  <MenuItem value={"HU"}>Ungarn</MenuItem>
                  <MenuItem value={"CY"}>Zypern</MenuItem>
                </Select>
              </div>
              <div className="home_banner_input_container">
                <label>Pick-up Location</label>
                <SearchAble />
              </div>
            </div>
            <div className="home_banner_input_container_outer">
              <div className="home_banner_selct_container">
                <Select
                  value={city}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value={"DE"}>Deutschland</MenuItem>
                  <MenuItem value={"AT"}>Österreich</MenuItem>
                  <MenuItem value={"CH"}>Schweiz</MenuItem>
                  <MenuItem value={"AL"}>Albanien</MenuItem>
                  <MenuItem value={"BE"}>Belgien</MenuItem>
                  <MenuItem value={"BA"}>Bosnien und Herzegowina</MenuItem>
                  <MenuItem value={"BG"}>Bulgarien</MenuItem>
                  <MenuItem value={"DK"}>Dänemark</MenuItem>
                  <MenuItem value={"EE"}>Estland</MenuItem>
                  <MenuItem value={"FE"}>Finnland</MenuItem>
                  <MenuItem value={"FR"}>Frankreich</MenuItem>
                  <MenuItem value={"GR"}>Griechenland</MenuItem>
                  <MenuItem value={"GB"}>Großbritannien</MenuItem>
                  <MenuItem value={"IE"}>Irland</MenuItem>
                  <MenuItem value={"IT"}>Italien</MenuItem>
                  <MenuItem value={"XK"}>Kosovo</MenuItem>
                  <MenuItem value={"HR"}>Kroatien</MenuItem>
                  <MenuItem value={"LV"}>Lettland</MenuItem>
                  <MenuItem value={"LI"}>Liechtenstein</MenuItem>
                  <MenuItem value={"LT"}>Litauen</MenuItem>
                  <MenuItem value={"LU"}>Luxemburg</MenuItem>
                  <MenuItem value={"MT"}>Malta</MenuItem>
                  <MenuItem value={"ME"}>Montenegro</MenuItem>
                  <MenuItem value={"NL"}>Niederlande</MenuItem>
                  <MenuItem value={"MK"}>Nordmazedonien</MenuItem>
                  <MenuItem value={"NO"}>Norwegen</MenuItem>
                  <MenuItem value={"PL"}>Polen</MenuItem>
                  <MenuItem value={"PT"}>Portugal</MenuItem>
                  <MenuItem value={"RO"}>Rumänien</MenuItem>
                  <MenuItem value={"SE"}>Schweden</MenuItem>
                  <MenuItem value={"RS"}>Serbien</MenuItem>
                  <MenuItem value={"SK"}>Slowakei</MenuItem>
                  <MenuItem value={"SI"}>Slowenien</MenuItem>
                  <MenuItem value={"IT"}>Spanien</MenuItem>
                  <MenuItem value={"CZ"}>Tschechien</MenuItem>
                  <MenuItem value={"TR"}>Türkei</MenuItem>
                  <MenuItem value={"HU"}>Ungarn</MenuItem>
                  <MenuItem value={"CY"}>Zypern</MenuItem>
                </Select>
              </div>
              <div className="home_banner_input_container">
                <label>Delivery Location</label>
                <SearchAble />
              </div>
            </div>
            <div className="home_banner_input_container_outer company_type_selct_outer">
              <div className="home_banner_selct_container company_type_selct">
                <label>They are ?</label>
                <Select
                  value={pakagetype}
                  onChange={handlepackage}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="" className="home_banner_menuitem">
                    None
                  </MenuItem>
                  <MenuItem value={10} className="home_banner_menuitem">
                    Private
                  </MenuItem>
                  <MenuItem value={20} className="home_banner_menuitem">
                    Commercial
                  </MenuItem>
                </Select>
              </div>
            </div>
            <div className="search_icon_outer">
              <Link to="1">
                <SearchIcon className="search_icon"></SearchIcon>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Forwarders;
