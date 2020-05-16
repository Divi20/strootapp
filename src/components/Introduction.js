import React from 'react';
import {Media} from 'reactstrap';

function Introduction() {
  return (
    <div className="App container-fluid">
    <div className="row intro">
    <div className="row head">
    <h1 className="name">INTRODUCTION</h1>
</div>
</div>
<div className="container">
<br></br>
<br></br>
<Media className="row">
<Media tag = 'li'>
<Media body>
<h2><span style={{fontFamily:"Arial Black, Gadget, sans-serif",padding:"1%"}}>|</span>ABOUT</h2>
<br></br>
<p>The modern world has rapidly progressed towards App installs and in App Conversations.With over $80 billion in revenue in 2018,
we have come a long way,not just in terms of downloads,but also the in-app actions, aquisitions and retenstion methods.For the hypothetical business "STROOT",a food delivery
app targeting 18-30 years old. My advertising model for App installs would consist of the following. </p>
</Media>
</Media>
<br></br>
<br></br>
<Media tag = 'li'>
<Media body>
<h2><span style={{fontFamily:"Arial Black, Gadget, sans-serif",padding:"1%"}}>|</span>BUSINESS</h2>
<br></br>
<ul style={{padding:"0%"}}>
<li>Target Group 18 to 30 year old working class and college studnets in Bangalore. </li>
<li>Tone of the Brand : Quirky and Humour</li>
<li>USP. Indian Street food,Buisiness to small scale vendors, Spicy and tasty food </li>
<li>Current users: 1,00,000 downloads</li>
<li>Target:3,00,000 downloads</li>
</ul>

</Media>
</Media>

</Media>
 </div>
 <br></br>
 <br></br>
 <div className="row footer">
   

    <div className="container-fluid"style={{backgroundColor:"#000",height:"100%",padding:"3%",margin:"0%"}} >
 <div className="container" style={{color:"#fff",padding:"0%"}}>


 
 <h2><span style={{fontFamily:"Arial Black, Gadget, sans-serif",padding:"1%"}}>|</span>TARGETED PLATFORMS</h2>
 <div className="row"style={{justifyContent:"center", color:"white"}}>
 <div className="col-sm-4 col-md-3 col-lg-5">
 
 <div style={{display:"block",textAlign:"center"}}>
 <h1>Paid</h1>
 <img src="assets/images/f1.png" alt="1"></img>
 <img src="assets/images/f2.png" alt="2"></img>
 <img src="assets/images/f3.png" alt="3"></img>
 <br></br>
 <br></br>
 <img src="assets/images/f4.png" alt="4"></img>
 </div>
 
 </div>
 <div className="col-sm-4 col-md-3 col-lg-5">
 <div style={{display:"block",textAlign:"center"}}>
 <h1>Organic</h1>
 <img src="assets/images/g1.png" alt="1"></img>
 <img src="assets/images/g2.png" alt="2"></img>
 <img src="assets/images/g3.png" alt="3"></img>
 <br></br>
 <br></br>
 <img src="assets/images/g4.png" alt="4"></img>
 </div>
 </div>
 </div>
 </div>
 </div>
    
</div>

 
 
 <br></br>

    </div>
  );
}

export default Introduction;