import PropTypes from "prop-types";
import styles from "./../styles/components/section.title.module.scss";
/**
 * Section title component
 * @returns {JSX.Element}
 * @constructor
 */
export const SectionTitle = ({ title }) => {
  return <div className={styles.sectionTitle}>{title}</div>;
};

/**
 * Define prop types of SectionTitle component.
 * @typedef {Object} SectionNamePropTypes
 * @type {{name: Validator<NonNullable<string>>}}
 */
SectionTitle.propTypes = {
  name: PropTypes.string.isRequired,
};
