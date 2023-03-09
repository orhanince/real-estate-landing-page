import { Button } from "react-bootstrap";
import styles from "../styles/components/listing.item.button.module.scss";
export const ListingItemButton = ({ onClick, bg, color, variant }) => {
  return (
    <Button className={styles.button} onClick={onClick} variant={variant}>
      Send Inquiry
    </Button>
  );
};
