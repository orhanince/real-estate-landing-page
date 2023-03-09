import styles from "./../styles/components/hero.module.scss";
import { Container } from "react-bootstrap";
export const Hero = () => {
  return (
    <section className={styles.hero}>
      <Container>
        <p>Hero section!</p>
      </Container>
    </section>
  );
};
