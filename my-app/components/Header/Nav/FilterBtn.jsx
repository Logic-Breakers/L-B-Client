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
        className="w-fit h-[48px] rounded-xl border border-gray-300 hover:scale-[1.05] hover:shadow-cc active:scale-100 duration-[0.1s] flex flex-row items-center space-x-2 px-4"
      >
        <div>
          <FontAwesomeIcon icon={faSliders} />
        </div>
        <div className="text-sm w-[25px]">필터</div>
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
