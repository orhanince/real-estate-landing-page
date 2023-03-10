import { Container, Row, Col } from "react-bootstrap";
import styles from "./../styles/components/footer.module.scss";
import { HiLocationMarker, HiPhone, HiMail } from "react-icons/hi";

/**
 * Footer
 * @returns {JSX.Element}
 * @constructor
 */
export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <div className={styles.footer__company_info}>
              <h4>Company Name</h4>
              <span>
                <HiLocationMarker
                  className={styles.footer__company_info__icon}
                />
                22 Oxtail house, Greater Manchester, UK
              </span>
              <span>
                <HiPhone className={styles.footer__company_info__icon} />
                +44 123 456 789
              </span>
              <span>
                <HiMail className={styles.footer__company_info__icon} />
                contact@smdm.com
              </span>
            </div>
          </Col>
          <Col xs={12} md={8}>
            <Row>
              <Col>
                <h4>Quick Links</h4>
                <ul className={styles.linkList}>
                  <li>
                    <a href="https://www.linkedin.com/in/joshua-harris-10b10b10b/">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/joshua-harris-10b10b10b/">
                      Our Listings
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/joshua-harris-10b10b10b/">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/joshua-harris-10b10b10b/">
                      Blog
                    </a>
                  </li>
                </ul>
              </Col>
              <Col>
                <h4>Legal Links</h4>
                <ul className={styles.linkList}>
                  <li>
                    <a href="https://www.linkedin.com/in/joshua-harris-10b10b10b/">
                      Terms of Use
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/joshua-harris-10b10b10b/">
                      Conditions of Use
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/joshua-harris-10b10b10b/">
                      Policy
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/joshua-harris-10b10b10b/">
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </Col>
              <Col>
                <h4>Social Media</h4>
                <ul className={styles.linkList}>
                  <li>
                    <a href="https://www.linkedin.com/in/joshua-harris-10b10b10b/">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/joshua-harris-10b10b10b/">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/joshua-harris-10b10b10b/">
                      YouTube
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/joshua-harris-10b10b10b/">
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
