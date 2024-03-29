import AccountAppDetailItem from "@/components/Account/AccountAppDetailItem";
import AppBackPageBtn from "@/components/Buttons/AppBackPageBtn";
import NavApp from "@/components/Header/Nav/NavApp";

// (App) 계정페이지에서 계정을 누른 경우 나타나는 페이지
// /account-settings/detail/{id}

// 나중에 유저의 id값으로 다 변경하기
export default function Detail() {
  return (
    <>
      <main className="bnb_sm:block bnb_md_xl:hidden m-[24px]">
        <div className="h-[64px]">
          <AppBackPageBtn />
        </div>
        <h2 className="text-[20px] font-bold mt-[12px] mb-[16px]">계정</h2>
        <section className="mb-[60px]">
          <AccountAppDetailItem
            link={"/account-settings/payments/payment-methods/1"}
            itemName={"결제 및 대금 수령"}
            itemDetail={"신용카드, 쿠폰 등"}
          />

          <AccountAppDetailItem
            link={"/account-settings/taxes/taxpayers/1"}
            itemName={"세금"}
            itemDetail={"납세자 정보 및 세금 서류 관리"}
          />

          <AccountAppDetailItem
            link={"/account-settings/notifications/1"}
            itemName={"알림"}
            itemDetail={"연락 방법"}
          />

          <AccountAppDetailItem
            link={"/account-settings/login-and-security/1"}
            itemName={"로그인 및 보안"}
            itemDetail={"비밀번호 및 로그인 기록"}
          />

          <AccountAppDetailItem
            link={"/account-settings/preferences/1"}
            itemName={"글로벌 환경 설정"}
            itemDetail={"기본 언어, 통화, 시간대"}
          />

          <AccountAppDetailItem
            link={"/account-settings/privacy-and-sharing/1"}
            itemName={"개인정보 및 공개 설정"}
            itemDetail={"연결된 앱 및 공유 설정"}
          />

          <AccountAppDetailItem
            link={"/account-settings/airbnb-for-work/1"}
            itemName={"출장"}
            itemDetail={
              "회사 이메일을 입력하면 출장에서 혜택을 누리실 수 있습니다."
            }
          />

          <AccountAppDetailItem
            link={"/account-settings/professional-hosting/1"}
            itemName={"전문 호스팅 도구"}
            itemDetail={
              "에어비앤비에서 여러 숙소를 관리하신다면 전문 호스팅 도구를 이용해보세요."
            }
          />
        </section>
      </main>
      <NavApp />
    </>
  );
}
