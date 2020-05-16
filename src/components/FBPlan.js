import React from 'react';

import { Card, CardText, CardFooter, CardBody, CardHeader,CardImg, Button} from 'reactstrap'
function FBPlan() {
  return (
    <div className="App container-fluid">
    <div className="row intro">

    <div className="row head">
    <h1 className="name">IN-DEPTH FB PLAN</h1>
</div>
</div>
    <div className="container">
    <div className="row" style={{paddingLeft:"0%",paddingRight:"0%"}}>
    <div className="col-lg-6 col-sm-6">
    <div className="row post1" style={{marginTop:"10%"}}>
    <Card style={{width:"100%",margin:"1%"}}>
    <CardBody>
    <CardText>
    Delicious Indian Street Food Delivered to your Office!Ab Maza main!Order Now!  
    <span style={{color:"#3393FF"}}>#Foodie #FoodDelivery #Stroot</span></CardText>
    
    
    <CardImg src="assets/images/p5.png" height="250px">
    </CardImg>
    <CardFooter className="CardFooter">
  <div className="row" >
  <div className="col-8">
  <p className="text-secondary">DISPLAYURL.COM</p>
  <CardText>Food@Work? Not a Tension Anymore!</CardText>
  </div>
  <div className="col-4">
  <Button className="btn btn-outline-secondary vertical-center">INSTALL NOW</Button>
  </div>
  </div>
    </CardFooter>
    </CardBody>
    </Card>
    </div>
   
    
    </div>
    <div className="col-lg-6 col-sm-6">
    <div className="row post1" style={{marginTop:"10%"}}>
    <Card style={{width:"100%", margin:"1%"}}>
    <CardBody>
    <CardText>
    Craving Maa ke Haath ka Khana? Fikar Not! We have something that could satisfy your Tastebuds.Order Delicious Food Today!
    </CardText>
   
    
    <CardImg src="assets/images/p6.png" height="250px">
    </CardImg>
    <CardFooter className="CardFooter">
  <div className="row" >
  <div className="col-8">
  <p className="text-secondary">DISPLAYURL.COM</p>
  <CardText>Far from Home, not Home Food!</CardText>
  </div>
  <div className="col-4">
  <Button className="btn btn-outline-secondary vertical-center">INSTALL NOW</Button>
  </div>
  </div>
    </CardFooter>
    </CardBody>
    </Card>
    </div>
    </div>
    </div>
    <br></br>
    <div className="row">

    <div className="col-sm-9 col-md-6 col-lg-8">
    <div className="row post2">
    <Card style={{width:"100%"}}>
    <CardBody>
    <CardText>
    On-Demand Food Delivery in Bangalore!
    Get Tasty and Spicy Indian Street Food @ Your
    Doorstep! <span className="text-primary" style={{textAlign:"right"}}>...see more</span>
    </CardText>
   
    <CardFooter className="CardFooter">
    <div className="row" >
    <div className="col-4">
  <CardImg src="assets/images/p9.png" height="150px"></CardImg>
  
  </div>
  <div className="col-8">
  <p className="text-secondary">DISPLAYURL.COM</p>
  <CardText>Craving Delicious Food? We have Got You Covered!</CardText>
  <Button className="btn btn-outline-secondary">INSTALL NOW</Button>
  </div>
  
  </div> 
    </CardFooter>
    
    </CardBody>
    </Card>
    </div>
    <div className="row uld">
    <ul style={{padding:"0%",fontFamily:"Courier New, Courier, monospace"}}>
    <li>Since most people tend to spend the majority time on Newsfeed and Stories. the campaign placemnet would target these two aspects the most.</li>
    <li>Instant Experience and Canvas Ads would be teh Go-to targeting ads.</li>
    <li>CTA -Install Now/Order today</li>
    </ul>
    
    </div>
</div>
    <div className="col-sm col-md-6 col-lg-4">
    <div className="row post3">
    <Card style={{width:"250px"}}>
    <CardHeader>
    <CardText>
    Audience Size
    </CardText>
    </CardHeader>
    <CardBody>
    <div className="row">
    <div className="col-5">
    <CardImg src="assets/images/p7.png"></CardImg>
    </div>
    <div className="col-7">
    <p className="vertical-center">Your audience is defined</p>
    </div>
    
    </div>
    </CardBody>
    <CardHeader>
    <CardText>
    Estimated daily results
    </CardText>
    </CardHeader>
    
  <CardBody>
  <p>Based on 1-day clock conversion window</p>
  </CardBody>
   
    <CardFooter className="CardFooter">
    <p>The <b>budget</b> that you have entered limits the number of results that you're likely to get.
    <span className="text-primary">Learn more</span></p>
    </CardFooter>
    
   
    <CardBody>
    <p>Reach<span><i className="fa fa-info-circle"></i></span></p>
    <CardText>240K-694K</CardText>
    <div class="barcontainer">
  <div class="bar reach"></div>
</div>
    <br>
    </br>
    <p>App Installs<span><i className="fa fa-info-circle"></i></span></p>
    <CardText>1.7K-5.0K</CardText>
    <div class="barcontainer">
  <div class="bar App-installs"></div>
</div>
    </CardBody>
    </Card>
    </div>
    </div>
    
    </div>
    </div>

    
   
    
    </div>
  );
}

export default FBPlan;