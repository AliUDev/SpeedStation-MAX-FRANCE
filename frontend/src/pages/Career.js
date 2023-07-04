import React from "react";
import { Container, Row } from "react-bootstrap";
import "../assets/sass/style.scss";
import Kultercard from "../assets/components/Kultercard";
import Cake from "../assets/images/cake.jpg";
import Job from "../assets/images/job-application-process.png";
import Location from "../assets/images/icon-location.png";
import Stars from "../assets/images/stars-4-5.png";
import Profile from "../assets/images/profile.jpeg";
import Benefitcard from "../assets/components/Benefitcard";

export default function About() {
  return (
    <div className="career-body">
      <div className="career-header">
        <Container>
          <div className="career-header-content">
            <h1>Du willst etwas bewegen</h1>
            <h4>Join the team</h4>
            <a className="freight-banner-button" href="#">
              Jetzt kostenfrei testen
            </a>
          </div>
        </Container>
      </div>
      <div className="career-pmria">
        <Container>
          <div className="career-pmria-content">
            <h2>Karriere bei speditioncheck</h2>
            <h5>Lass uns gemeinsam was bewegen!</h5>
            <div className="career-pmria-text">
              <Row>
                <div className="career-pmria-text-content col-12 col-lg-6 col-md-6">
                  <p>
                    Logistik ist die Lebensader der Realwirtschaft. Sie versorgt
                    uns mit allem, was wir brauchen und was uns umgibt. Während
                    die Logistik nach wie vor unglaubliches leistet, sind wir
                    der Auffassung, dass vieles davon effizienter und smarter
                    geht. Und zwar mit innovativen, digitalen Lösungen. Genau
                    diese Lösungen stellt speditioncheck bereit. Aber:
                    speditioncheck erfindet dabei das Rad nicht neu.
                  </p>
                </div>
                <div className="career-pmria-text-content col-12 col-lg-6 col-md-6">
                  <p>
                    Logistik ist die Lebensader der Realwirtschaft. Sie versorgt
                    uns mit allem, was wir brauchen und was uns umgibt. Während
                    die Logistik nach wie vor unglaubliches leistet, sind wir
                    der Auffassung, dass vieles davon effizienter und smarter
                    geht. Und zwar mit innovativen, digitalen Lösungen. Genau
                    diese Lösungen stellt speditioncheck bereit. Aber:
                    speditioncheck erfindet dabei das Rad nicht neu.
                  </p>
                </div>
              </Row>
            </div>
            <i>
              Eine Unternehmenskultur entsteht nicht durch das, was man sagt,
              sondern durch das, was man tut.
            </i>
            <i>Lasse Landt, Geschäftsführer der speditioncheck GmbH</i>
          </div>
        </Container>
      </div>
      <div className="kulter">
        <Container>
          <div className="kulter-content">
            <h2>Was uns ausmacht</h2>
            <h5>Kultur bei speditioncheck</h5>
          </div>
        </Container>
      </div>
      <div className="kulter-cards">
        <div className="kulter-card-body">
          <Row>
            <div className="col-lg-6 col-md-6 col-12">
              <Kultercard />
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <Kultercard />
            </div>
          </Row>
        </div>
        <div className="kulter-card-body">
          <Row>
            <div className="col-lg-6 col-md-6 col-12">
              <Kultercard />
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <Kultercard />
            </div>
          </Row>
        </div>
        <div className="kulter-card-body">
          <Row>
            <div className="col-lg-6 col-md-6 col-12">
              <Kultercard />
            </div>
          </Row>
        </div>
      </div>
      <div className="meetup">
        <Container>
          <div className="meetup-content">
            <h2>Meetups, Team-Retreats & Co.</h2>
            <p>Impressionen der letzten Events</p>
            <div className="meetup-images">
              <Row>
                <div className="meetup-image col-lg-3 col-md-6  col-12">
                  <img src={Cake} />
                </div>
                <div className="meetup-image col-lg-3 col-md-6  col-12">
                  <img src={Cake} />
                </div>
                <div className="meetup-image col-lg-3 col-md-6 col-12">
                  <img src={Cake} />
                </div>
                <div className="meetup-image col-lg-3 col-md-6 col-12">
                  <img src={Cake} />
                </div>
              </Row>
            </div>
            <div className="meetup-images">
              <Row>
                <div className="meetup-image col-lg-3 col-md-6  col-12">
                  <img src={Cake} />
                </div>
                <div className="meetup-image col-lg-3 col-md-6  col-12">
                  <img src={Cake} />
                </div>
                <div className="meetup-image col-lg-3 col-md-6 col-12">
                  <img src={Cake} />
                </div>
                <div className="meetup-image col-lg-3 col-md-6 col-12">
                  <img src={Cake} />
                </div>
              </Row>
            </div>
            <div className="meetup-images">
              <Row>
                <div className="meetup-image col-lg-3 col-md-6  col-12">
                  <img src={Cake} />
                </div>
                <div className="meetup-image col-lg-3 col-md-6  col-12">
                  <img src={Cake} />
                </div>
                <div className="meetup-image col-lg-3 col-md-6 col-12">
                  <img src={Cake} />
                </div>
                <div className="meetup-image col-lg-3 col-md-6 col-12">
                  <img src={Cake} />
                </div>
              </Row>
            </div>
          </div>
        </Container>
      </div>
      <div className="job-application">
        <Container>
          <div className="job-application-content">
            <h2>4 Schritte in die Zukunft</h2>
            <h4>Unser Bewerbungsprozess</h4>
            <p>
              Bei speditioncheck durchlaufen Bewerbende vier Schritte. So wollen
              wir sicherstellen, dass du uns gut kennenlernst – und wir dich
              auch. Der Fit zum Team und unserer Unternehmenskultur ist uns
              besonders wichtig. Daher wirst du während des Prozesses einige
              Teammitglieder aus den unterschiedlichen Abteilungen kennenlernen.
            </p>
            <img src={Job} />
          </div>
        </Container>
      </div>
      <div className="team-pamrya">
        <Container>
          <div className="team-pamrya-content">
            <h2>Deine Karriere beginnt hier</h2>
            <h4>Offene Stellen bei #teamspeditioncheck</h4>
            <div className="home-office-card">
              <div className="office-content">
                <a href="#">
                  <p>Initiativ-Bewerbung</p>
                </a>
                <div className="home-office">
                  <div className="home-office-content">
                    <img src={Location} />
                    <p>Leipzig Lindenau</p>
                  </div>
                  <div className="home-office-content">
                    <img src={Location} />
                    <p>Leipzig Lindenau</p>
                  </div>
                  <div className="home-office-content">
                    <img src={Location} />
                    <p>Leipzig Lindenau</p>
                  </div>
                </div>
                <div className="success-button">
                  <a href="#">Erzähl mir mehr!</a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="stars-body">
        <Container>
          <div className="stars-content">
            <img src={Stars} />
            <h2>4,5 Sterne bei kununu</h2>
            <p>
              100% würden speditioncheck als Arbeitgeber weiterempfehlen. Schau
              dir anonyme Bewertungen von echten Mitarbeitenden an.
            </p>
            <a className="freight-banner-button" href="#">
              Jetzt kostenfrei testen
            </a>
          </div>
        </Container>
      </div>
      <div className="benefits-body">
        <Container>
          <div className="benefits-content">
            <h2>Das hast du davon</h2>
            <h4>Deine Benefits bei speditioncheck</h4>
            <div className="benefits-cards-content">
              <div className="benefits-cards">
                <Row>
                  <div className="col-lg-6 col-md-6 col-12">
                    <Benefitcard />
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <Benefitcard />
                  </div>
                </Row>
              </div>
              <div className="benefit-cards">
                <Row>
                  <div className="col-lg-6 col-md-6 col-12">
                    <Benefitcard />
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <Benefitcard />
                  </div>
                </Row>
              </div>
              <div className="benefit-cards">
                <Row>
                  <div className="col-lg-6 col-md-6 col-12">
                    <Benefitcard />
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <Benefitcard />
                  </div>
                </Row>
              </div>
              <div className="benefit-cards">
                <Row>
                  <div className="col-lg-6 col-md-6 col-12">
                    <Benefitcard />
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <Benefitcard />
                  </div>
                </Row>
              </div>
              <div className="benefit-cards">
                <Row>
                  <div className="col-lg-6 col-md-6 col-12">
                    <Benefitcard />
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <Benefitcard />
                  </div>
                </Row>
              </div>
              <div className="benefit-cards">
                <Row>
                  <div className="col-lg-6 col-md-6 col-12">
                    <Benefitcard />
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <Benefitcard />
                  </div>
                </Row>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="person-body">
        <div className="person-body-content">
          <Container>
            "
            <div className="person-content">
              <img src={Profile} />
              <h2>Hi, ich bin Talent-Scout Julia</h2>
              <p>
                Du hast Fragen zu unseren Stellenangeboten oder interessierst
                Dich für eine Mitarbeit in unserem Team? Dann freue ich mich,
                von Dir zu hören.
              </p>
              <a
                className="freight-banner-button"
                href="mailto:waleed@codezbit.com"
              >
                E-MAIL ME
              </a>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}
