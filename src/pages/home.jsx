import React, {useState} from 'react';
import header_img from '../public/images/header4.png'; 
import DB_img from '../public/images/pic_frame6.png'; 
import DBAccordion from '../component/Accordion';
import {address, phone, email, arrow_up} from '../component/icon.jsx';
import {
   Row,
   Image,
   Container,
   Button,
   Form
   
 } from "react-bootstrap";
 

 function Home(){ 

  
      const [visible, setVisible] = useState(false)
      
      const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
          setVisible(true)
        } 
        else if (scrolled <= 300){
          setVisible(false)
        }
      };
      
      const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
          /* you can also use 'auto' behaviour
             in place of 'smooth' */
        });
      };
      
      window.addEventListener('scroll', toggleVisible);



      return(  
         <section className='home'>  
            <div class="header space-from-bottom">
               <Image src={header_img} fluid className="header-img"/>
            </div>
            <section className='about space-from-top space-from-bottom' id="about">
               <h2 className='about-heading'>ABOUT ME</h2>
               <div className='about-border'></div>
            <Container fluid>
               <Row>
                  <div className='col-md-6 col-sm-12'>
                  <Image src={DB_img} fluid className="header-img"/>
                  </div>
                  <div className='col-md-6 col-sm-12'>
                  <DBAccordion />
                  </div>
               </Row>
            </Container>
            </section>
            <section className='contact space-from-top' id="contact">
               <Container>
                  <Row>
                     <div className="col-md-12 col-sm-12">
                        <div className='contact-heading'>
                        <h3>Get In <span>Touch</span></h3>
                        <div className="contact-us-border"></div>
                        </div>
                     </div>
                     <div className='col-md-6 col-sm-12'>
                     <div className='contact-map'>
                     

                     <iframe title="BCM Planet" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.2120437806634!2d75.9200777147642!3d22.757510785087927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631d5e3df3b7c5%3A0x6e889108b14d5ce5!2sBCM%20Planet!5e0!3m2!1sen!2sin!4v1663688194660!5m2!1sen!2s" className='con-map'></iframe>
</div>
                        <div className='contact-info'>
                           <h4>Contact Details</h4>
                        <p>BCM PLANET</p>
               <div class="contact-details">
					<div class="con-info clearfix">
               <i class={address} aria-hidden="true"></i>
						<span>QW5C+2W2, Tulsi Nagar, Nipania, Indore, Madhya Pradesh 452010</span>
					</div>

					<div class="con-info clearfix">
               <i class={phone} aria-hidden="true"></i>
						<span>Phone: +91 7999094330</span>
					</div>

					{/* <div class="con-info clearfix">
						<i class="con-icon"></i>
						<span>Fax: +880-31-000-000</span>
					</div> */}

					<div class="con-info clearfix">
               <i class={email} aria-hidden="true"></i>
						<span>Email: deepambahre@gmail.com</span>
					</div>
				</div>
                        </div>
                     </div>
                     <div className='col-lg-1 col-md-1 col-sm-12'></div>
                     <div className='col-lg-5 col-md-5 col-sm-12'>
                        <div className='cotact-form'>
                        <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Control type="text" placeholder="Your Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Your Email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Control type="text" placeholder="Your Contact No." />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicMessage">
         <Form.Control
          as="textarea"
          placeholder="Message"
          style={{ height: '100px' }}
        />
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
                        </div>
                     </div>
                  </Row>
               </Container>
            </section>
            
            <Button className='scrollToTop' onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}}>
            <i className={arrow_up} aria-hidden="true" ></i>
    </Button>
         </section>  
      );  
}  
export default Home; 