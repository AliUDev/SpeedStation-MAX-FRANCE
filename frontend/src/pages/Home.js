import React, { useEffect, useState } from "react";
import Footer from "../assets/components/Footer";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import aproved from "../assets/images/approved-icon.svg";
import successIcon from "../assets/images/success-icon.png";
import frame from "../assets/images/Frame.svg";
import cardImage from "../assets/images/card-bottom.png";
import cardImagetop from "../assets/images/card-top.png";
import cardListImage1 from "../assets/images/cards/Vector-6.png";
import cardListImage2 from "../assets/images/cards/bi_list-ol.png";
import cardListImage3 from "../assets/images/cards/green.png";
import Geocode from "react-geocode";

import SearchIcon from "@mui/icons-material/Search";
import CheckIcon from "@mui/icons-material/Check";

import turkey from "../assets/images/turkey.png";
import france from "../assets/images/france.png";
import dutch from "../assets/images/dutch.png";
import itly from "../assets/images/itly.png";
import britan from "../assets/images/britan.png";
import spain from "../assets/images/spain.png";

import "../assets/sass/Style2.scss";
import { Link, useNavigate } from "react-router-dom";
import NavbarLogout from "./NavbarLogout";
import SliderComp from "../assets/components/SliderComp";

import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";

import TestimonialSlider from "../assets/components/TestimonialSlider";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import PaymentModal from "../assets/components/PaymentModal";
import Autocomplete from "react-google-autocomplete";
import haversine from "haversine-distance";

import ReactFlagsSelect from "react-flags-select";

const GOOGLE_MAPS_API_KEY = "AIzaSyCEKoQQxGs6mrvHRSPAhLfbMFmquVYY20c";

const europeCountries = [
  "DE",
  "AT",
  "CH",
  "AL",
  "BE",
  "BA",
  "BG",
  "DK",
  "EE",
  "FI",
  "FR",
  "GR",
  "GB",
  "IE",
  "IT",
  "XK",
  "HV",
  "LT",
  "LI",
  "LU",
  "MT",
  "ME",
  "NL",
  "MK",
  "NO",
  "PL",
  "PT",
  "RO",
  "SE",
  "RS",
  "SK",
  "SI",
  "ES",
  "CZ",
  "TR",
  "UH",
  "CY",
];

