import { ThemeProvider } from "react-bootstrap";
import { MainLayout } from "./layouts/MainLayout";
import { Header, Hero, About, Focus, Testimonials } from "./components";

function App() {
  return (
    <ThemeProvider>
      <MainLayout>
        <Header />
        <Hero />
        <About />
        <Focus />
        <Testimonials />
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
