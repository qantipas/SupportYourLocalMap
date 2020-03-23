import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import "./landingpage.css";
import { Hidden } from "@material-ui/core";
// import { Container } from "@material-ui/core";

import Geocoder from "react-mapbox-gl-geocoder";
const TOKEN =
  "pk.eyJ1IjoicWFudGlwYXMiLCJhIjoiY2s4MWluZnBiMGZ1NDNobXMxc3hxZGl1aSJ9.KOxjAfRlBi5O-Qtojbdavw"; // Set your mapbox token here

const SearchForm = styled(Geocoder)`
  input {
    margin: 45px;
    margin-top: 0px;
    width: 100%;
    border: none;
    border-radius: 100px;
    padding: 5px;
    color: #4a4a4a;
    font-family: proxima-nova, sans-serif;
    font-size: 2em;
    padding: 15px;
    padding-left: 30px;

    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    @media screen and (max-device-width: 736px) {
      width: 98%;
      margin: 1%;

      font-size: 1.6em;
    }
  }
`;

const DescriptionText = styled.div`
  position: relative;
  margin: 45px;
  margin-bottom: 0px;
  width: 100%;
  color: #4a4a4a;
  font-family: proxima-nova, sans-serif;
  font-size: 2em;

  @media screen and (max-device-width: 736px) {
    width: 98%;
    margin: 1%;

    font-size: 1.6em;
  }
`;
const SearchArea = styled.div`
  width: 50%;
  position: absolute;
  padding: 50px;
  padding-top: 200px;
  @media screen and (max-device-width: 736px) {
    width: 100%;

    padding: 20px;
    padding-top: 200px;
  }
`;
const LandingPage = props => {
  const onSelected = item => {
    console.log(item);
    props.history.push(
      "/map/" + item.latitude + "/" + item.longitude + "/" + item.zoom
    );
  };
  return (
    <div>
      <div className="headerbackground">
        <SearchArea>
          <DescriptionText>
            Jetzt deine Postleitzahl eingeben und erkunden, welche Optionen es
            in deiner Nähe gibt!
          </DescriptionText>
          <br></br>
          <SearchForm
            mapboxApiAccessToken={TOKEN}
            onSelected={onSelected}
            // viewport={viewport}
            // hideOnSelect={false}
            // queryParams={this.queryParams}
            defaultValue="Suchen"
            // onResults={this.onResults}
          />
        </SearchArea>
        {/* <div className="overlay-text">
          <Row className="paddingrand">
            <Col lg={5}></Col>
            <Col lg={2}>
              <h3 className="margintoph3">
                BÜCHEREI
                <br />
                MUSIKHAUS
                <br />
                etc.
              </h3>
            </Col>
            <Col lg={4}>
              <div>
                <h2>
                  LOCALS <br />
                  STAY <br />
                  STRONG <br />
                </h2>
              </div>
            </Col>
            <Col lg={4}></Col>
            <Col lg={7}>
              <hr />
            </Col>
            <Col lg={7}></Col>
            <Col lg={4}>
              <a>
                <h3 className="margintoph3; floatleft">FINDE DEINE LOCALS</h3>
                <img className="pfeil" src="img/pfeil.png" />
              </a>
            </Col>
          </Row> */}
        {/* </div> */}
        {/* <StyledInput></StyledInput> */}
      </div>
      <div className="abstand"></div>

      <Row>
        <Col lg={2}></Col>
        <Col lg={10}>
          <h1 className="paddingrand supporthashtag">#support your locals</h1>
        </Col>
        <Col lg={2}></Col>
        <Col lg={3} sm={12} className="nopadding">
          <div className="abstand"></div>
          <div className="backgroundgrey">
            <div className="mittig">
              <img className="label" src="/img/label.png" />
            </div>

            <p>
              Ob der Buchladen um die Ecke oder das Lieblingskaffee. Gerade
              kleine Betriebe trifft die Verkaufssperre hart. Wir wollen diesen
              Betrieben helfen und eine Map für alternative Dienstleistungen
              schaffen.
            </p>
          </div>
        </Col>

        <Col lg={5} sm={12} className="nopadding">
          <div className="abstand"></div>
          <div className="friends"></div>
        </Col>
        <Col lg={2}></Col>
      </Row>

      {/* zweiter Abschnitt */}

      <div className="abstand"></div>

      <Row>
        <Col lg={2}></Col>
        <Col lg={10}>
          <h1 className="paddingrand supporthashtag">#staystrong</h1>
        </Col>
        <Col lg={2}></Col>
        <Col lg={5} sm={12} className="nopadding">
          <div className="abstand"></div>
          <div className="backgroundgrey ">
            <h4>Die Idee</h4>
            <p>
              Von dem klassischen Lieferservice, bis hin zur eingebauten
              Babyklappe in der Eingangstür. Es gibt viele Wege, wie Kunden
              trotz Einschränkungen bedient werden können. Jede Woche stellen
              wir Läden mit besonders kreativen Lösungen vor, um anderen
              Betrieben noch mehr kreativen Input und Anstöße zu geben.
            </p>
          </div>
        </Col>
        <Col lg={3} sm={12} className="nopadding">
          <div className="abstand"></div>
          <div className="backgroundgrey">
            <div className="mittig">
              <img className="label" src="/img/label.png" />
            </div>
            <p>
              Werde von deiner Lokalen Kundschaft mit deinen „Coronaangeboten
              gefunden.
            </p>
          </div>
        </Col>
        <Col lg={2}></Col>
      </Row>

      {/* Beispiele */}

      <div className="abstand"></div>

      <Row>
        <Col lg={2}></Col>
        <Col lg={3} sm={12} className="padding-right">
          <div className="laden1"></div>
        </Col>
        <Col lg={5} sm={12} className="padding-left" className="nopadding">
          <div className="backgroundgrey">
            <h4>Foto Firlé</h4>
            <p>
              Foto Firlé ist ein familiengeführtes Fachgeschäft für Fotografie
              und bereits seit 1930 eine feste Größe in Frankfurt Bockenheim.
              <br />
              <br />
              Alternative Dienstleistung
              <br />
              Im gegenüberliegenden Supermarkt liegt eine Kiste, in die zu
              entwickelnde Filme gelegt werden können. iese wird dann einmal am
              Tag von den Mitarbeitern von Foto Firlé abgeholt und bearbeitet.
            </p>
          </div>
        </Col>

        <Col lg={2}></Col>
      </Row>

      {/* Beispiel 2 */}
      <div className="abstand"></div>

      <Row>
        <Col lg={2}></Col>

        <Col lg={5} sm={12} className="padding-right">
          <div className="backgroundgrey">
            <h4>Musik Weber</h4>

            <p>
              Musik Weber hat Tradition in der Branche. Von Streich bis
              Blasinstrumente, über Pianos für klein und groß.
              <br />
              <br />
              Alternative Dienstleistung
              <br />
              Die Mitarbeiter führen die Kunden via FaceTime durch das Geschäft.
              Sie beraten und zeigen, sodass der Kunde ein Einkaufserlebnis hat.
              Bezahlt wird am Ende über PayPal.
            </p>
          </div>
        </Col>
        <Col lg={3} sm={12} className="padding-left" className="nopadding">
          <div className="laden1"></div>
        </Col>

        <Col lg={2}></Col>
      </Row>

      {/* Beispiel 3 */}

      <div className="abstand"></div>

      <Row>
        <Col lg={2}></Col>
        <Col lg={3} sm={12} className="padding-right">
          <div className="laden1"></div>
        </Col>
        <Col lg={5} sm={12} className="padding-left" className="nopadding">
          <div className="backgroundgrey">
            <h4>Name Laden</h4>
            <p>
              Ob der Buchladen um die Ecke oder das Lieblingskaffee. Gerade
              kleine Betriebe trifft die Verkaufssperre hart. Wir wollen diesen
              Betrieben helfen und eine Map für alternative Dienstleistungen
              schaffen.
            </p>
          </div>
        </Col>

        <Col lg={2}></Col>
      </Row>

      <footer>
        <Row>
          <Col lg={2}></Col>
          <Col lg={2}>
            <h5 className="paddingrand">
              <a>Über uns</a>
            </h5>
            <h5 className="paddingrand">
              <a>Impressum</a>
            </h5>
            <h5 className="paddingrand">
              <a>Datenschutz</a>
            </h5>
          </Col>
          <Col lg={2}></Col>
          <Col lg={4}>
            <h5 className="paddingrand">
              Ein Projekt im Rahmen des Hackatons der Bundesregierung.
            </h5>
            <img className="wirgegencorona" src="/img/wirgegencoronalogo.png" />
          </Col>
        </Row>
      </footer>
    </div>
  );
};

export default LandingPage;
