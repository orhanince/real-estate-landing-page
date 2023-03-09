import { Card } from "react-bootstrap";
import styles from "./../styles/components/focus.item.module.scss";
export const FocusItem = (props) => {
  const { focus } = props || {};
  return (
    <Card className={styles.card}>
      <Card.Body>
        <Card.Img src={focus.src} className={styles.card__img} />
        <Card.Title className={styles.card__title}>{focus.title}</Card.Title>
        <Card.Text className={styles.card__text}>{focus.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};
