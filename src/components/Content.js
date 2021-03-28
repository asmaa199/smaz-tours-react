import React from 'react';

const Content = () => {
  return (
<>
   <section id="about" className="content-section text-center">
     <div className="container">
        <div className="row">
            <div className="col-lg-8 mx-auto">
                <h2>About Us</h2>
                <p><strong>We are here to make yours plans easier by helping you book all you need for the vacation.</strong></p> <p><strong> We book flights, hotels and means of transport for the vacation and also notify you when their offers of &nbsp;affordable vacation packages with everything included.</strong></p>
                <p><strong></strong></p>
            </div>
        </div>
     </div>
  </section>
 <section id="services" className="download-section content-section text-center" >
    <div className="container">
        <div className="cust_bloglistintro">
                <p className="blogparagraph"></p>
            </div>
            <div className="row">
                <div className="col-md-4 cust_blogteaser">
                    <a href="#"><img className="img-fluid" width = "250px" hieght = "200px" src="assets/img/flight.png" /></a>
                    <h3 className="blogheader">&nbsp; &nbsp; &nbsp; FLIGHTS</h3>
                    <p className="text-secondary blogteaserparagraph">
                        We book with all airlines of your choices and any className you would like to be in at your comfort.
                    </p>
                    <a className="h4" href="#"><i className="fa fa-arrow-circle-right blogicon"></i></a>
                </div>

                <div className="col-md-4 cust_blogteaser">
                    <a href="#"><img className="img-fluid" width = "250px" src="assets/img/accom.png" /></a>
                    <h3 className="blogheader">&nbsp; &nbsp; &nbsp;ACCOMMODATION</h3>
                    <p className="text-secondary blogteaserparagraph">
                        We book accommodations of your choice like hotels, apartments, cottages and villas at your destination.
                    </p>
                    <a className="h4" href="#"><i className="fa fa-arrow-circle-right blogicon"></i></a>
                </div>

                <div className="col-md-4 cust_blogteaser">
                    <a href="#"><img className="img-fluid" width = "250px" src="assets/img/vacation.png" /></a>
                    <h3 className="blogheader">&nbsp; &nbsp; VACATION PACKAGES</h3>
                    <p className="text-secondary blogteaserparagraph">
                        These packages include flights, accommodation and transportation all togehter at given discounts.
                    </p>
                    <a className="h4" href="#"><i className="fa fa-arrow-circle-right"></i></a>
               </div>
            </div>
    </div>
  </section>
 <section id="contact" className="content-section text-center">
    <div className="container">
        <div className="row">
            <div className="col-lg-8 mx-auto">
                <h2>Contact us</h2>
                <p>Feel free to leave us a comment on the<a href="#"> SmazTours page</a> to give some feedback about this site!</p>
                <ul className="list-inline banner-social-buttons">
                    <li className="list-inline-item"><button className="btn btn-primary btn-lg btn-default" type="button"><i className="fa fa-google-plus fa-fw"></i><span className="network-name">  Google+</span></button></li>
                    <li className="list-inline-item"><button className="btn btn-primary btn-lg btn-default" type="button"><i className="fa fa-twitter fa-fw"></i><span className="network-name"> Twitter</span></button></li>
                    <li className="list-inline-item"><button className="btn btn-primary btn-lg btn-default" type="button"><i className="fa fa-github fa-fw"></i><span className="network-name"> github</span></button></li>
                </ul>
            </div>
        </div>
    </div>
  </section>
</>
  )
}

export default Content;
