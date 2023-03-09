import { Card } from "react-bootstrap";
import PropTypes from "prop-types";
import { AppButton, ListingItemButton } from "./index";
import { COLORS, VARIANTS } from "../enums";
import styles from "./../styles/components/listing.item.module.scss";
/**
 * Define listing item component.
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export const ListingItem = (props) => {
  const { item } = props || {};
  return (
    <Card className={styles.card}>
      <Card.Img variant="top" src={item.src} className={styles.card__img} />
      <Card.Body>
        <Card.Title className={styles.card__title}>{item.name}</Card.Title>
        <Card.Text className={styles.card__text}>
          <span className={styles.card__location}>{item.location}</span>
          <span className={styles.card__price}>
            {item.currencySymbol}
            {item.price}
            <span className={styles.card__area}>
              <span>{item.area}</span>
              {item.areaSymbol}
              {item.areaDesc}
            </span>
          </span>
        </Card.Text>
        <ListingItemButton
          variant={VARIANTS.OUTLINE}
          color={COLORS.WHITE}
          bg={COLORS.GREEN}
        />
      </Card.Body>
    </Card>
  );
};
