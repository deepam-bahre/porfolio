
import React from 'react'; 
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import {
    Image,   
  } from "react-bootstrap";
import 'react-vertical-timeline-component/style.min.css';
import timeline_icon1 from '../public/images/timeline/timeline_icon1.png';
import timeline_icon2 from '../public/images/timeline/timeline_icon2.png';
import timeline_icon3 from '../public/images/timeline/timeline_icon3.png';
import timeline_icon4 from '../public/images/timeline/timeline_icon4.png';
import timeline_icon5 from '../public/images/timeline/timeline_icon5.png';
import timeline_icon6 from '../public/images/timeline/timeline_icon6.png';
import timeline_icon7 from '../public/images/timeline/timeline_icon7.png';
import timeline_icon8 from '../public/images/timeline/timeline_icon8.png';
import timeline_icon9 from '../public/images/timeline/timeline_icon9.png';
import timeline_start from '../public/images/timeline/start.png';
import timeline_end from '../public/images/timeline/end.png';

function Timeline(){   
    return(  
       <div>  
     <VerticalTimeline>
     <VerticalTimelineElement
  className='timeline-right'
    icon={<Image src={timeline_start} fluid className="header-img"/>}
  />
  <VerticalTimelineElement
    className="vertical-timeline-element--work timeline-left"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="Mar 2022 - Present"
    icon={<Image src={timeline_icon1} fluid className="header-img"/>}
  >
    
    <h3 className="vertical-timeline-element-title">Post Graduation</h3>
    <h4 className="vertical-timeline-element-subtitle">IIT Bangalore</h4>
    <p>
      Java, Spring, Hibernate, React, MongoDB, Data Structure, Software Engineering, JavaScript, Html5, Css3, AWS, Dyamo DB, Docker.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work timeline-right"
    date="May 2021 - Present"
    icon={<Image src={timeline_icon2} fluid className="header-img"/>}
  >
    <h3 className="vertical-timeline-element-title">Doodleblue Innovation</h3>
    <h4 className="vertical-timeline-element-subtitle">Senior Software Engineer</h4>
    <p>
      Node JS, Restful API, Laravel, AWS, Elastic Search, Solr, Html5, CSS3, Javascript.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work timeline-left"
    date="Oct 2020 - Feb 2021"
    icon={<Image src={timeline_icon3} fluid className="header-img"/>}
  >
    <h3 className="vertical-timeline-element-title">FanPlay IOT</h3>
    <h4 className="vertical-timeline-element-subtitle">Software Engineer</h4>
    <p>
      Node JS, MySQl, Microservices.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work timeline-right"
    date="Nov 2019 - Jul 2020"
    icon={<Image src={timeline_icon4} fluid className="header-img"/>}
  >
    <h3 className="vertical-timeline-element-title">Attainu</h3>
    <h4 className="vertical-timeline-element-subtitle">Full Stack Developer</h4>
    <p>
      Node JS, MongoDB, Postgress, Html5, Css3, Javascript.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--education timeline-left"
    date="Apr 2019 - Jul 2019"
    icon={<Image src={timeline_icon5} fluid className="header-img"/>}
  >
    <h3 className="vertical-timeline-element-title">Diploma in Data Science</h3>
    <h4 className="vertical-timeline-element-subtitle">NIELIT Calicut</h4>
    <p>
      Python, R language, Machine Learning, Deep Learning, NLP.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--education timeline-right"
    date="Jun 2018 - Apr 2019"
    icon={<Image src={timeline_icon6} fluid className="header-img"/>}
  >
    <h3 className="vertical-timeline-element-title">Concentrix Daksh</h3>
    <h4 className="vertical-timeline-element-subtitle">Web Builder</h4>
    <p>
      CMS, Javascript.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--education timeline-left"
    date="Sep 2017 - Jun 2018"
    icon={<Image src={timeline_icon7} fluid className="header-img"/>}
  >
    <h3 className="vertical-timeline-element-title">Software Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">Innovtion Tracking</h4>
    <p>
    Html5, CSS3, JavaScript, jQuery, Adobe Photoshop
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--education timeline-right"
    date="Jun 2016 Feb 2017"
    icon={<Image src={timeline_icon8} fluid className="header-img"/>}
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle"> Shreeram Technology Services Pvt. Ltd.</h4>
    <p>
    Html5, CSS3, JavaScript, jQuery, Adobe Photoshop
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--education timeline-left"
    date="Aug 2010 - May 2014"
    icon={<Image src={timeline_icon9} fluid className="header-img"/>}
  >
    <h3 className="vertical-timeline-element-title">Bachelor of Engineering</h3>
    <h4 className="vertical-timeline-element-subtitle">Oriental University</h4>
    <p>
      Computer Science & Microsoft Certification Program
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
  className='timeline-right'
    icon={<Image src={timeline_end} fluid className="header-img"/>}
  />
</VerticalTimeline>
       </div>  
    );  
}  
export default Timeline; 