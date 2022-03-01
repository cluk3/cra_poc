import "@fontsource/raleway/400.css";
import "@fontsource/open-sans/700.css";
import theme from "./theme";

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import {
  ChakraProvider,
  BreadcrumbItem,
  Breadcrumb,
  Container,
  Box,
  Spinner,
} from "@chakra-ui/react";

const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Contacts = React.lazy(() => import("./pages/Contacts"));

export default function App() {
  return (
    <Router>
      <ChakraProvider theme={theme}>
        <Container>
          <Box>
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/">Home</Link>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <Link to="/about">About</Link>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <Link to="/contacts">Contacts</Link>
              </BreadcrumbItem>
            </Breadcrumb>
          </Box>

          <React.Suspense fallback={<Spinner size="xl" />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contacts" element={<Contacts />} />
            </Routes>
          </React.Suspense>
        </Container>
      </ChakraProvider>
    </Router>
  );
}
