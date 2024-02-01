import Link from "next/link";
import BackPageBtn from "../Buttons/BackPageBtn";

export default function AccountItemTitle({ title_route, title_h2 }) {
  return (
    <>
      <section className="bnb_md_xl:my-[40px] bnb_sm:fixed bnb_sm:bg-[#fff] bnb_sm:w-full bnb_sm:top-0 bnb_sm:left-0">
        <div className="flex flex-row gap-[16px] text-[14px] mb-[8px] bnb_sm:hidden">
          <Link href={"/account-settings"} className="hover:underline">
            <span>계정</span>
          </Link>
          <span>{">"}</span>
          <span>{title_route}</span>
        </div>
        <BackPageBtn />
        <h2 className="text-[30px] font-[700] bnb_sm:text-[20px] bnb_sm:hidden ">
          {title_h2}
        </h2>
      </section>
      <div className="font-bold text-[22px] mb-[10px] bnb_sm:block hidden">
        {title_h2}
      </div>
    </>
  );
}
