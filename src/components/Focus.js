import { Container, Row, Col } from "react-bootstrap";
import { ExploreButton, FocusItem, SectionTitle } from "./index";
import styles from "../styles/components/focus.module.scss";
import { COLORS, VARIANTS } from "../enums";
const focuses = [
  {
    src: "/images/heart.png",
    title: "Comfortable",
    description:
      "Enjoy lifestyle amenities designed to provide every homeowners modern comfort, a stone's throw away from schools, churches, and hospitals.",
  },
  {
    src: "/images/check.png",
    title: "Thermal insulation",
    description:
      "Insulation is essential to avoid losing energy and reduce consumption. It allows heat to be better stored whilst improving the comfort for residents.",
  },
  {
    src: "/images/star.png",
    title: "Bioclimatic houses",
    description:
      "Bioclimatic houses are identified by using natural resources from their environment. The geographical position of the home is essential to us",
  },
  {
    src: "/images/price.png",
    title: "Best price",
    description:
      "Not sure what you should be charging for your property? Let us do the numbers for you—contact us today for a free rental appraisal on your home.",
  },
  {
    src: "/images/location.png",
    title: "Construction",
    description:
      "The selected materials are natural, recyclable and non-pollutant;\n" +
      "reduce any losses of energy, and to save money.\n",
  },
  {
    src: "/images/triangle.png",
    title: "Design",
    description:
      "Our homes have a unique range of designs, the houses are all in harmony with its surrounding from the moment the blueprints are drawn up.",
  },
];
export const Focus = () => {
  const exploreButtonHandler = () => {
    window.location.href = "/explore";
  };
  return (
    <section className={styles.focus}>
      <Container>
        <Row>
          <div className={styles.focus__top}>
            <SectionTitle title={"FOCUS"} />
            <ExploreButton
              onClick={exploreButtonHandler}
              text={"Explore Blog"}
              bg={COLORS.FADED_GREEN}
              variant={VARIANTS.OUTLINE}
            />
          </div>
          <h1
            style={{
              fontSize: "36px",
              fontWeight: "600",
            }}
          >
            To produce the least amount of pollutants, reduce any losses of
            energy, <br /> and to save money.
          </h1>
        </Row>
        <Row>
          {focuses &&
            focuses.map((focus, index) => (
              <Col xs={4}>
                <FocusItem key={index} focus={focus} />
              </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
};
