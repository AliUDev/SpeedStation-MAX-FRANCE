import React from "react";
import { Container, Row } from "react-bootstrap";
import Digitalcard from "../assets/components/Digitalcard";
import Successcard from "../assets/components/Successcard";
import Digitalvolt from "../assets/components/Digitalvolt";
import Manager from "../assets/images/product-manager-primary.png";
const Freight = () => {
  return (
    <div className="freight-body">
      <div className="freight-banner">
        <Container>
          <div className="freight-banner-content">
            <h1>Ihre digitale Spedition online</h1>
            <p>Der Werkzeugkasten für den digitalen Vertrieb</p>
            <a className="freight-banner-button" href="#">
              Jetzt kostenfrei testen
            </a>
            <div className="freight-banner-video ratio ratio-21x9">
              <iframe
                src="https://www.youtube.com/embed/vlDzYIIOYmM"
                title="YouTube video"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </Container>
      </div>
      <div className="freight-digital">
        <Container>
          <div className="freight-digital-content">
            <h2>Software-Lösungen für digitale Speditionen</h2>
            <p>
              Digitalisieren Sie Ihr Angebotswesen und die Kommunikation mit
              Ihren Kunden{" "}
            </p>
            <Row>
              <div className="col-lg-3 col-md-6 col-12 my-2">
                <Digitalcard />
              </div>
              <div className="col-lg-3 col-md-6 col-12 my-2">
                <Digitalcard />
              </div>
              <div className="col-lg-3 col-md-6 col-12 my-2">
                <Digitalcard />
              </div>
              <div className="col-lg-3 col-md-6 col-12 my-2">
                <Digitalcard />
              </div>
            </Row>
          </div>
        </Container>
      </div>

      <div className="success-story">
        <Container>
          <div className="success-story-content">
            <h2>Success Story</h2>
            <p>Eine Spedition erfolgreich digitalisieren</p>
            <p> am Beispiel der FME Frachtmanagement Europe GmbH</p>
            <Row>
              <div className="col-lg-4  col-12">
                <Successcard
                  title="30"
                  subheading="Minutes"
                  para="dauert die Installation und Integration von speditioncheck4You auf der FME-Website. speditioncheck funktioniert Plug & Play mit Ihrem TMS und verursacht keinerlei IT-Aufwand."
                />
              </div>
              <div className="col-lg-4  col-12">
                <Successcard
                  title="30"
                  subheading="Minutes"
                  para="dauert die Installation und Integration von speditioncheck4You auf der FME-Website. speditioncheck funktioniert Plug & Play mit Ihrem TMS und verursacht keinerlei IT-Aufwand."
                />
              </div>
              <div className="col-lg-4 col-12">
                <Successcard
                  title="30"
                  subheading="Minutes"
                  para="dauert die Installation und Integration von speditioncheck4You auf der FME-Website. speditioncheck funktioniert Plug & Play mit Ihrem TMS und verursacht keinerlei IT-Aufwand."
                />
              </div>
            </Row>
            <a className="success-button" href="#">
              Jetzt kostenfrei testen
            </a>
          </div>
        </Container>
      </div>
      <div className="digital-volt">
        <Container>
          <div className="digital-volt-content">
            <h2>Digital Story</h2>
            <p>Eine Spedition erfolgreich digitalisieren</p>
            <p> am Beispiel der FME Frachtmanagement Europe GmbH</p>
            <Row>
              <div className="col-lg-4  col-12">
                <Digitalvolt
                  title="30"
                  subheading="Minutes"
                  para="dauert die Installation und Integration von speditioncheck4You auf der FME-Website. speditioncheck funktioniert Plug & Play mit Ihrem TMS und verursacht keinerlei IT-Aufwand."
                />
              </div>
              <div className="col-lg-4 -6 col-12">
                <Digitalvolt
                  title="30"
                  subheading="Minutes"
                  para="dauert die Installation und Integration von speditioncheck4You auf der FME-Website. speditioncheck funktioniert Plug & Play mit Ihrem TMS und verursacht keinerlei IT-Aufwand."
                />
              </div>
              <div className="col-lg-4 col-12">
                <Digitalvolt
                  title="30"
                  subheading="Minutes"
                  para="dauert die Installation und Integration von speditioncheck4You auf der FME-Website. speditioncheck funktioniert Plug & Play mit Ihrem TMS und verursacht keinerlei IT-Aufwand."
                />
              </div>
            </Row>
          </div>
        </Container>
      </div>
      <div className="starten-body">
        <Container>
          <div className="starten-content">
            <h3>Starten Sie die Digitalisierung Ihrer Spedition</h3>
            <p>
              und sichern sich den Zugang zu tausenden Verladern auf
              speditioncheck.de
            </p>
            <div className="starten-card-content">
              <Row>
                <div className="col-lg-4 col-12"></div>
                <div className="order-card col-lg-4 col-12">
                  <a className="success-button" href="#">
                    Demo-Account
                  </a>
                  <p>oder rufen Sie uns an unter</p>
                  <p>0361 / 380 300 86</p>
                </div>
                <div className="col-lg-4 col-12"></div>
              </Row>
            </div>
          </div>
        </Container>
      </div>
      <div className="before-footer-body">
        <Container>
          <div className="before-footer-content">
            <Row>
              <div className="before-footer-tag col-lg-3 col-md-6 col-12">
                <img src={Manager} />
                <div className="before-footer-text">
                  <h5>1.500 Versender</h5>
                  <p>pro Tag auf speditioncheck</p>
                </div>
              </div>
              <div className="before-footer-tag col-lg-3 col-md-6 col-12">
                <img src={Manager} />
                <div className="before-footer-text">
                  <h5>1.500 Versender</h5>
                  <p>pro Tag auf speditioncheck</p>
                </div>
              </div>
              <div className="before-footer-tag col-lg-3 col-md-6 col-12">
                <img src={Manager} />
                <div className="before-footer-text">
                  <h5>1.500 Versender</h5>
                  <p>pro Tag auf speditioncheck</p>
                </div>
              </div>
              <div className="before-footer-tag col-lg-3 col-md-6 col-12">
                <img src={Manager} />
                <div className="before-footer-text">
                  <h5>1.500 Versender</h5>
                  <p>pro Tag auf speditioncheck</p>
                </div>
              </div>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Freight;
