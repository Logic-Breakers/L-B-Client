import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed } from "@fortawesome/free-solid-svg-icons";

export default function RoomsAccommodationPlaceItem({ title, detail }) {
  return (
    <div className="border rounded-lg p-6 ">
      <div className="mb-4 text-2xl">
        <FontAwesomeIcon icon={faBed} />
      </div>
      <div className="text-lg font-semibold">{title}</div>
      <div className="text-gray-500">{detail}</div>
    </div>
  );
}
