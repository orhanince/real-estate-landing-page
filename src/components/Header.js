import { Container, Nav, Navbar } from "react-bootstrap";
import { AppButton } from "./AppButton";
import { COLORS, VARIANTS } from "../enums";
import styles from "./../styles/components/header.module.scss";
export const Header = () => {
  const clickLogin = () => {
    alert("Login!");
  };
  const clickRegister = () => {
    alert("Register!");
  };
  return (
    <header className={styles.header}>
      <Navbar
        className={"transparent"}
        expand="lg"
        style={{
          position: "relative",
          top: 40,
        }}
      >
        <Container>
          <Navbar.Brand
            href="#home"
            style={{
              color: COLORS.WHITE,
            }}
          >
            Logo
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            style={{
              display: "flex",
              justifyContent: "space-between",
              position: "relative",
            }}
          >
            <Nav
              className="me-auto justify-content-end"
              style={{ width: "100%" }}
            >
              <Nav.Link href="#home" className={styles.menuLink}>
                Home
              </Nav.Link>
              <Nav.Link href="#link" className={styles.menuLink}>
                Property
              </Nav.Link>
              <Nav.Link href="#link" className={styles.menuLink}>
                About
              </Nav.Link>
              <Nav.Link href="#link" className={styles.menuLink}>
                Service
              </Nav.Link>
              <Nav.Link href="#link" className={styles.menuLink}>
                Contract
              </Nav.Link>
            </Nav>
            <span
              style={{
                marginRight: 10,
              }}
            >
              <AppButton
                text={"Login"}
                onClick={() => clickLogin()}
                bg={COLORS.GREEN}
                color={COLORS.WHITE}
                variant={VARIANTS.OUTLINE}
              />
            </span>
            <span>
              <AppButton
                text={"Register"}
                onClick={() => clickRegister()}
                bg={COLORS.WHITE}
                color={COLORS.GREEN}
                variant={VARIANTS.OUTLINE}
              />
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
