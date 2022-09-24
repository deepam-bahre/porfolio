import React from 'react';  
import {Container, Row} from 'react-bootstrap';
import {facebook, linkedin, github, blogpost, flickr, skype} from '../component/icon.jsx';

 function footer(){ 
    let facebook_url="";  
    let github_url="";
    let linkedin_url="";
    let blogpost_url="";
    let flickr_url="https://www.flickr.com/photos/150605334@N07/";
    let skype_url="";

      return(  
         <div className='footer'>  
            <Container fluid>
      <Row>
        <div className='col-lg-6 col-md-6 col-sm-12'>
        <div className='footer-left'>
            <ul>
                <li>Copyright © Deepam Bahre | Designed by Deepam Bahre</li>
            </ul>
        </div>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-12'>
        <div className='footer-right'>
                <ul>
                    <li><a href={facebook_url} className="facebook social-icon">
                      <i class={facebook} aria-hidden="true"></i>
                      </a></li>
                    <li><a href={github_url} className="github social-icon">
                      <i class={github} aria-hidden="true"></i>
                      </a></li>
                    <li><a href={linkedin_url} className="linkedin social-icon">
                      <i class={linkedin} aria-hidden="true"></i>
                      </a></li>
                    <li><a href={blogpost_url} className="blogpost social-icon"> 
                    <i class={blogpost} aria-hidden="true"></i>
                      </a></li>
                    <li><a href={flickr_url} className="flickr social-icon">
                      <i class={flickr} aria-hidden="true"></i>
                      </a></li>
                      <li><a href={skype_url} className="skype social-icon">
                      <i class={skype} aria-hidden="true"></i>
                      </a></li>
                </ul>
            </div>
        </div>
      </Row>
    </Container>
         </div>  
      );  
}  
export default footer; 