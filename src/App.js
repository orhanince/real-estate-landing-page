import { ThemeProvider } from "react-bootstrap";
import { MainLayout } from "./layouts/MainLayout";
import {
  Header,
  Hero,
  About,
  Focus,
  Testimonials,
  Contact,
} from "./components";

function App() {
  return (
    <ThemeProvider>
      <MainLayout>
        <Header />
        <Hero />
        <About />
        <Focus />
        <Testimonials />
        <Contact />
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
