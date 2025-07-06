import React from 'react';
import { Accordion, Form, Button, Container } from 'react-bootstrap';

const AboutMe = () => {
  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">About Me</h2>

      <Accordion defaultActiveKey="0" alwaysOpen>
        {/* Question 1 */}
        <Accordion.Item eventKey="0">
          <Accordion.Header>1) What is most important to me in my life</Accordion.Header>
          <Accordion.Body>
            <Form.Group className="mb-3" controlId="formImportance">
              <Form.Control type="text" placeholder="Type your answer here..." />
            </Form.Group>
          </Accordion.Body>
        </Accordion.Item>

        {/* Question 2 */}
        <Accordion.Item eventKey="1">
          <Accordion.Header>2) People who are important to me</Accordion.Header>
          <Accordion.Body>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Person Name" className="mb-2" />
              <Form.Control type="text" placeholder="Their Relationship To Me" className="mb-2" />
              <Form.Control type="text" placeholder="Contact Details If Contact Allowed" className="mb-2" />
              <Form.Control type="text" placeholder="Why Are They Important" className="mb-2" />
            </Form.Group>
            <div className="text-primary mb-2" role="button">John Smith</div>
            <div className="text-primary" role="button">Add Another Person</div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      {/* Other Sections (collapsed-like list) */}
      <div className="mt-4">
        <div><strong>3)</strong> Emergency Information <span className="text-muted">?</span></div>
        <div><strong>4)</strong> How I communicate, and how to communicate with me <span className="text-muted">?</span></div>
        <div><strong>5)</strong> My wellness in general <span className="text-muted">?</span></div>
      </div>
    </Container>
  );
};

export default AboutMe;
