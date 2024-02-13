import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAirbnb } from "@fortawesome/free-brands-svg-icons";

export default function Logo() {
  return (
    <Link
      href={"/"}
      className="flex flex-row items-center gap-[4px] text-[var(--brand-color)] font-bold "
    >
      <span className="text-[36px]">
        <FontAwesomeIcon icon={faAirbnb} />
      </span>
      <span className="hidden bnb_xl:block text-[24px] font-[600]">airbnb</span>
    </Link>
  );
}
