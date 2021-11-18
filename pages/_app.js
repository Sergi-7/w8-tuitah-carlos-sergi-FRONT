import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";
import Nav from "../components/Nav/Nav";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav></Nav>
      <Component {...pageProps} />
    </>
  );
}
