import React, { useState } from "react";
import oriental_img from "../public/images/oriental-university.png";
import nielit_img from "../public/images/nielit_logo.png";
import iiit_img from "../public/images/iiit_bangalore_logo.png";
import Pdf from "../component/pdf";
import {download} from '../component/icon';
import {
  Row,
  useAccordionButton,
  Image,
  Container,
  Card,
  Accordion,
  Modal,
  Button,
} from "react-bootstrap";
import Progress from "../component/progress";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <button type="button" onClick={decoratedOnClick}>
      {children}
    </button>
  );
}

function DB_Accordion() {
  const [showModal, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="about-accordion">
      <Accordion defaultActiveKey="0">
        <Card className="rm-border-bt tab">
          <div className="accordion-body">
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <div className="blackboard-bg">
                  <div className="blackboard-caption">
                    <h3>&lt;&gt; Experience &lt;/&gt; </h3>
                    <p>
                      {" "}
                      &lt;&gt; I have 4.7 years of experience as &lt;/&gt;{" "}
                    </p>
                    <p>
                      &lt;&gt;{" "}
                      <i>
                        <strong>Full Stack Developer</strong>
                      </i>{" "}
                      &lt;/&gt;
                    </p>
                    <h5>&lt;&gt; Tools & Technologies &lt;/&gt;</h5>
                    <span>
                      &#47;&#42; Worked On Node JS, MongoDB, HTML5, CSS3,
                      JavaScript, Laravel &#42;&#47;
                    </span>
                  </div>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </div>
        </Card>
        <Card className="rm-border-bt rm-border-tp about-edu">
          <div className="accordion-body">
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <div className="education">
                  <Container fluid>
                    <Row>
                      <div className="col-md-12 col-sm-12">
                        <h3>Education</h3>
                        <div className="about-edu-border"></div>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <div className="edu">
                          <Image src={oriental_img} fluid className="icon" />
                          <div className="edu-body">
                            <h4>Oriental University</h4>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmo
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <div className="edu">
                          <Image src={nielit_img} fluid className="icon" />
                          <div className="edu-body">
                            <h4>NIELIT Calicut</h4>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmo
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <div className="edu">
                          <Image src={iiit_img} fluid className="icon" />
                          <div className="edu-body">
                            <h4>IIIT Bangalore</h4>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmo
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        {/* <div className="edu">
                  <i className="icon"></i>
                  <div className="edu-body">
                    <h4>User Experience</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo</p>
                  </div>
                </div> */}
                      </div>
                    </Row>
                  </Container>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </div>
        </Card>
        <Card className="rm-border-tp rm-border-bt">
          <div className="accordion-body">
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <div className="skills">
                  <Progress />
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </div>
        </Card>
        <Card className="rm-border-tp">
          <div className="accordion-body">
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                <div className="resume">
                  <Button variant="primary" onClick={handleShow}>
                    View Resume
                  </Button>
                  <Modal
                    show={showModal}
                    onHide={handleClose}
                    className="resume_modal"
                    dialogClassName="my-modal"
                  >
                    <Modal.Header closeButton>
                      
                      <span>
                        <a
                          href={require("../public/Deepam_Bahre_Resume.pdf")}
                          download="DeepamBahre_Resume"
                        >
                          <i class={download} aria-hidden="true"></i>
                        </a>
                      </span>
                      <Modal.Title>Resume</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Pdf />
                    </Modal.Body>
                    {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
                  </Modal>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </div>
        </Card>
        <div className="keyboard">
          <CustomToggle eventKey="0" className="btn accordion-btn">
            Experience
          </CustomToggle>
          <CustomToggle eventKey="1" className="btn accordion-btn">
            Education
          </CustomToggle>
          <CustomToggle eventKey="2" className="btn accordion-btn">
            Skills
          </CustomToggle>
          <CustomToggle eventKey="3" className="btn accordion-btn">
            Resume
          </CustomToggle>
        </div>
      </Accordion>
    </div>
  );
}
export default DB_Accordion;
