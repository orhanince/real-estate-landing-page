import styles from "./../styles/components/app.button.module.scss";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

/**
 * App Button component
 * @param text
 * @param onClick
 * @returns {JSX.Element}
 * @constructor
 */
export const AppButton = ({ text, onClick, bg, color, variant }) => {
  return (
    <Button
      className={styles.button}
      onClick={onClick}
      style={{ background: bg, color: color }}
      variant={variant}
    >
      {text}
    </Button>
  );
};

/**
 * Define prop types of AppButton component.
 * @typedef {{text: string, onClick: Function, bg: string, color: string, variant}}
 * @type {{onClick: Validator<NonNullable<(...args: any[]) => any>>, text: Validator<NonNullable<string>>}}
 */
AppButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
