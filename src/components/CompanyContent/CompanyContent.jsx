import React from 'react'
import { Container, Row, Col } from 'reactstrap';
const CompanyContent = () => {
  return (
    <div className="company-content-wrapper">
    <Container className="company-content">
      <Row>
        <Col>
          <p>
            Werkfeed was founded with a clear objective: to create an all-in-one platform that offers effective tools that simplify the job seeking journey. And we have been there for millions of job seekers every step of the way: from creating a CV and cover letter to searching for jobs and keeping track of your applications. We even have a dedicated blog to help you learn how to get ahead in your career and find the best match for you, whether it is a CV or a resume you need.
          </p>
          <p>
            Launched in 2024, our toolbox has helped tens of millions of job seekers throughout their job search. Today, with a dedicated team, Werkfeed is available in 21 languages and more than 200 countries – helping millions in their journey to find the job of their dreams. The Werkfeed brand follows the values we have as a team: user-centric, adaptive, transparent, and factual. We are here to assist job seekers in the best way possible, from A to Z – with reliable tools, easy steps, and comprehensive guides.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md="6">
          <h5>Werkfeed in numbers</h5>
          <ul>
            <li>15 million users worldwide</li>
            <li>1,712 articles for career guidance</li>
            <li>21 languages available</li>
          </ul>
        </Col>
        <Col md="6">
          <h5>Werkfeed by features</h5>
          <ul>
            <li>Access to jobs worldwide</li>
            <li>Easily track your applications</li>
            <li>Intuitive CV and cover letter builder</li>
            <li>AI-assisted suggestions to help you</li>
          </ul>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default CompanyContent
