import React from 'react';
import '../styles/Home.css';
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import Subtitle from '../shared/Subtitle';
import worldImg from '../assets/images/world.png';
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero_content">
                <div className="hero_subtitle" style={{ alignItems: 'center', display: 'flex' }}>
                  <Subtitle subtitle={'Know Before You Go'} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Travelling opens the door to creating <span className="highlight">memories</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti magnam asperiores blanditiis neque
                  corporis dicta quo voluptatem temporibus itaque cum nisi ut eligendi odit, pariatur ad sequi voluptate
                  inventore ab?
                </p>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero_img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero_img-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero_img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
            <SearchBar/>
          </Row>
        </Container>
      </section>
    {/* {       bottom section                         } */}
    <section>
      <Container>
        <Row>
          <Col lg='3'>
          <h5 className='services_subtitle'>what we serve</h5>
          <h2 className='services-title'>we offer our best services</h2>
          </Col>
          <ServiceList/>
        </Row>
      </Container>
    </section>
    {/* {==========featured tour section end==========} */}
    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
          <Subtitle className='services_subtitle'subtitle={'Explore'}/>
          <h2 className='featured_tour-title'>Our featured tours</h2>
          </Col>
          <FeaturedTourList/>
        </Row>
      </Container>
    </section>
    {/* {==========featured tour section end==========} */}

    {/* {==========exeprience  section start==========} */}
  <section>
    <Row>
      <Col lg='6'>
      <div className="experience_content" >
        <Subtitle subtitle={'Experience'}/>
        <h2>With our all exprience<br/>we will serve you</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. tempore vero
          <br/>
          Lorem ipsum dolor sit amet couam laborsunt praesentium earum?
        </p>
      </div>
      <div className="counter_wrapper" style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'5rem'}}>
        <div className="counter_box">
          <span>12k+</span>
          <h6>Successful trip</h6>
        </div>
        <div className="counter_box">
          <span>2k+</span>
          <h6>Regular clients</h6>
        </div>
        <div className="counter_box">
          <span>12k+</span>
          <h6>Years experience</h6>
        </div>
      </div>
      </Col>
      <Col lg='6'></Col>
    </Row>
  </section>
    {/* {==========exeprience  section end==========} */}
    </>
  );
};

export default Home;
