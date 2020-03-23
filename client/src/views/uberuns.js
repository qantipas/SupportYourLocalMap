import React from "react";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Container from 'react-bootstrap/Container';
import "./landingpage.css";
// import { Container } from "@material-ui/core";




const LandingPage = props => {
  return <div> <div className="headerbackgrounduberuns" >
    <div className="overlay-text">
<Row >
 

  
</Row>
</div>
</div>

<div className="abstand"></div>

<Row>
<Col lg={2}></Col>
<Col lg={10}><h1>#überuns</h1></Col>
<Col lg={2}></Col>
<Col lg={5} sm={12}>
<div className="abstand"></div>
  <div className="backgroundgreyuberuns">
    
    <p>Gerade Einzelhändler und lokale Restaurants machen sich im Moment sehr große Sorgen. 
        Wir konnten mit verschiedenen Läden in unterschiedlichen Branchen sprechen, um uns ein Bild davon zu machen, 
        wie mit einer anstehenden Ausgangssperre umgegangen wird. Wir hatten das Gefühl, dass die Läden sehr unterschiedlich vorbereitet sind. 
        Während die einen sich schon um einen Lieferservice und Online-Shops gekümmert haben, versuchten andere noch herauszufinden, 
        wie sie weiterhin Geld in die Kasse bringen könnten. Außerdem berichteten uns viele, dass es ihnen schwer fällt die Kunden auf alternative Dienstleistungen hinzuweisen. <br/>
Wir hatten genügend “Probleme” gehört und machten uns ans Werk. <br/><br/>

Die durch die Umfrage gesammelten Probleme wollen wir mit einer Webseite lösen, welche für Einzelhändler und lokale Restaurants, 
sowie Endkunden informationen zu geänderten Dienstleistungen parat hält.<br/>
Im Fokus steht dabei eine SupportYourLocalMap, auf der alle Einzelhändler und Restaurants [welche Lieferservice, Take-Away, 
oder andere alternative Dienstleistungen anbieten] angezeigt werden. Ob eine Buch-Bestell-Hotline oder einen Sammelkiste von einem Fotoladen für zu entwickelnde Filme 
im benachbarten Supermarkt. Alle Infos werden von den Händlern selbst im Formular hinterlegt, sodass die Kunden genau wissen, wie sie die Dienstleistungen nutzen können. 
Neben der SupportYourLocalMap es noch einen Bereich nur für B2C Unternehmen, indem für jede Branche Ideen für alternative Dienstleistungen gesammelt werden. 
Natürlich wird dabei darauf geachtet, dass die vorgeschlagenen Ideen im Rahmen des Gesetzes sind.</p>
<div className="mittig" >
<iframe width="560" height="315" src="https://www.youtube.com/embed/XcC_UzFS3EY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</div>
</Col>

<Col lg={3} sm={12}>
<div className="abstand"></div>
  <div ><img className="road abstand" src="/img/road.png"/></div>


</Col>
<Col lg={2}></Col>

</Row>

<div className="abstand"></div>

<Row>

<Col lg={2}></Col>
<Col lg={3} sm={12} className="nopadding">
<div className="abstand"></div>
  <div className="backgroundgrey">
    <div className="mittig"><img className="label" src="/img/label.png" /></div>
    <p>Ob der Buchladen um die Ecke oder das Lieblingskaffee. 
      Gerade kleine Betriebe trifft die Verkaufssperre hart. 
      Wir wollen diesen Betrieben helfen und eine Map für alternative Dienstleistungen schaffen.</p>
  </div>
</Col>

<Col lg={7} sm={12} className="nopadding">
<div className="abstand"></div>
  <div className="friends"><div className="button"><a ><h3 className="floatleft2 ">FINDE DEINE LOCALS</h3><img className="pfeil2" src="img/pfeil.png" /></a></div></div>


</Col>

</Row>

<footer >
<Row >
<Col lg={2} ></Col>
<Col lg={2} ><h5 className="paddingrand"><a>Über uns</a></h5><h5 className="paddingrand"><a>Impressum</a></h5><h5 className="paddingrand"><a>Datenschutz</a></h5></Col>
<Col lg={2}></Col>
<Col lg={4} ><h5 className="paddingrand">Ein Projekt im Rahmen des Hackatons der Bundesregierung.</h5><img className="wirgegencorona" src="/img/wirgegencoronalogo.png"/></Col>

</Row>

</footer>

</div>


 
 



  
};

export default LandingPage;
