import Link from "next/link";
import Header_Account from "@/components/Header/Header_Account";

export default function Account_Settings() {
    return (
        <>
            <Header_Account />
            <main className='h-[100vh]'>
                <div>계정</div>
                <div>이름 성, example@gmail.com•프로필로 이동</div>
                
                <ul>
                    <li>
                        <div>아이콘</div>
                        <div>개인정보</div>
                        <div>개인정보 및 연락처를 알려주세요</div>
                    </li>
                </ul>
            </main>
        </>
    )
}