export default function Home() {
  const [pickUpLocation, setPickUpLocation] = useState("DE");
  const [pickUpAddress, setPickUpAddress] = useState("");
  const [deliveryLocation, setDeliveryUpLocation] = useState("DE");
  const [deliveryAddress, setDeliveryUpAddress] = useState("");
  const [deliveryType, setDeliveryType] = useState("Bussiness");
  const [show, setShow] = useState(false);
  const [lat1, setLat1] = useState({});
  const [lat2, setLat2] = useState({});

  const userData = useSelector((state) => state.auth.user);

  let currentDate = dayjs(new Date()).format("YYYY-MM-DD");
  const isAuth = useSelector((state) => state.auth.isAuth);

  useEffect(() => {
    if (isAuth && userData.isPaid && currentDate > userData.planExpiryDate) {
      setShow(true);
    }
  }, [currentDate, isAuth, userData.isPaid, userData.planExpiryDate]);

  const navigate = useNavigate();

  const handleDeliveryForm = (event) => {
    event.preventDefault();
    let distance = haversine(lat1, lat2);

    navigate("/charge", {
      state: {
        pickUpLocation,
        deliveryLocation,
        deliveryAddress,
        pickUpAddress,
        distance: (distance / 1000).toFixed(2),
        deliveryType,
      },
    });
  };

  Geocode.setApiKey(GOOGLE_MAPS_API_KEY);

  const handleGetPickUpLocation = (place) => {
    setPickUpAddress(place.address_components[0].long_name);
    console.log(place);
    Geocode.fromAddress(place.formatted_address).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        setLat1({ lat: lat, lng: lng });
      },
      (error) => {
        console.error(error);
      }
    );
  };

  const handleGetDeliveryLocation = (place) => {
    setDeliveryUpAddress(place.address_components[0].long_name);
    Geocode.fromAddress(place.formatted_address).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        setLat2({ lat: lat, lng: lng });
      },
      (error) => {
        console.error(error);
      }
    );
  };

  return (
    <>
      <PaymentModal show={show} setShow={setShow} />
      <div>
        <NavbarLogout />
        <div className="home_banner">
          <div className="home_banner_overlay">
            <div className="home_banner_content">
              <h1 className="text-center">
                Speditionsversand vergleichen & buchen 24/7
              </h1>
              <p className="pb-5 text-center font-weight-200">
                Per Mausklick alles bewegen können
              </p>
              <div className="dropDowns_outer">
                <form onSubmit={(event) => handleDeliveryForm(event)}>
                  <div className="home_banner_input_container_outer">
                    <div className="home_banner_selct_container">
                      <ReactFlagsSelect
                        className="react-flag-select-dropdown-styling"
                        selected={pickUpLocation}
                        countries={europeCountries}
                        onSelect={(code) => setPickUpLocation(code)}
                        showSelectedLabel={false}
                      />
                    </div>
                    <div className="home_banner_input_container">
                      <label>
                        <FmdGoodOutlinedIcon color="success" /> Anlieferung
                      </label>
                      <Autocomplete
                        apiKey={GOOGLE_MAPS_API_KEY}
                        placeholder={"Code eingeben"}
                        required
                        options={{
                          componentRestrictions: { country: pickUpLocation },
                        }}
                        types={["address"]}
                        fields={[
                          "postal_code",
                          "address_components",
                          "geometry",
                          "icon",
                          "name",
                        ]}
                        onPlaceSelected={(place) => {
                          handleGetPickUpLocation(place);
                        }}
                      />
                    </div>
                  </div>
                  <div className="home_banner_input_container_outer">
                    <div className="home_banner_selct_container">
                      <ReactFlagsSelect
                        className="react-flag-select-dropdown-styling"
                        selected={deliveryLocation}
                        onSelect={(code) => setDeliveryUpLocation(code)}
                        countries={europeCountries}
                        showSelectedLabel={false}
                      />
                    </div>
                    <div className="home_banner_input_container">
                      <label>
                        <FmdGoodOutlinedIcon className="text-danger" /> Abholung
                      </label>
                      <Autocomplete
                        apiKey={GOOGLE_MAPS_API_KEY}
                        placeholder={"suchen"}
                        required
                        types={["address"]}
                        fields={[
                          "address_components",
                          "geometry",
                          "icon",
                          "name",
                        ]}
                        options={{
                          componentRestrictions: { country: deliveryLocation },
                        }}
                        onPlaceSelected={(place) => {
                          handleGetDeliveryLocation(place);
                        }}
                      />
                    </div>
                  </div>
                  <div className="home_banner_input_container_outer company_type_selct_outer">
                    <div className="home_banner_selct_container company_type_selct">
                      <label>
                        <PermIdentityOutlinedIcon className="color-user-icon" />{" "}
                        Sie sind?
                      </label>
                      <Select
                        value={deliveryType}
                        onChange={(event) =>
                          setDeliveryType(event.target.value)
                        }
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                      >
                        <MenuItem
                          value={"Bussiness"}
                          className="home_banner_menuitem"
                        >
                          Aushvahi
                        </MenuItem>
                        <MenuItem
                          value={"Private"}
                          className="home_banner_menuitem"
                        >
                          Privat
                        </MenuItem>
                      </Select>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn search_icon_outer border-0"
                  >
                    <SearchIcon className="search_icon" /> Suchen
                  </button>
                </form>
              </div>
              <div className="characteristics_type">
                <div className="item">
                  <img
                    className="approved_icon_home_banner"
                    src={aproved}
                    alt="aproved"
                  />
                  <div className="item_content">
                    <p className="font-weight-700">500+ Speditionen</p>
                  </div>
                </div>
                <div className="item">
                  <img
                    className="sucess_icon_home_banner"
                    src={successIcon}
                    alt="aproved"
                  />
                  <div className="item_content">
                    <p className="font-weight-700">Kostenlos & unverbindlich</p>
                  </div>
                </div>
                <div className="item">
                  <img src={frame} alt="aproved" />
                  <div className="item_content">
                    <p className="font-weight-700">Schnell & sicher buchen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Pakage_Section">
          <div className="Pakage_Section_inner">
            <div className="col-6 pakage_Detail_container">
              <div>
                <p className="package_section_digital">Mach's Digital</p>
              </div>
              <h3>Ihr online Transport portal</h3>
              <p>
                Speditioncheck ist Ihr unabhängiges Vergleichs- und
                Buchungsportal. <br /> Erhalten Sie als Privat- oder
                Gewerbekunde innerhalb weniger Sekunden online Transportangebote
                von zuverlässigen Speditionsunternehmen. <br /> Wählen Sie
                direkt und unkompliziert das für Sie am besten geeignete Angebot
                aus und buchen Sie bequem Ihren Transport! Unser Portal stellt
                für Sie sicher, dass Ihr Transport so effizient wie möglich
                gestaltet wird. <br />
                <br /> Speditionen können über unser Portal Ihre Tarife anbieten
                um mit kleinem Aufwand online Aufträge zu erhalten. Wir helfen
                Unternehmen dabei, Leerfahrten zu vermeiden und zusätzliche
                Umsätze zu generieren.
              </p>
            </div>
            <div className="col-6 pakage_feature_container">
              <div className="pakage_feature_card pakage_feature_card_free p-4">
                <div className="package_Card_Detail_inner">
                  <img
                    className="card-image-top"
                    src={cardImagetop}
                    alt="card background top"
                  />
                  <h3 className="pakage_Card_name">Für Versender</h3>
                  <p className="pakage_Card_description">
                    Transportaufträge verfolgen & verwalten
                  </p>
                  <ul className="pakage_card_list">
                    <li>
                      <CheckIcon />
                      Kostenlos{" "}
                    </li>
                    <li>
                      <CheckIcon />
                      Ohne Laufzeit
                    </li>
                    <li>
                      <CheckIcon />
                      Keine versteckten Kosten
                    </li>
                  </ul>
                  <div className="d-flex justify-content-center">
                    <Link
                      to="/signup/freight-forwarder?plan=free"
                      className="btn btn-register-card"
                    >
                      Registrieren
                    </Link>
                    <img
                      className="card-image-bottom"
                      src={cardImage}
                      alt="card bottom"
                    />
                  </div>
                </div>
              </div>
              <div className="pakage_feature_card pakage_feature_card_price p-4">
                <div className="package_Card_Detail_inner">
                  <img
                    className="card-image-top"
                    src={cardImagetop}
                    alt="card background top"
                  />
                  <h3 className="pakage_Card_name">Für Versender</h3>
                  <p className="pakage_Card_description">
                    Speditionstarife erstellen & Aufträge erhalten
                  </p>
                  <ul className="pakage_card_list">
                    <li>
                      <CheckIcon />
                      30 Tage kostenlos testen{" "}
                    </li>
                    <li>
                      <CheckIcon />
                      Monatlich kündbar
                    </li>
                    <li>
                      <CheckIcon />
                      Monatlich nur 99,90 €
                    </li>
                  </ul>
                  <div className="d-flex justify-content-center">
                    <Link
                      to="/signup/freight-forwarder?plan=paid"
                      className="btn btn-register-card"
                    >
                      Registrieren
                    </Link>
                    <img
                      className="card-image-bottom"
                      src={cardImage}
                      alt="card bottom"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slider-background p-lg-5 px-2 py-5">
          <div className="p-lg-5 px-2 py-5  pb-0">
            <div>
              <h2 className="text-light text-left ps-lg-5 ps-2">
                Unsere Dienstleistungen
              </h2>
            </div>
            <p className="text-light text-left ps-lg-5 ps-2">
              Transporte von Stückgut, Teilpartien oder Komplettladungen bieten
              wir unseren Kundschaften an
            </p>
          </div>
          <SliderComp />
        </div>
        <div className="p-lg-5 px-2 py-5">
          <div className="list-background p-lg-5 p-2">
            <div>
              <p className="list-bg-italic text-center">
                3 Schritte Für Den Perfekten Transport
              </p>
              <h2 className="text-center">Wie funktioniert Speditioncheck</h2>
              <p className="text-center">Schnell. Simpel. Speditioncheck.</p>
            </div>
            <div className="list-card-container p-lg-5 p-2">
              <div className="list-card p-4">
                <div className="list_card_image_back_1">
                  <img src={cardListImage1} alt="card list 1" />
                </div>
                <h6 className="mt-3">Geben Sie Ihre Sendungsdetails ein</h6>
                <p>
                  Sagen Sie uns, wo Ihre Ware abgeholt werden soll und nennen
                  Sie uns den Zielort. Geben Sie hierbei zudem an, ob Sie als
                  Privat- oder gewerblicher Kunde auftreten. Vom einzelnen Paket
                  bis hin zur Palette oder Möbeln- geben Sie uns im folgenden
                  Schritt an, um welche Art der Ladung es sich handelt.
                </p>
              </div>
              <div className="list-card p-4">
                <div className="list_card_image_back_2">
                  <img src={cardListImage2} alt="card list 2" />
                </div>
                <h6 className="mt-3">
                  Erhalten Sie mühelos unverbindliche Preise
                </h6>
                <p>
                  Innerhalb weniger Sekunden erhalten Sie eine detaillierte und
                  unverbindliche Übersicht über verschiedene Transportangebote.
                  Vergleichen Sie diese und finden Sie das zu Ihnen am besten
                  passende Angebot.
                </p>
              </div>
              <div className="list-card p-4">
                <div className="list_card_image_back_3">
                  <img src={cardListImage3} alt="card list 3" />
                </div>
                <h6 className="mt-3">
                  Buchen Sie Ihren Transport ganz einfach online!
                </h6>
                <p>
                  Wünschen und Vorstellungen entspricht? Dann steht der Buchung
                  nichts mehr im Wege! Lehnen Sie sich zurück. Speditioncheck
                  bringt Sie anschließend mit dem Anbieter in Kontakt.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-lg-5 px-2 py-5">
          <div className="slider-background p-lg-5 px-2 py-5">
            <h1 className="text-light text-center">Unser Transportnetzwerk</h1>
            <p className="tour_description_text text-center">
              Vergleichen Sie mit unserem Versandrechner die Preise und
              profitieren <br /> Sie von unserer europaweiten Reichweite
            </p>
            <div className="container">
              <div className="row mb-5">
                <div className="col-lg-6 col-12 position-relative">
                  <img
                    className="tour-image"
                    src={turkey}
                    alt="country banners"
                  />
                  <p className="tour_image_text_large">Türkei</p>
                </div>
                <div className="d-flex justify-content-between col-lg-6 col-12 position-relative">
                  <div className="position-relative">
                    <img
                      className="tour-image-small"
                      src={dutch}
                      alt="country banners"
                    />
                    <p className="tour_image_text">Deutschland</p>
                  </div>
                  <div className="position-relative ms-3">
                    <img
                      className="tour-image-small"
                      src={france}
                      alt="country banners"
                    />
                    <p className="tour_image_text">Frankreich</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-12 position-relative">
                  <img
                    className="tour-image"
                    src={itly}
                    alt="country banners"
                  />
                  <p className="tour_image_text_large">Italien</p>
                </div>
                <div className="d-flex justify-content-between col-lg-6 col-12">
                  <div className="position-relative">
                    <img
                      className="tour-image-small"
                      src={britan}
                      alt="country banners"
                    />
                    <p className="tour_image_text">Großbritannien</p>
                  </div>
                  <div className="position-relative ms-3">
                    <img
                      className="tour-image-small"
                      src={spain}
                      alt="country banners"
                    />
                    <p className="tour_image_text">Spanien</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonials */}
        <div className="testimonials">
          <p className="testimonials_heading">testimonials</p>
          <h2 className="text-center">Was unsere Kunden Sagen</h2>
          <TestimonialSlider />
        </div>
        <Footer />
      </div>
    </>
  );
}
