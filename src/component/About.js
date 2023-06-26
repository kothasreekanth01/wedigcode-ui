import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

//import images
import about from '../assets/images/about-img.jpg';

export default class About extends Component {
    render() {
        return (
            <React.Fragment>
                <section className={this.props.isPrimary ? "section bg-about" : "section bg-about bg-light-about bg-light"} id="about">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className="title-heading mb-5">
                                    <h3 className={this.props.isPrimary ? "text-white mb-1 fw-light text-uppercase" : "text-dark mb-1 fw-light text-uppercase"}>About Us</h3>
                                    <div className="title-border-simple position-relative"></div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <div className={this.props.isPrimary ? "about-box text-center p-3" : "about-box about-light text-center p-3"}>
                                    <div className="about-icon mb-4">
                                        <i className="mdi mdi-lightbulb"></i>
                                    </div>
                                    <h4 className="fw-light"><Link to="#" className={this.props.isPrimary ? "text-white" : "text-dark"}>Sreekanth Kotha(Technical Architect)</Link></h4>
                                    <p className={this.props.isPrimary ? "text-white-50 f-14" : "text-muted f-14"}>Who can perform primary tasks of a technical architect include designing programs, implementing new structures and communicating with clients and IT teams.</p>
                                </div>
                            </Col>

                            <Col lg={4}>
                                <div className={this.props.isPrimary ? "about-box text-center p-3" : "about-box about-light text-center p-3"}>
                                    <div className="about-icon mb-4">
                                        <i className="mdi mdi-projector-screen"></i>
                                    </div>
                                    <h4 className="fw-light"><Link to="#" className={this.props.isPrimary ? "text-white" : "text-dark"}>Venkat Kunam(CEO)</Link></h4>
                                    <p className={this.props.isPrimary ? "text-white-50 f-14" : "text-muted f-14"}>Who Provide inspired leadership company-wide. Make high-level decisions about policy and strategy. </p>
                                </div>
                            </Col>

                            <Col lg={4}>
                                <div className={this.props.isPrimary ? "about-box text-center p-3" : "about-box about-light text-center p-3"}>
                                    <div className="about-icon mb-4">
                                        <i className="mdi mdi-nature"></i>
                                    </div>
                                    <h4 className="fw-light"><Link to="#" className={this.props.isPrimary ? "text-white" : "text-dark"}>Anil Kumar(Marketing&Sales)</Link></h4>
                                    <p className={this.props.isPrimary ? "text-white-50 f-14" : "text-muted f-14"}> is often responsible for planning and tracking the budget of their entire department, one segment, or an individual marketing campaign.</p>
                                </div>
                            </Col>
                        </Row>


                        <Row className="align-items-center mt-5">
                            <Col md={6}>
                                <div className="about-desc">
                                    <h3 className={this.props.isPrimary ? "text-white mb-3 fw-light" : "text-dark mb-3 fw-light"}>Perfect Solution For Small Businesses</h3>
                                    <p className={this.props.isPrimary ? "text-white-50 f-15" : "text-muted f-15"}>We Provide quality human resource outsourcing services to our clients. We focus to save time and money, growing your business, increase effiiency.</p>
                                   {/* <div className="about-by">
                                        <p className="fw-light mb-0"><Link to="#" className={this.props.isPrimary ? "text-white" : "text-dark"}><i
                                            className="mdi mdi-circle-medium text-custom me-2"></i>
                                            Learn More <span className="text-custom"> About Us</span></Link></p>
        </div>*/}
                                </div>
                            </Col>

                            <Col md={6}>
                                <div className={this.props.isPrimary ? "about-img position-relative p-4" : "about-img light-img position-relative p-4"}>
                                    <img src={about} alt="" className="img-fluid mx-auto d-block" />
                                </div>
                            </Col>

                        </Row>

                    </Container>
                </section>
            </React.Fragment>
        );
    }
}
