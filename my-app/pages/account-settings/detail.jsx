import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import AccountAppDetailItem from "@/components/Account/AccountAppDetailItem";

export default function Detail() {
  return (
    <main className="bnb_sm:block bnb_md_xl:hidden m-[24px]">
      <div className="h-[64px]">
        <Link href={"/account-settings"} className="p-[12px] ml-[-12px]">
          <FontAwesomeIcon icon={faChevronLeft} />
        </Link>
      </div>
      <h2 className="text-[20px] font-[700] mt-[12px] mb-[16px]">계정</h2>
      <section className="mb-[60px]">
        <AccountAppDetailItem
          link={"/account-settings/payments/payment-methods"}
          itemName={"결제 및 대금 수령"}
          itemDetail={"신용카드, 쿠폰 등"}
        />

        <AccountAppDetailItem
          link={"/account-settings/taxes/taxpayers"}
          itemName={"세금"}
          itemDetail={"납세자 정보 및 세금 서류 관리"}
        />

        <AccountAppDetailItem
          link={"/account-settings/notifications"}
          itemName={"알림"}
          itemDetail={"연락 방법"}
        />

        <AccountAppDetailItem
          link={"/account-settings/login-and-security"}
          itemName={"로그인 및 보안"}
          itemDetail={"비밀번호 및 로그인 기록"}
        />

        <AccountAppDetailItem
          link={"/account-settings/preferences"}
          itemName={"글로벌 환경 설정"}
          itemDetail={"기본 언어, 통화, 시간대"}
        />

        <AccountAppDetailItem
          link={"/account-settings/privacy-and-sharing"}
          itemName={"개인정보 및 공개 설정"}
          itemDetail={"연결된 앱 및 공유 설정"}
        />

        <AccountAppDetailItem
          link={"/account-settings/airbnb-for-work"}
          itemName={"출장"}
          itemDetail={
            "회사 이메일을 입력하면 출장에서 혜택을 누리실 수 있습니다."
          }
        />

        <AccountAppDetailItem
          link={"/account-settings/professional-hosting"}
          itemName={"프로 호스팅 도구"}
          itemDetail={
            "에어비앤비에서 여러 숙소를 관리하신다면 프로 호스팅 도구를 이용해보세요."
          }
        />
      </section>
    </main>
  );
}
