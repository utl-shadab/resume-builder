import React, { useState, useRef } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col,
  UncontrolledAccordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Resume.css';
import Skills from './Skills';

const SideForm = ({ handleButtonClick, fileInputRef, handleFileChange, setFirstName, setLastName , setDesignation , setEmail , setPhoneNumber , setAddress , setPincode , setCity , setEducation , setSchoolName , setStartMonth , setStartYear , setEndMonth , setEndYear , setPresent , setDescription }) => {
  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  return (
    <Container className="side-form">
      <Row className="form-header">


      </Row>
      <Form className="details-form">
        <UncontrolledAccordion defaultOpen="1" className="custom-accordion">
          <AccordionItem open={open} toggle={toggle}>
            <AccordionHeader targetId="1">Personal Information</AccordionHeader>
            <AccordionBody accordionId="1">
              <Row className="photo-upload">
                <div className="photo-placeholder"></div>
                <Button className="upload-button" onClick={handleButtonClick}>
                  <i className="fa fa-upload" aria-hidden="true"></i> Upload Photo
                </Button>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                />
              </Row>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="firstName">First Name</Label>
                    <Input type="text" name="firstName" id="firstName" onChange={(e) => setFirstName(e.target.value)} />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="lastName">Last Name</Label>
                    <Input type="text" name="lastName" id="lastName" onChange={(e) => setLastName(e.target.value)} />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
              </FormGroup>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="designation">Designation</Label>
                    <Input type="text" name="designation" id="designation" onChange={(e) => setDesignation(e.target.value)} />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="phoneNumber">Phone Number</Label>
                    <Input type="tel" name="phoneNumber" id="phoneNumber" onChange={(e) => setPhoneNumber(e.target.value)} />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label for="address">Address</Label>
                <Input type="textarea" name="address" id="address" onChange={(e) => setAddress(e.target.value)} />
              </FormGroup>
              <FormGroup>
                <Label for="pincode">Pincode</Label>
                <Input type="text" name="pincode" id="pincode" onChange={(e) => setPincode(e.target.value)} />
              </FormGroup>
              <FormGroup>
                <Label for="city">City</Label>
                <Input type="text" name="city" id="city" onChange={(e) => setCity(e.target.value)} />
              </FormGroup>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="2">Educational Details</AccordionHeader>
            <AccordionBody accordionId="2">
              <FormGroup>
                <Label for="education">Education</Label>
                <Input type="text" name="education" id="education" onChange={(e) => setEducation(e.target.value)} />
              </FormGroup>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="schoolName">School</Label>
                    <Input type="text" name="schoolName" id="schoolName" onChange={(e) => setSchoolName(e.target.value)} />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="city">City</Label>
                    <Input type="text" name="city" id="city" onChange={(e) => setCity(e.target.value)} />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={3}>
                  <FormGroup>
                    <Label for="startMonth">Start Date</Label>
                    <Input type="select" name="startMonth" id="startMonth" onChange={(e) => setStartMonth(e.target.value)}>
                      <option>Month</option>
                      {/* Add month options here */}
                    </Input>
                  </FormGroup>
                </Col>
                <Col md={3}>
                  <FormGroup>
                    <Label for="startYear" className="invisible">Year</Label>
                    <Input type="select" name="startYear" id="startYear" onChange={(e) => setStartYear(e.target.value)}>
                      <option>Year</option>
                      {/* Add year options here */}
                    </Input>
                  </FormGroup>
                </Col>
                <Col md={3}>
                  <FormGroup>
                    <Label for="endMonth">End Date</Label>
                    <Input type="select" name="endMonth" id="endMonth" onChange={(e) => setEndMonth(e.target.value)}>
                      <option>Month</option>
                      {/* Add month options here */}
                    </Input>
                  </FormGroup>
                </Col>
                <Col md={3}>
                  <FormGroup>
                    <Label for="endYear" className="invisible">Year</Label> 
                    <Input type="select" name="endYear" id="endYear" onChange={(e) => setEndYear(e.target.value)}>
                      <option>Year</option>
                      {/* Add year options here */}
                    </Input>
                  </FormGroup>
                </Col>
                <Col md={3}>
                  <FormGroup check>
                    <Label check>
                      <Input type="checkbox" name="present" id="present" onChange={(e) => setPresent(e.target.value)} />{' '}
                      Present
                    </Label>
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label for="description">Description</Label>
                <Input type="textarea" name="description" id="description" onChange={(e) => setDescription(e.target.value)} />
              </FormGroup>
              <div className="button-container">
                <Button color="danger" className="delete-button">
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </Button>
                <Button color="primary" className="done-button">Done</Button>
              </div>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="3">Employment</AccordionHeader>
            <AccordionBody accordionId="3">
              Employment form fields...
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="4">Skills</AccordionHeader>
            <AccordionBody accordionId="4">
              <Skills />
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="5">Languages</AccordionHeader>
            <AccordionBody accordionId="5">
              Languages form fields...
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="6">Hobbies</AccordionHeader>
            <AccordionBody accordionId="6">
              Hobbies form fields...
            </AccordionBody>
          </AccordionItem>
        </UncontrolledAccordion>
      </Form>
    </Container>
  );
};

export default SideForm;