import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

// App 상태(sm 사이즈 일 때) 화면 상단에 고정된 뒤로가기 버튼
export default function BackPageBtn() {
  const router = useRouter();
  const backPage = () => {
    router.back();
  };

  return (
    <div className="bnb_md_xl:hidden flex flex-row items-center h-[64px] shadow-sm px-[24px] fixed top-0 left-0">
      <button type="button" onClick={backPage} className="p-[12px] ml-[-12px]">
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
    </div>
  );
}
