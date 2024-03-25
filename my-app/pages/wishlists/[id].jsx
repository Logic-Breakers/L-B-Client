import Link from "next/link";
import Image from "next/image";
import Title from "@/components/Title";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import NavApp from "@/components/Header/Nav/NavApp";

import wishlistsDummy from "@/components/Datas/DummyData/wishlistsDummy";

// api 만들어지면 삭제기능 구현해볼 예정
export default function Wishlists() {
  // 필터 사용해서 하면 될 듯
  const deleteItem = () => {};

  return (
    <>
      <Title
        text={
          "에어비앤비: 휴가용 임대 숙소, 통나무집, 비치 하우스, 독특한 숙소 및 체험"
        }
      />
      <Header fixed />
      <main className="flex flex-row justify-center items-center w-full bnb_sm:mb-[60px]">
        <div className="w-[100%] min-h-[100vh] bnb_md_xl:pt-[80px] bnb_xl:px-[80px] bnb_md_lg:px-[40px] bnb_sm:px-[24px]">
          <h1 className="text-[32px] font-[500] mt-[36px]">위시리스트</h1>
          <section>
            <ul className="grid bnb_xl:grid-cols-4 bnb_md_lg:grid-cols-3 bnb_sm:grid-cols-2 gap-[24px] my-[24px]">
              {wishlistsDummy.map((el) => (
                <li key={el.id} className="relative rounded-[16px]">
                  <button
                    type="button"
                    onClick={deleteItem}
                    className={`absolute top-[10px] left-[10px] text-[20px] px-[8px] rounded-[20px] border-[1px] border-gray-400 bg-gray-100 shadow-xx hover:shadow-xxx hover:bg-[#fff] hover:scale-105 transition duration-200 ease-in-out`}
                  >
                    ✕
                  </button>
                  <Link href="/">
                    <div>
                      <Image
                        src={el.picture}
                        width="100"
                        height="100"
                        alt="picture"
                        className="w-[100%] rounded-lg p-[4px] shadow-cc"
                      />

                      <div className="pt-[8px]">
                        <div className="flex flex-row justify-between">
                          <span className="font-[500]">{el.location}</span>
                          <span>
                            <span>★</span>
                            <span className="ml-[4px] text-gray-500">
                              {el.star}
                            </span>
                          </span>
                        </div>
                        <div className="text-gray-500">{el.feature}</div>
                        <div className="flex flex-row justify-between items-center">
                          <div>
                            <span className="font-[500]">
                              {`₩${el.price.toLocaleString()} `}
                            </span>
                            <span className="text-gray-500">/박</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
      <NavApp />
    </>
  );
}
