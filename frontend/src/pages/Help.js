import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import "../assets/sass/style.scss";
import Fragecard from "../assets/components/Fragecard";
import Hidearea from "../assets/components/Hidearea";

export default function Help() {
  return (
    <div className="help-body">
      <div className="help-header">
        <Container>
          <div className="help-header-content">
            <h4>Hilfe Center</h4>
            <h1>Wie können wir helfen?</h1>
            <div className="philosophy-buttons">
              <a className="freight-banner-button" href="#">
                für Versender
              </a>
              <a className="success-button" href="#">
                für Versender
              </a>
            </div>
          </div>
        </Container>
      </div>
      <div className="frage-body">
        <Container>
          <div className="frage-content">
            <div className="hidden-section">
              <Row>
                <div className="col-lg-4 col-md-6 col-12">
                  <h2>Vor dem Transport</h2>
                  <Hidearea />
                  <Hidearea />
                  <Hidearea />
                  <Hidearea />
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <h2>Vor dem Transport</h2>
                  <Hidearea />
                  <Hidearea />
                  <Hidearea />
                  <Hidearea />
                </div>
                <div className="col-lg-4 col-12">
                  <h2>Vor dem Transport</h2>
                  <Hidearea />
                  <Hidearea />
                  <Hidearea />
                </div>
              </Row>
            </div>
            <h2>Meine Frage ist nicht dabei</h2>
            <a className="freight-banner-button" href="#">
              für Versender
            </a>
            <div className="frage-cards">
              <Row>
                <div className="frage-card-content col-lg-4 col-md-6 col-12">
                  <Fragecard />
                </div>
                <div className="frage-card-content col-lg-4 col-md-6 col-12">
                  <Fragecard />
                </div>
                <div className="frage-card-content col-lg-4 col-md-6 col-12">
                  <Fragecard />
                </div>
              </Row>
            </div>
          </div>
        </Container>
      </div>
      <div className="noch-body">
        <Container>
          <form>
            <div className="noch-content">
              <Row>
                <div className="noch-text col-lg-6 col-md-6  col-12">
                  <h2>Noch Fragen?</h2>
                  <p>
                    Wir geben am Telefon keine Preisauskünfte. Nutzen Sie hierzu
                    unseren kostenlosen Versandkostenrechner! Alle anderen
                    Fragen und Anregungen beantworten wir gern per E-Mail oder
                    Telefon.{" "}
                  </p>
                  <div className="contact-list">
                    <Row>
                      <div className="contact-content col-lg-6  col-12">
                        <div className="contact-title">
                          Kontakt zu speditioncheck
                        </div>
                        <p>
                          Telefon: <a href="tel:+923069494981">+923069494981</a>
                        </p>
                        <p>
                          E-Mail:{" "}
                          <a href="mailto:waleed@codezbit.com">
                            waleed@codezbit.com
                          </a>
                        </p>
                      </div>
                      <div className="contact-content col-lg-6 col-12">
                        <div className="contact-title">Montag – Donnerstag</div>
                        <p>09:00 bis 12:00 Uhr</p>
                        <p>und 14:00 bis 17:00 Uhr</p>
                      </div>
                    </Row>
                    <Row>
                      <div className="contact-content col-lg-6 col-12"></div>
                      <div className="contact-content col-lg-6 col-12">
                        <div className="contact-title">Montag – Donnerstag</div>
                        <p>09:00 bis 12:00 Uhr</p>
                      </div>
                    </Row>
                  </div>
                </div>
                <div className="noch-input col-lg-6 col-md-6 col-12">
                  <Row>
                    <div className="hide hide-text col-12">
                      <p>Some fields are required to fill this form.</p>
                    </div>
                  </Row>
                  <Row>
                    <div className="input-content col-lg-6 col-12">
                      <label>
                        Name
                        <span>*</span>
                      </label>
                      <input type="text" />
                      <label className="hide">This field is required.</label>
                    </div>
                    <div className="input-content col-lg-6  col-12">
                      <label>
                        E-Mail
                        <span>*</span>
                      </label>
                      <input type="email" />
                      <label className="hide">This field is required.</label>
                    </div>
                  </Row>
                  <Row>
                    <div className="textarea col-12">
                      <label>
                        Ihre Nachricht an speditioncheck
                        <span>*</span>
                      </label>
                      <textarea rows="5"></textarea>
                      <label className="hide">This field is required.</label>
                    </div>
                  </Row>
                  <Row>
                    <div className="under-input col-12">
                      <i>
                        Der Schutz Ihrer Daten ist uns sehr wichtig. Darum geben
                        wir Ihre Daten nicht an Dritte weiter und verwenden sie
                        nur, um Ihnen zu antworten. Mit dem Absenden Ihrer
                        Anfrage erklären Sie sich mit der Verarbeitung Ihrer
                        angegebenen Daten zum Zweck der Bearbeitung Ihrer
                        Anfrage einverstanden [Mehr zum Datenschutz bei
                        speditioncheck]
                      </i>
                    </div>
                  </Row>
                  <Row>
                    <div className="button-input col-lg-4 col-md-4 col-sm-4">
                      <a className="freight-banner-button" href="#">
                        Send
                      </a>
                    </div>
                  </Row>
                </div>
              </Row>
            </div>
          </form>
        </Container>
      </div>
    </div>
  );
}
