import styles from "./../styles/components/explore.button.module.scss";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { COLORS } from "../enums";
/**
 * Explore Button component
 * @param text
 * @param onClick
 * @returns {JSX.Element}
 * @constructor
 */
export const ExploreButton = ({ text, onClick, bg, color, variant }) => {
  return (
    <Button
      className={styles.content}
      onClick={onClick}
      style={{ background: bg, color: color }}
      variant={variant}
    >
      <span className={styles.content__text}>{text}</span>
      <MdOutlineKeyboardArrowRight color={COLORS.FADED_GREEN} />
    </Button>
  );
};

/**
 * Define prop types of ExploreButton component.
 * @type {{onClick: Validator<NonNullable<(...args: any[]) => any>>, text: Validator<NonNullable<string>>}}
 */
ExploreButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
