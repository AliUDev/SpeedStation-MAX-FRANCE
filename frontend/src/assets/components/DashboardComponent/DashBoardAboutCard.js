import React from "react";
import { Link } from "react-router-dom";

const DashBoardAboutCard = (props) => {
    const {title,desc} = props;

  return (
    <div className="dashborad_about_card_body">
        <div className="dashborad_about_card_content">
            <b>{title}</b>
            <div className="dashborad_about_card_desc">{desc}</div>
            {title==="Manager"?
             <div className="text-blue">die Info</div>
             :
             <div className="about-seek">
               <Link className="text-blue" to="/about">um</Link>
                <div className="between-line">|</div>
                <div className="text-blue">Rat suchen</div>
             </div>
             }
        </div>
    </div>
  );
};

export default DashBoardAboutCard;
