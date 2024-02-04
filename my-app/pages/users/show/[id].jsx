import Title from "@/components/Title";
import Header from "@/components/Header/Header";

// 나중에 파일명을 동적으로 변환해야할 듯 (유저 id값마다 보여줘야하기에...)
export default function UserInfo() {
  return (
    <>
      <Title text={"게스트 프로필 - 에어비앤비"} />
      <Header />
    </>
  );
}
