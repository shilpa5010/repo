import React, { useState } from 'react';
import { Accordion, Container, Form, Modal, Button } from 'react-bootstrap';
import { FaQuestionCircle } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const InfoModal = ({ show, onHide, title, content }: any) => (
  <Modal show={show} onHide={onHide} centered>
    <Modal.Header closeButton>
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>{content}</Modal.Body>
  </Modal>
);

const AboutMe = () => {
  const [modalData, setModalData] = useState({ show: false, title: '', content: '' });
  const [activeKeys, setActiveKeys] = useState<string[]>(['1', '2', '3', '4', '5']);

  const handleShowModal = (title: string, content: string) => {
    setModalData({ show: true, title, content });
  };

  const toggleAll = () => {
    if (activeKeys.length === 5) {
      setActiveKeys([]);
    } else {
      setActiveKeys(['1', '2', '3', '4', '5']);
    }
  };

  const titles: Record<number, string> = {
    1: 'What is most important to me in my life',
    2: 'People who are important to me',
    3: 'Emergency Information',
    4: 'How I communicate, and how to communicate with me',
    5: 'My wellness in general',
  };

  const modalContent: Record<number, string> = {
    1: 'Describe your core values, beliefs, or priorities in life.',
    2: 'List people who are important to you and why.',
    3: 'Add details like allergies, emergency contacts, etc.',
    4: 'Explain how people should communicate with you.',
    5: 'Summarize your physical and mental wellness needs.',
  };

  return (
    <Container className="my-4 px-3">
      <h2 className="text-center mb-4">About Me</h2>
      
      <div className="text-end mb-3">
        <Button variant="outline-primary" onClick={toggleAll} size="sm">
          {activeKeys.length === 5 ? 'Collapse All' : 'Expand All'}
        </Button>
      </div>

      {/* Responsive styling */}
      <style>{`
        .timeline {
          position: relative;
          padding-left: 40px;
        }
        .timeline::before {
          content: '';
          position: absolute;
          left: 10px;
          top: 0;
          bottom: 0;
          width: 4px;
          background-color: #ff6a4d;
        }
        .circle-number {
          position: absolute;
          left: 0;
          width: 20px;
          height: 20px;
          background-color: #ff6a4d;
          border-radius: 50%;
          color: white;
          font-weight: bold;
          text-align: center;
          line-height: 20px;
          font-size: 14px;
        }
        .accordion-button::after {
          display: none !important;
        }
        .header-wrapper {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          flex-wrap: wrap;
          width: 100%;
        }

        @media (max-width: 576px) {
          .header-wrapper {
            flex-direction: column;
            align-items: flex-start;
          }
          .timeline {
            padding-left: 50px;
          }
          .circle-number {
            width: 28px;
            height: 28px;
            line-height: 28px;
            font-size: 12px;
          }
        }
      `}</style>

      <div className="timeline">
        <Accordion activeKey={activeKeys} alwaysOpen>
          {[1, 2, 3, 4, 5].map((num) => (
            <Accordion.Item eventKey={num.toString()} key={num} className="mb-2">
              <div className="circle-number">{num}</div>
              <Accordion.Header
                onClick={() =>
                  setActiveKeys((prev) =>
                    prev.includes(num.toString())
                      ? prev.filter((key) => key !== num.toString())
                      : [...prev, num.toString()]
                  )
                }
              >
                <div className="header-wrapper ms-2">
                  <span className="fw-semibold">{titles[num]}</span>
                  <FaQuestionCircle
                    className="text-primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleShowModal(titles[num], modalContent[num]);
                    }}
                    role="button"
                  />
                </div>
              </Accordion.Header>
              <Accordion.Body>
                {num === 1 && (
                  <Form.Control type="text" placeholder="Type your answer here..." />
                )}

                {num === 2 && (
                  <>
                    <Form.Control type="text" placeholder="Person Name" className="mb-2" />
                    <Form.Control type="text" placeholder="Their Relationship To Me" className="mb-2" />
                    <Form.Control type="text" placeholder="Contact Details If Contact Allowed" className="mb-2" />
                    <Form.Control type="text" placeholder="Why Are They Important" className="mb-2" />
                    <div className="text-primary" role="button">John Smith</div>
                    <div className="text-primary" role="button">Add Another Person</div>
                  </>
                )}

                {num >= 3 && (
                  <Form.Control type="text" placeholder="Add details here..." />
                )}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>

      {/* Info Modal */}
      <InfoModal
        show={modalData.show}
        onHide={() => setModalData({ ...modalData, show: false })}
        title={modalData.title}
        content={modalData.content}
      />
    </Container>
  );
};

export default AboutMe;
