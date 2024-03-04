import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircleUser } from "@fortawesome/free-solid-svg-icons";

import { useState, useEffect, useRef } from "react";

import MenuLogin from "./Menu/MenuLogin";
import MenuLogout from "./Menu/MenuLogout";

export default function MenuBtn() {
  const [showMenu, setShowMenu] = useState(false);

  const menuRef = useRef(null);

  const openMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  // 메뉴바 이외의 부분 클릭 시 메뉴바 닫히는 코드
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      closeMenu();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showMenu]);

  return (
    <div>
      <div
        onClick={openMenu}
        ref={menuRef}
        className={`border-[1px] border-solid border-[#DDDDDD] ml-[4px] pl-[14px] pr-[8px] flex flex-row justify-center items-center cursor-pointer rounded-[40px] hover:shadow-md ${
          showMenu ? "shadow-md relative" : null
        }`}
      >
        <div className="text-[16px] mr-[14px]">
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className="text-[32px]">
          <FontAwesomeIcon icon={faCircleUser} />
        </div>
        {/* 비로그인 상태일 때 */}
        {showMenu && <MenuLogout />}

        {/* 로그인 상태일 때 */}
        {showMenu && <MenuLogin />}
      </div>
    </div>
  );
}
