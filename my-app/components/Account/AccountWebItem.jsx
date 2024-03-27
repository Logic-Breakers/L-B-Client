import Link from "next/link";

// (Web) 계정 페이지에서 보여주는 아이템들 (개인정보, 로그인 및 보안 ...)
export default function AccountWebItem({ link, icon, itemName, itemDetail }) {
  return (
    <div className="rounded-lg w-[328px] h-[156px] my-[4px] shadow-xx">
      <ul className="h-[100%]">
        <Link href={link}>
          <li className="flex flex-col justify-between py-[8px] px-[16px] h-[100%] ">
            <div className="text-[30px]">{icon}</div>
            <div className="">
              <div className="font-[500] mb-[4px]">{itemName}</div>
              <div className="text-[#939393] text-[14px] leading-[140%] mb-[8px]">
                {itemDetail}
              </div>
            </div>
          </li>
        </Link>
      </ul>
    </div>
  );
}
