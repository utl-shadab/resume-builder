import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import TestiTemp from '../../images/cv1.png'
import { Pagination , Autoplay } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './Testimonial.css';
import Quote from '../../images/quote.svg'
const SwiperSlider = () => {
  const testimonials = [
    {
      name: 'Lucinda Warner',
      role: 'Product Analyzer',
      image: TestiTemp,
      review: 'An excellent way to accomplish this is to integrate client testimonials and customer reviews into the Testimonials aren’t something to hide central theme and layout of your Modern websites use templates.'
    },
    {
      name: 'Lucinda Warner',
      role: 'Product Analyzer',
      image: TestiTemp,
      review: 'An excellent way to accomplish this is to integrate client testimonials and customer reviews into the Testimonials aren’t something to hide central theme and layout of your Modern websites use templates.'
    },
    {
      name: 'Lucinda Warner',
      role: 'Product Analyzer',
      image: TestiTemp,
      review: 'An excellent way to accomplish this is to integrate client testimonials and customer reviews into the Testimonials aren’t something to hide central theme and layout of your Modern websites use templates.'
    },
    {
      name: 'Lucinda Warner',
      role: 'Product Analyzer',
      image: TestiTemp,
      review: 'An excellent way to accomplish this is to integrate client testimonials and customer reviews into the Testimonials aren’t something to hide central theme and layout of your Modern websites use templates.'
    },
    {
      name: 'Lucinda Warner',
      role: 'Product Analyzer',
      image: TestiTemp,
      review: 'An excellent way to accomplish this is to integrate client testimonials and customer reviews into the Testimonials aren’t something to hide central theme and layout of your Modern websites use templates.'
    },
    // Add more testimonial objects here
  ];
  return (

    <>
    <section className='testi-monial-section'>
      <Container className='testi-monial-container'>
        <Row>
          <Swiper
            direction={'vertical'}
            pagination={{
              clickable: true,
            }}
            autoplay={{ delay: 2700, disableOnInteraction: false }} 
            modules={[Pagination, Autoplay]} 
            className="w-100 "
            speed={3000}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="d-flex justify-content-center align-items-center bg-white text-center">
                <div className="testi-monialcard">
                  <Row className='align-items-center'>
                    <Col lg="4">
                      <div className="testi-monial-img">
                        <img src={testimonial.image} alt="" />
                        <h6 className='mt-3'>{testimonial.name}</h6>
                        <p>{testimonial.role}</p>
                      </div>
                    </Col>
                    <Col lg="8">
                      <div className='testi-monial-content'>
                        <img src={Quote} alt="" className='quote-img' />
                        <h3 className='mb-3 text-start'>Customer Reviews</h3>
                        <p className='text-start'>{testimonial.review}</p>
                        <img src={Quote} alt="" className='quote-img-bottom' />
                      </div>
                    </Col>
                  </Row>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Row>
      </Container>
      </section>
    </>
  );
};

export default SwiperSlider;
