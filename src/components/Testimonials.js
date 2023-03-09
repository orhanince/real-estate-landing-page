import { Container, Row, Col } from "react-bootstrap";
import { ExploreButton, SectionTitle, Testimonial } from "./index";
import styles from "../styles/components/testimonials.module.scss";
import { COLORS, VARIANTS } from "../enums";
const testimonials = [
  {
    title: "Dream house isn’t dream anymore",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ante quis pellentesque nunc duis convallis. Viverra erat egestas cras dapibus.",
    name: "John Doe",
    job: "CEO, Stfags Media",
    img: "/images/testimonial_first.jpg",
  },
  {
    title: "The best environmentally conscious company ever",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ante quis pellentesque nunc duis convallis. Viverra erat egestas cras dapibus.",
    name: "Anna Smith",
    job: "Human Resources",
    img: "/images/testimonial_second.jpg",
  },
  {
    title: "He keeps his client’s best interests in sharp focus",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ante quis pellentesque nunc duis convallis. Viverra erat egestas cras dapibus.",
    name: "Sadra Kanova",
    job: "Mom of 4",
    img: "/images/testimonial_three.png",
  },
];
export const Testimonials = () => {
  const exploreButtonHandler = () => {
    window.location.href = "/explore";
  };
  return (
    <section className={styles.testimonials}>
      <Container>
        <Row>
          <div className={styles.testimonials__top}>
            <SectionTitle title={"CUSTOMER TESTIMONIAL"} />
            <ExploreButton
              onClick={exploreButtonHandler}
              text={"See More"}
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
            What do people say about us?
          </h1>
        </Row>
        <Row>
          {testimonials &&
            testimonials.map((testimonial, index) => (
              <Col xs={4}>
                <Testimonial key={index} testimonial={testimonial} />
              </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
};
