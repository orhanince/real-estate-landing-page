import { Button } from "react-bootstrap";
import styles from "../styles/components/listing.item.button.module.scss";
import PropTypes from "prop-types";

/**
 * Listing item button component
 * @param onClick
 * @param bg
 * @param color
 * @param variant
 * @returns {JSX.Element}
 * @constructor
 */
export const ListingItemButton = ({ onClick, bg, color, variant }) => {
  return (
    <Button className={styles.button} onClick={onClick} variant={variant}>
      Send Inquiry
    </Button>
  );
};

/**
 * Define prop types of ListingItemButton component.
 * @typedef {{text: string, onClick: Function, bg: string, color: string, variant}}
 * @type {{onClick: Validator<NonNullable<(...args: any[]) => any>>, text: Validator<NonNullable<string>>}}
 */
ListingItemButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  bg: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};
