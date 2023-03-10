import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { ContactForm } from "./index";
import styles from "./../styles/components/contact.module.scss";

/**
 * Contact
 * @returns {JSX.Element}
 * @constructor
 */
export const Contact = () => {
  return (
    <section className={styles.contact}>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <img
              src="/images/contact_image.jpg"
              alt="contact"
              style={{ maxHeight: 400 }}
            />
          </Col>
          <Col xs={12} md={8}>
            <h1>Find the right one for you!</h1>
            <p>Schedule a consultation with an agent.</p>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
