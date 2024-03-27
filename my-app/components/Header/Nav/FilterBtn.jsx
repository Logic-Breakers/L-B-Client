import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import FilterModal from "../Modals/FilterModal";

export default function FilterBtn() {
  const [showFilterModal, setShowFilterModal] = useState(false);

  const openFilterModal = () => {
    setShowFilterModal(true);
  };

  const closeFilterModal = () => {
    setShowFilterModal(false);
  };

  return (
    <>
      <button
        onClick={openFilterModal}
        type="button"
        className="flex flex-row items-center space-x-2 px-4 h-[48px] rounded-xl border border-gray-300 hover:scale-[1.05] hover:shadow-cc active:scale-100 duration-[0.1s]"
      >
        <FontAwesomeIcon icon={faSliders} />
        <span className="text-sm w-[30px] font-semibold">필터</span>
      </button>

      {showFilterModal && (
        <FilterModal
          closeFilterModal={closeFilterModal}
          showFilterModal={showFilterModal}
        />
      )}
    </>
  );
}
