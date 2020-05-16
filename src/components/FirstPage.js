import React from 'react';
import {Media} from 'reactstrap';



function FirstPage() {
  return (
   
    <div class="container-fluid App">
    <div class="row">
    
      <div className="col-sm-3 col-md-6 col-lg-4" style={{margin:"0%"}}>
     
      <Media list style={{paddingLeft:"0%"}}>
      <Media tag = 'li' style={{margin:"0px"}}>
      <Media object src='assets/images/p1.png' className="dishimage">
      </Media>
      </Media>
      <Media tag = 'li'>
      <Media object src='assets/images/p2.png' className="dishimage">
      
      </Media>
      </Media>
      <Media tag = 'li'>
      <Media object src='assets/images/p3.png' className="dishimage">
      </Media>
      </Media>
      </Media>
      </div>
      <div className="col-sm-9 col-md-6 col-lg-8">
      <div className="container">
      <div className="row stroot-head">
      <h1 className="stroot-name vertical-center" style={{fontFamily:"Arial Black, Gadget, sans-serif"}}>STROOT</h1>
  </div>
  <div className="row stroot-head">
  <h1 className="vertical-center" style={{fontSize:"70px",textAlign:"center",fontFamily:"Comic Sans MS, cursive, sans-serif"}}><b>Panorbit <br></br>Assignment</b></h1>
</div>
<div className="row stroot-head">
<h1 className="vertical-center" style={{fontSize:"45px",fontFamily:"Arial, Helvetica, sans-serif"}}><b>SHARATH NARAYAN</b></h1>
</div>
      </div>
      </div>
    </div>
  </div>
   
  );
}

export default FirstPage;