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
// import 'bootstrap/dist/css/bootstrap.min.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './Resume.css';
import Skills from './Skills';

const SideForm = ({ handleButtonClick, fileInputRef, handleFileChange, setFirstName, setLastName , setDesignation , setEmail , setPhoneNumber , setAddress , setPincode , setCity , setEducation , setSchoolName , setStartMonth , setStartYear , setEndMonth , setEndYear , setPresent , setDescription }) => {
  const [open, setOpen] = useState('1');
  const [educationFields, setEducationFields] = useState([{ id: 1 }]);
  const [experienceFields, setExperienceFields] = useState([{ id: 1 }]);
  const [skills, setSkills] = useState([{ id: 1, skill: '', level: '' }]);
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  const addEducationField = () => {
    setEducationFields([...educationFields, { id: educationFields.length + 1 }]);
  };
  const addExperienceField = () => {
    setExperienceFields([...experienceFields, { id: experienceFields.length + 1 }]);
  };
  const addSkillField = () => {
    setSkills([...skills, { id: skills.length + 1, skill: '', level: '' }]);
  };

  const handleSkillChange = (id, field, value) => {
    setSkills(skills.map(skill => skill.id === id ? { ...skill, [field]: value } : skill));
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
            {educationFields.map((field, index) => (
                <div key={field.id}>
                  <FormGroup>
                    <Label for={`education-${field.id}`}>Education</Label>
                    <Input type="text" name={`education-${field.id}`} id={`education-${field.id}`} onChange={(e) => setEducation(e.target.value)} />
                  </FormGroup>
                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label for={`schoolName-${field.id}`}>School</Label>
                        <Input type="text" name={`schoolName-${field.id}`} id={`schoolName-${field.id}`} onChange={(e) => setSchoolName(e.target.value)} />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for={`city-${field.id}`}>City</Label>
                        <Input type="text" name={`city-${field.id}`} id={`city-${field.id}`} onChange={(e) => setCity(e.target.value)} />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={3}>
                      <FormGroup>
                        <Label for={`startMonth-${field.id}`}>Start Date</Label>
                        <Input type="select" name={`startMonth-${field.id}`} id={`startMonth-${field.id}`} onChange={(e) => setStartMonth(e.target.value)}>
                          <option>Month</option>
                          {/* Add month options here */}
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md={3}>
                      <FormGroup>
                        <Label for={`startYear-${field.id}`} className="invisible">Year</Label>
                        <Input type="select" name={`startYear-${field.id}`} id={`startYear-${field.id}`} onChange={(e) => setStartYear(e.target.value)}>
                          <option>Year</option>
                          {/* Add year options here */}
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md={3}>
                      <FormGroup>
                        <Label for={`endMonth-${field.id}`}>End Date</Label>
                        <Input type="select" name={`endMonth-${field.id}`} id={`endMonth-${field.id}`} onChange={(e) => setEndMonth(e.target.value)}>
                          <option>Month</option>
                          {/* Add month options here */}
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md={3}>
                      <FormGroup>
                        <Label for={`endYear-${field.id}`} className="invisible">Year</Label> 
                        <Input type="select" name={`endYear-${field.id}`} id={`endYear-${field.id}`} onChange={(e) => setEndYear(e.target.value)}>
                          <option>Year</option>
                          {/* Add year options here */}
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md={12}>
                      <FormGroup check>
                        <Label check>
                          <Input type="checkbox" name={`present-${field.id}`} id={`present-${field.id}`} onChange={(e) => setPresent(e.target.value)} />{' '}
                          Present
                        </Label>
                      </FormGroup>
                    </Col>
                  </Row>
                  <FormGroup>
                    <Label for={`description-${field.id}`}>Description</Label>
                    <CKEditor
                      editor={ClassicEditor}
                      data=""
                      onChange={(_, editor) => {
                        const data = editor.getData();
                        setDescription(data);
                      }}
                      config={{
                        height: '200px'
                      }}
                      className="custom-editor"
                    />
                  </FormGroup>
                </div>
              ))}
              <div className="add-more-button">
                <Button color="light" className="add-more-button border" onClick={addEducationField}>
                  <i className="fa fa-plus" aria-hidden="true"></i> Add employment
                </Button>
              </div>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="3">Experience</AccordionHeader>
            <AccordionBody accordionId="3">
            {experienceFields.map((field, index) => (
                <div key={field.id}>
                  <FormGroup>
                    <Label for={`position-${field.id}`}>Position</Label>
                    <Input type="text" name={`position-${field.id}`} id={`position-${field.id}`} onChange={(e) => setDesignation(e.target.value)} />
                  </FormGroup>
                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label for={`employer-${field.id}`}>Employer</Label>
                        <Input type="text" name={`employer-${field.id}`} id={`employer-${field.id}`} onChange={(e) => setSchoolName(e.target.value)} />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for={`city-${field.id}`}>City</Label>
                        <Input type="text" name={`city-${field.id}`} id={`city-${field.id}`} onChange={(e) => setCity(e.target.value)} />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={3}>
                      <FormGroup>
                        <Label for={`startMonth-${field.id}`}>Start Date</Label>
                        <Input type="select" name={`startMonth-${field.id}`} id={`startMonth-${field.id}`} onChange={(e) => setStartMonth(e.target.value)}>
                          <option>Month</option>
                          {/* Add month options here */}
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md={3}>
                      <FormGroup>
                        <Label for={`startYear-${field.id}`} className="invisible">Year</Label>
                        <Input type="select" name={`startYear-${field.id}`} id={`startYear-${field.id}`} onChange={(e) => setStartYear(e.target.value)}>
                          <option>Year</option>
                          {/* Add year options here */}
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md={3}>
                      <FormGroup>
                        <Label for={`endMonth-${field.id}`}>End Date</Label>
                        <Input type="select" name={`endMonth-${field.id}`} id={`endMonth-${field.id}`} onChange={(e) => setEndMonth(e.target.value)}>
                          <option>Month</option>
                          {/* Add month options here */}
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md={3}>
                      <FormGroup>
                        <Label for={`endYear-${field.id}`} className="invisible">Year</Label>
                        <Input type="select" name={`endYear-${field.id}`} id={`endYear-${field.id}`} onChange={(e) => setEndYear(e.target.value)}>
                          <option>Year</option>
                          {/* Add year options here */}
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md={12}>
                      <FormGroup check>
                        <Label check>
                          <Input type="checkbox" name={`present-${field.id}`} id={`present-${field.id}`} onChange={(e) => setPresent(e.target.value)} />{' '}
                          Present
                        </Label>
                      </FormGroup>
                    </Col>
                  </Row>
                  <FormGroup>
                    <Label for={`description-${field.id}`}>Description</Label>
                    <CKEditor
                      editor={ClassicEditor}
                      data=""
                      onChange={(_, editor) => {
                        const data = editor.getData();
                        setDescription(data);
                      }}
                      config={{
                        height: '200px'
                      }}
                      className="custom-editor"
                    />
                  </FormGroup>
                </div>
              ))}
              <div className="add-more-button">
                <Button color="light" className="add-more-button border" onClick={addExperienceField}>
                  <i className="fa fa-plus" aria-hidden="true"></i> Add experience
                </Button>
              </div>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="4">Skills</AccordionHeader>
            <AccordionBody accordionId="4">
            {skills.map((skill, index) => (
                <div key={skill.id}>
                  <FormGroup>
                    <Label for={`skill-${skill.id}`}>Skill</Label>
                    <Input
                      type="text"
                      name={`skill-${skill.id}`}
                      id={`skill-${skill.id}`}
                      value={skill.skill}
                      onChange={(e) => handleSkillChange(skill.id, 'skill', e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for={`level-${skill.id}`}>Level</Label>
                    <Input
                      type="select"
                      name={`level-${skill.id}`}
                      id={`level-${skill.id}`}
                      value={skill.level}
                      onChange={(e) => handleSkillChange(skill.id, 'level', e.target.value)}
                    >
                      <option value="">Make a choice</option>
                      <option value="Beginner">Beginner</option>
                      <option value="Moderate">Moderate</option>
                      <option value="Good">Good</option>
                      <option value="Very Good">Very Good</option>
                      <option value="Excellent">Excellent</option>
                    </Input>
                  </FormGroup>
                </div>
              ))}
              <div className="add-more-button">
                <Button color="light" className="add-more-button border" onClick={addSkillField}>
                  <i className="fa fa-plus" aria-hidden="true"></i> Add skill
                </Button>
              </div>
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