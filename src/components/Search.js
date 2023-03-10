import { Button } from "react-bootstrap";
import styles from "./../styles/components/search.module.scss";

/**
 * Search component
 * @returns {JSX.Element}
 * @constructor
 */
export const Search = () => {
  const searchHandler = () => {
    alert("search");
  };
  return (
    <div className={styles.search}>
      <div className={styles.search__top}>
        <div
          className={`${styles.search__top__choose} ${styles.search__top__choose__active}`}
        >
          Buy
        </div>
        <div className={styles.search__top__choose}>Rent</div>
      </div>
      <div className={styles.search__content}>
        <div className={styles.search__content__container}>
          <div className={styles.search__content__input_group}>
            <label>Location</label>
            <input
              type={"text"}
              className={styles.search__content__location}
              value={"Manchester, UK"}
            />
          </div>
          <div className={styles.search__content__input_group}>
            <label>Type</label>
            <input
              type={"text"}
              className={styles.search__content__type}
              value={"Home"}
            />
          </div>
          <div className={styles.search__content__input_group}>
            <label>Price Range</label>
            <input
              type={"text"}
              className={styles.search__content__price}
              value={"£200 - £300"}
            />
          </div>
          <Button
            className={styles.search__button}
            onClick={() => searchHandler()}
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};
