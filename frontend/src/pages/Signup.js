import React, { useState } from "react";
import Privateform from "../assets/components/Privateform";
import Commercialform from "../assets/components/Commercialform";
import Logo from "../assets/images/logo.png";
import "../assets/sass/style.scss";
import { Link, useNavigate } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const Signup = () => {
  const [formToggle, setformToggle] = useState(true);

  const disableformToggle = () => {
    setformToggle(false);
  };

  const navigate = useNavigate();

  const enableformToggle = () => {
    setformToggle(true);
  };

  return (
    <div className="auth-body d-flex">
      <div className="blank_screen_signup">
        <div>
          <p>Die beliebteste Versandseite Deutschlands</p>
          <button onClick={() => navigate("/")}>Geh zurück</button>
        </div>
      </div>
      <div className="auth_screen">
        {/* <div className="back_link_outer">
          <Link to="/">Geh zurück</Link>
        </div> */}
        <h1>
          <div className="logo">
            <img src={Logo} alt="signup logo" />
          </div>
        </h1>
        <div className="inner_body_signup">
          <h2 className="hello_heading">Hallo</h2>
          <h5 className="welcome_heading">Willkommen</h5>
          {/* <div className="logo">
            <img src={Logo} alt="signup logo" />
          </div>
          <div className="title">Hier registrieren</div>
          <div className="under_title ">
            <p>
              Kostenlos registrieren und Bestellungen verfolgen. Oder hast du
              schon eine Konto? <Link to="/Login">Hier anmelden</Link>
            </p>
          </div> */}
          <div className="radio_button_outer">
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              defaultValue={"Commercial"}
            >
              <FormControlLabel
                value="Commercial"
                control={<Radio />}
                label="Werbung"
                onChange={enableformToggle}
              />
              <FormControlLabel
                value="Private"
                control={<Radio />}
                label="Privatgelände"
                onChange={disableformToggle}
              />
            </RadioGroup>
          </div>

          {formToggle ? <Commercialform /> : <Privateform />}
        </div>
        <div className="auth_copyright_outer"></div>
      </div>
    </div>
  );
};

export default Signup;
