import React from "react";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Container from 'react-bootstrap/Container';
import "./landingpage.css";
// import { Container } from "@material-ui/core";




const LandingPage = props => {
  return <div> <div className="headerbackground" >
    <div className="overlay-text">
<Row className="paddingrand" >
  <Col lg={5}></Col>
  <Col lg={2}><h3 className="margintoph3">
    BÜCHEREI<br />
    MUSIKHAUS<br />
    etc.
</h3></Col>
  <Col lg={4}>
  <div><h2>
    LOCALS <br />
    STAY <br />
    STRONG <br />
  </h2></div>
  </Col>
  <Col lg={4}></Col>
  <Col lg={7} ><hr/></Col>
  <Col lg={7}></Col>
  <Col lg={4} ><a><h3 className="margintoph3; floatleft">FINDE DEINE LOCALS</h3><img className="pfeil" src="img/pfeil.png" /></a></Col>

  
</Row>
</div>
</div>

<div className="abstand"></div>

<Row>
<Col lg={2}></Col>
<Col lg={10}><h1 className="paddingrand supporthashtag">#support your locals</h1></Col>
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
  <div className="friends"></div>


</Col>

</Row>

{/* zweiter Abschnitt */}

<div className="abstand"></div>

<Row>
<Col lg={2}></Col>
<Col lg={10}><h1 className="paddingrand">#staystrong</h1></Col>
<Col lg={2}></Col>
<Col lg={5} sm={12} className="nopadding">
<div className="abstand"></div>
<div className="backgroundgrey ">
  <p>“Die not macht erfinderisch.”
Von dem klassischen Lieferservice, bis hin zur eingebauten Babyklappe in der Eingangstür. Es gibt viele Wege trotz
</p>
</div>


</Col>
<Col lg={3} sm={12} className="nopadding">
<div className="abstand"></div>
  <div className="backgroundgrey">
    <div className="mittig"><img className="label" src="/img/label.png" /></div>
    <p>Werde von deiner Lokalen Kundschaft mit deinen „Coronaangeboten gefunden.</p>
  </div>
</Col>
<Col lg={2}></Col>

</Row>


{/* Beispiele */}


<div className="abstand"></div>

<Row >
<Col lg={2}></Col>
<Col lg={3} sm={12} className="padding-right">

  <div className="laden1"></div>


</Col>
<Col lg={5} sm={12} className="padding-left" className="nopadding">

  <div className="backgroundgrey">
  <h4>Name Laden</h4>
    <p>Ob der Buchladen um die Ecke oder das Lieblingskaffee. 
      Gerade kleine Betriebe trifft die Verkaufssperre hart. 
      Wir wollen diesen Betrieben helfen und eine Map für alternative Dienstleistungen schaffen.</p>
  </div>
</Col>


<Col lg={2}></Col>

</Row>

{/* Beispiel 2 */}
<div className="abstand"></div>

<Row >
<Col lg={2}></Col>

<Col lg={5} sm={12} className="padding-right" >

  <div className="backgroundgrey">

  <h4>Name Laden</h4>
    
    <p>Ob der Buchladen um die Ecke oder das Lieblingskaffee. 
      Gerade kleine Betriebe trifft die Verkaufssperre hart. 
      Wir wollen diesen Betrieben helfen und eine Map für alternative Dienstleistungen schaffen.</p>
  </div>
</Col>
<Col lg={3} sm={12} className="padding-left" className="nopadding">

  <div className="laden1"></div>


</Col>



<Col lg={2}></Col>

</Row>

{/* Beispiel 3 */}

<div className="abstand"></div>

<Row >
<Col lg={2}></Col>
<Col lg={3} sm={12} className="padding-right">

  <div className="laden1"></div>


</Col>
<Col lg={5} sm={12} className="padding-left" className="nopadding">

  <div className="backgroundgrey">
  <h4>Name Laden</h4>
    <p>Ob der Buchladen um die Ecke oder das Lieblingskaffee. 
      Gerade kleine Betriebe trifft die Verkaufssperre hart. 
      Wir wollen diesen Betrieben helfen und eine Map für alternative Dienstleistungen schaffen.</p>
  </div>
</Col>


<Col lg={2}></Col>

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
