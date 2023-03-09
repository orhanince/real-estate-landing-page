import { Card, Image } from "react-bootstrap";
import { BsQuote } from "react-icons/bs";
import styles from "./../styles/components/testimonial.module.scss";
export const Testimonial = (props) => {
  const { testimonial } = props || {};
  return (
    <Card className={styles.testimonial}>
      <Card.Body>
        <BsQuote
          fontSize={45}
          style={{
            margin: "0px 0px 0px -6px",
          }}
        />
        <Card.Title className={styles.testimonial__title}>
          {testimonial.title}
        </Card.Title>
        <Card.Text className={styles.testimonial__text}>
          {testimonial.description}
          <div className={styles.testimonial__person}>
            <Image
              className={styles.testimonial__img}
              roundedCircle
              src={testimonial.img}
              alt={testimonial.name}
            />
            <div className={styles.testimonial__info}>
              <span>{testimonial.name}</span>
              <span>{testimonial.job}</span>
            </div>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
