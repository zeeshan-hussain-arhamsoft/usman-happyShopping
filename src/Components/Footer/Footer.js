import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Images } from '../../Assets/Assets';
import "./Footer.css";

function Footer() {
    return (
        <div className='wrapper'>
            <section id='footer'>
                <div className='footer-content'>
                    <Container>
                        <Row>
                            <Col lg={3}>
                                <div className='footer-discription-col'>
                                    <div className='footer-discription-img'>
                                        <img src={Images.companyLogo} alt='' />
                                    </div>
                                    <div className='footer-discription-content'>
                                        <p>It is a long established fact that a reader will be distracted by the readable content. </p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} sm={4} xs={6}>
                                <div className="footer-ul">
                                    <h3 className='footer-list-heading'>Customer Service</h3>
                                    <ul className="footer_list">
                                        <li><Link to="/" className=" footer_anc"> Service & Warranty </Link></li>
                                        <li><Link to="/" className=" footer_anc"> Return & Exchange </Link></li>
                                        <li><Link to="/" className=" footer_anc">Secure Online Payments  </Link></li>
                                        <li><Link to="/" className=" footer_anc"> Cash on Delivery</Link></li>
                                        <li><Link to="/" className=" footer_anc"> Shipping & Delivery</Link></li>
                                        <li><Link to="/" className=" footer_anc"> Valet Trolley & Home Delivery</Link></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={3} sm={4} xs={6}>
                                <div className="footer-ul">
                                <h3 className='footer-list-heading'>About Us</h3>
                                    <ul className="footer_list footer-second-list">
                                        <li><Link to="/" className=" footer_anc"> All brands </Link></li>
                                        <li><Link to="/" className=" footer_anc"> Newsletter </Link></li>
                                        <li><Link to="/" className=" footer_anc">News & Press Releases</Link></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={3} sm={4}>
                            <div className="footer-ul">
                                <h3 className='footer-list-heading'>Helping you save</h3>
                                    <ul className="footer_list footer-second-list">
                                        <li><Link to="/" className=" footer_anc"> Extended Warranty Retail </Link></li>
                                        <li><Link to="/" className=" footer_anc"> Gift Card  </Link></li>
                                        <li><Link to="/" className=" footer_anc">Exclusive Discounts</Link></li>
                                        <li><Link to="/" className=" footer_anc">Offers</Link></li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className='copyright'>
                    <Container>
                        <div className='copyright-content'>
                            <p>Copyright © 2021 <strong>Happy Shopping</strong>. All Rights Reserved </p>
                        </div>
                    </Container>
                </div>
            </section>
        </div>
    );
}

export default Footer;