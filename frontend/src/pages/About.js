import React from "react";
import { Container, Row } from "react-bootstrap";
import "../assets/sass/style.scss";
import Trees from "../assets/images/trees.jpg";
import Job from "../assets/images/job-postings.png";
import Outreachcard from "../assets/components/Outreachcard";

export default function About() {
  return (
    <div className="about-us-body">
      <div className="about-us-header">
        <Container>
          <div className="about-us-header-content">
            <h1>Wer ist speditioncheck?</h1>
            <h4>Wir über uns</h4>
          </div>
        </Container>
      </div>
      <div className="philosophy-body">
        <Container>
          <div className="philosophy-content">
            <Row>
              <div className="philosophy-theory col-lg-6 col-md-6 col-12">
                <h2>Philosophie</h2>
                <h5>Jedem das, was er am besten kann</h5>
                <p>
                  speditioncheck.de ist der erste unabhängige Preisvergleich für
                  Transporte. Wir ermöglichen Versendern innerhalb von Sekunden
                  einen Überblick über die Angebote am Markt zu erhalten und das
                  am besten passende Angebot (das niemals „unseres“ ist!) zu
                  buchen. Das macht kein anderer.
                </p>
                <p>
                  Wir glauben, dass das wirkliche Disruptionspotential in der
                  Logistik nicht darin besteht, ein offline-Geschäftsmodell 1:1
                  in die digitale Welt zu überführen. Wir glauben, dass
                  Disruption dort entsteht, wo Wertschöpfungsketten neu gedacht
                  werden. Und wir glauben, dass der größte Wert dann entsteht,
                  wenn alle Beteiligten das tun, was sie am besten können.
                </p>
              </div>
              <div className="philosophy-theory col-lg-6 col-md-6 col-12">
                <h2>Philosophie</h2>
                <h5>Jedem das, was er am besten kann</h5>
                <p>
                  Mit speditioncheck haben wir aber nicht nur eine Vergleichs-
                  und Buchungsplattform für Versender geschaffen, sondern auch
                  einen digitalen Vertriebskanal für Speditionen.
                  speditioncheck.de hilft Speditionen egal welcher Größe, online
                  Sichtbarkeit zu generieren. Damit positionieren wir uns klar
                  als Partner der Speditionen, der ihnen Geschäft generieren und
                  nicht wegnehmen will. Dies bringt große Vorteile gerade für
                  Speditionen ohne „ganz großen Namen“, da diese so gut wie
                  nicht vom stärker werdenden online-Geschäft profitieren.
                  Voraussetzung für eine erfolgreiche Partnerschaft mit
                  speditioncheck.de ist dabei, dass die Speditionen dem
                  Leistungsgedanken folgen und zuversichtlich sind, mit Ihrem
                  Preis-Leistungs-Angebot am transparenten Markt zu bestehen.
                </p>
              </div>
            </Row>
          </div>
          <div className="philosophy-umet">
            <div className="col-lg-6 col-12">
              <img src={Trees} />
            </div>
            <div className="philosophy-umet-content col-lg-6 col-12">
              <h2>Für die Umwelt</h2>
              <p>
                Der Klimawandel und seine Folgen sind Tatsachen und gelten als
                die größten Herausforderungen des 21. Jahrhunderts. Wir sind uns
                unserer Verantwortung in einer vergleichsweise CO2-intensiven
                Branche bewusst: Der Güterverkehr in Deutschland ist jedes Jahr
                für einen CO2-Ausstoß von ca. 10 Millionen Tonnen
                verantwortlich.
              </p>
              <div className="philosophy-buttons">
                <a className="freight-banner-button" href="#">
                  Jetzt kostenfrei testen
                </a>
                <a className="success-button" href="#">
                  Jetzt kostenfrei testen
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="behind-screens">
        <Container>
          <div className="behind-screens-content">
            <h2>Behind the screens</h2>
            <h5>Das beste Team der Welt</h5>
            <p>
              Angefangen hat alles 2016 mit zwei Gründern (Felix und Steven) und
              einem externen Programmierer (Axel). Heute zählt das Team über 20
              begeisterte Verrückte aus allen Bereichen.
            </p>
          </div>
        </Container>
      </div>
      <div className="traumjob-body">
        <Container>
          <div className="traumjob-content">
            <Row>
              <div className="col-12 col-lg-6 col-md-12">
                <img src={Job} />
              </div>
              <div className="traumjob-text col-lg-6 col-12">
                <h2>Für die Umwelt</h2>
                <h4>Auf der Suche nach Talenten wie dir</h4>
                <p>
                  Der Klimawandel und seine Folgen sind Tatsachen und gelten als
                  die größten Herausforderungen des{" "}
                </p>
                <div className="philosophy-buttons">
                  <a className="freight-banner-button" href="#">
                    Jetzt kostenfrei testen
                  </a>
                  <a className="success-button" href="#">
                    Jetzt kostenfrei testen
                  </a>
                </div>
              </div>
            </Row>
          </div>
        </Container>
      </div>
      <div className="outreach-body">
        <Container>
          <div className="outreach-content">
            <h2>Outreach</h2>
            <h5>Neues im Presse-Bereich</h5>
            <div className="outreach-card-content">
              <Row>
                <div className="col-12 col-md-6 col-lg-4">
                  <Outreachcard />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <Outreachcard />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <Outreachcard />
                </div>
              </Row>
            </div>
            <div className="philosophy-buttons">
              <a className="freight-banner-button" href="#">
                Jetzt kostenfrei testen
              </a>
              <a className="success-button" href="#">
                Jetzt kostenfrei testen
              </a>
            </div>
            <p>
              unser Presse-Kontakt ist{" "}
              <a href="mailto:waleed@codezbit.com" target="_blank">
                Mareen Eichinger | macheete
              </a>
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
}
