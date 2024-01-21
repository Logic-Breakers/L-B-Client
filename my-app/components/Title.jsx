import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAirbnb } from "@fortawesome/free-brands-svg-icons";

export default function Title({ text }) {
  return (
    <Head>
      <title>{text}</title>
      {/* <FontAwesomeIcon icon={faAirbnb}/> */}
    </Head>
  );
}
