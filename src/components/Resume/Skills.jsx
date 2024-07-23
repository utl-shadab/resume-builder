import React, { useState } from 'react';
import { Button, Input, Container, Row, Col } from 'reactstrap';
// import './Skills.css';

const Skills = () => {
  const [skills, setSkills] = useState([
    '[Area of certification] certified',
    'FLUENT IN [LANGUAGE]',
    'Planning',
    'Maintenance & Repair',
    'Data Entry',
    'Collaboration',
    'Flexible and Adaptable',
    'Troubleshooting',
    'Supervision and leadership',
    'Conflict Resolution',
    'Organizational Skills',
    'Customer Service',
    'MS Office',
    'Verbal Communication',
    'Dependable and Responsible',
    'Friendly, Positive Attitude',
    'First Aid/CPR'
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSkills, setSelectedSkills] = useState([]);

  const handleAddSkill = (skill) => {
    setSelectedSkills([skill, ...selectedSkills]);
  };

  const filteredSkills = skills.filter(skill =>
    skill.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="skills-container">
      <Input
        type="text"
        placeholder="Search by job title"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <div className="selected-skills">
        {selectedSkills.map((skill, index) => (
          <Button key={index} className="skill-button selected">
            {skill}
          </Button>
        ))}
      </div>
      <div className="skills-list">
        {filteredSkills.map((skill, index) => (
          <Row key={index} className="skill-row">
            <Col>
              <Button className="skill-button">
                {skill}
              </Button>
            </Col>
            <Col xs="auto">
              <Button className="add-button" onClick={() => handleAddSkill(skill)}>
                +
              </Button>
            </Col>
          </Row>
        ))}
      </div>
    </Container>
  );
};

export default Skills;