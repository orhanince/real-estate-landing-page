import styles from "./../styles/components/hero.module.scss";
import { Container } from "react-bootstrap";
import { Search } from "./index";
export const Hero = () => {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.hero__content}>
          <h1 style={{}}>
            Best eco-friendly <br />
            homes, just for you
          </h1>
          <Search />
        </div>
      </Container>
    </section>
  );
};
