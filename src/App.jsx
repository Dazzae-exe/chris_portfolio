// imports
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  NavLink,
  RouterProvider,
} from "react-router-dom";

// pages
import ErrorPage from "./routes/ErrorPage";
import Home from "./routes/Home";
import About from "./routes/About";

// layout
import RootLayout from "./layouts/RootLayout";
import Contact from "./routes/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
