import React from "react";
import SortTable from "../../assets/components/DashboardComponent/SortTable";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { Link } from "react-router-dom";
import DashBoardAboutCard from "../../assets/components/DashboardComponent/DashBoardAboutCard";
import PostsCrad from "../../assets/components/DashboardComponent/PostsCard";

const Dashboard = () => {
  return (
    <div className="dashboar_body_wrapper">
      <div className="dashboar_body_heading">
        <h1>Armaturenbrett</h1>
      </div>
      <div className="dashboard_about_cards">
        <div className="dashboard_about_cards_one">
      <DashBoardAboutCard title="Manager" desc="Tarife und Kunden online verwalten" />
      <DashBoardAboutCard title="Marktplatz" desc="Online Neukunden generieren" />
      </div>
      <div className="dashboard_about_cards_two">
      <DashBoardAboutCard title="SpeditionCheck4Du" desc="Im Handumdrehen zur Online-Weiterleitung" />
      <DashBoardAboutCard title="Verbinden" desc="Ihr virtuelles Weiterleitungsnetzwerk" />
      </div>
      </div>
      <div className="dashboard_posts_body">
      <div className="dashboard_posts_heading">
      <div className="dashboar_body_heading">
        <h1>Akademie | Lernen und sich inspirieren lassen</h1>
      </div>
      <div className="more_posts_heading">
        <p>MEHR BEITRÄGE</p>
      </div>
      </div>
      <div className="more-posts-body">
        <div className="dashboard_posts_video_guide_body">
          <div className="dashboard_posts_video_guide_content">
          <div className="dashboard_posts_video">
              <iframe
                src="https://www.youtube.com/embed/vlDzYIIOYmM"
                title="YouTube video"
                allowFullScreen
              ></iframe>
            </div>
            <div className="dashboard_posts_video_guide_text">
              <b>VIDEO-ANLEITUNG</b> | 10.10.2022
              <div className="dashboar_body_heading">
        <h4>Neue Benachrichtigungstypen</h4>
      </div>
      <div className="dashboard_posts_video_guide_desc">Bisher hatten Sie nur im Bereich der Zusatzleistungen im Tarif die Möglichkeit, Preisbenachrichtigungen zu erhalten und Ihren Kunden anzubieten. Die...
      </div>
      <a className="freight-banner-button" href="#">Sicht</a>
            </div>
          </div>
      </div>
      <div className="posts_cards">
      <PostsCrad title='Zahlungsmethode "Kreditkarte" aktivieren' desc="Von Anfang an können Ihre Kunden den Transport auf Rechnung oder per Vorkasse bezahlen. Darüber hinaus in Zusammenarbeit mit unserem..."/>
      <PostsCrad title='Activate "creadit card" payment method' desc="Right from the start your customers can pay for transport on account or in advance. Additionally, in cooperation with our..."/>
      <PostsCrad title='Activate "creadit card" payment method' desc="Right from the start your customers can pay for transport on account or in advance. Additionally, in cooperation with our..."/>
      <PostsCrad title='Activate "creadit card" payment method' desc="Right from the start your customers can pay for transport on account or in advance. Additionally, in cooperation with our..."/>
      </div>
      </div>
      </div>
      <div className="dashboard_home">
        <div className="dashboar_home_inner">
          <div className="home_table_container">
            <div className="sortable_table_header">
              <h3>Letzte Bestellungen</h3>
            </div>
            <SortTable />
          </div>
          <div className="new_broad_cast_card">
            <div className="new_broad_cast_card_inner">
              <h2 className="new_broad_cast_card_heading">Neue Sendung</h2>
              <p className="new_broad_cast_card_p">
                Starten Sie hier eine neue Suche Community Verified icon
              </p>
              <Link to="/home">
                <LocalShippingIcon />
                Transport jetzt buchen
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
