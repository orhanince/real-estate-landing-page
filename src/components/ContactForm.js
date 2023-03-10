import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import styles from "./../styles/components/contact.form.module.scss";
import { VARIANTS } from "../enums";
export const ContactForm = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    /**if (name && lastName && email && phone && message) {
      alert(
        `Your message has been sent to ${name} ${lastName} at ${email}.`
      );
    }*/
    alert("e");
  };

  return (
    <Form onSubmit={handleSubmit} className={styles.contactForm}>
      <Row>
        <Col>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="First name"
              value={name}
              className={styles.input}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Last name"
              value={lastName}
              className={styles.input}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group>
            <Form.Control
              type="email"
              placeholder="Email address"
              className={styles.input}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Phone number"
              className={styles.input}
            />
          </Form.Group>
        </Col>
      </Row>
      <Form.Group>
        <Form.Control as="textarea" rows={3} className={styles.input} />
        <Form.Text className="text-muted">
          We don’t sell your email and spam.
        </Form.Text>
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        className={styles.submitButton}
        variant={VARIANTS.OUTLINE}
      >
        Request Information
      </Button>
    </Form>
  );
};
