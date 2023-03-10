import { Container, Row, Col } from "react-bootstrap";
import { ExploreButton, ListingItem, SectionTitle } from "./../components";
import styles from "./../styles/components/about.module.scss";
import { COLORS, VARIANTS } from "../enums";
// Define listings
const listings = [
  {
    src: "/images/marten_house_image.jpg",
    name: "Marten House",
    location: "Lagos, Nigeria",
    currencySymbol: "$",
    price: 25000,
    areaSymbol: "m²",
    area: 360,
    areaDesc: "Living Area",
  },
  {
    src: "/images/la_casa_en_image.jpg",
    name: "La Casa En",
    location: "Paris, France",
    currencySymbol: "$",
    price: 55000,
    areaSymbol: "m²",
    area: 450,
    areaDesc: "Living Area",
  },
  {
    src: "/images/chrysler_front_image.jpg",
    name: "Chrysler Front",
    location: "Manchester, UK",
    currencySymbol: "$",
    price: 40000,
    areaSymbol: "m²",
    area: 360,
    areaDesc: "Living Area",
  },
];
/**
 * About
 * @returns {JSX.Element}
 * @constructor
 */
export const About = () => {
  const exploreButtonHandler = () => {
    alert("Explore Button Clicked!");
  };
  return (
    <section className={styles.about}>
      <Container>
        <div className={styles.about__top}>
          <SectionTitle title={"ABOUT US"} />
          <ExploreButton
            onClick={exploreButtonHandler}
            text={"See our listings"}
            bg={COLORS.FADED_GREEN}
            variant={VARIANTS.OUTLINE}
          />
        </div>

        <h1>We provide the best energy-efficient homes</h1>
        <p>
          There are an increasing number of people in the UK who are more
          conscious of their environmental impact and wishing to take action.
          However, new technologies and construction methods mean that the
          concept of an “eco-friendly home” is constantly evolving.
        </p>
        <Row>
          {listings &&
            listings.map((listing, index) => (
              <Col>
                <ListingItem key={index} item={listing} />
              </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
};
