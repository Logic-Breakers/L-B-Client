import PostCode from "react-daum-postcode";
import { useState } from "react";

export default function Address({ addrNum, setAddrNum, addr, setAddr }) {
  // const [addrNum, setAddrNum] = useState("우편번호");
  // const [addr, setAddr] = useState("주소");

  const [showAddrModal, setShowAddrModal] = useState(false);

  const openAddrModal = () => {
    setShowAddrModal(true);
  };

  const closeAddrModal = () => {
    setShowAddrModal(false);
  };

  const handleComplete = async (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    const { addressType, bname, buildingName, zonecode } = data;
    console.log("data", data);
    console.log("data.address", data.address);
    console.log("data.zonecode", data.zonecode);

    if (addressType === "R") {
      if (bname !== "") {
        extraAddress += bname;
      }
      if (buildingName !== "") {
        extraAddress += `${extraAddress !== "" && ", "}${buildingName}`;
      }
      fullAddress += `${extraAddress !== "" ? ` ${extraAddress}` : ""}`;
    }
    setAddrNum(zonecode);
    setAddr(fullAddress);

    setShowAddrModal(false);
  };
  return (
    <div>
      <div className="flex flex-row gap-x-3 mb-3">
        <div className="flex flex-row justify-center items-center border-[1px] border-solid border-[#cccccc] rounded-md w-[100px] h-[55px] text-gray-600 pointer-events-none">
          {addrNum}
        </div>
        <button
          onClick={openAddrModal}
          type="button"
          className="bg-gray-300 rounded-md w-fit h-[55px] px-4 py-2 hover:bg-gray-400 active:bg-gray-300"
        >
          주소 찾기
        </button>
        {showAddrModal && (
          <div
            onClick={closeAddrModal}
            className="fixed top-0 left-0 w-full h-full z-[101] bg-[var(--modal-outside-bg)]"
          >
            <PostCode
              onComplete={handleComplete}
              className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bnb_md_xl:max-w-[600px] bnb_sm:max-w-[85%] z-[1000]"
            />
          </div>
        )}
      </div>
      <div className="flex flex-row items-center border-[1px] border-solid border-[#cccccc] rounded-md w-full h-[55px] px-4 text-gray-600">
        {addr}
      </div>
    </div>
  );
}
