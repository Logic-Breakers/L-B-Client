import Link from "next/link";
import Title from "@/components/Title";
import Header_Account from "@/components/Header/Header_Account";
import AccountItem from "@/components/Account/AccountItem";

export default function Account_Settings() {
    return (
        <>
            <Title text={'계정관리 - 에어비앤비'}/>
            <Header_Account />
            <main className='flex justify-center items-center h-[100vh] px-[10%]'>
                <div className="w-[100vw">
                    <div className="">
                        <h1 className="font-[500] text-[32px]">계정</h1>
                        <div className="text-[20px]">
                            <span className="font-[500]">
                                이름 성,
                            </span>
                            <span className="font-[300]">
                                example@gmail.com • 
                            </span>
                            <Link href={'/users/show'}>
                                <span className="font-[500] underline decoration-solid">
                                    프로필로 이동
                                </span>
                            </Link>
                        </div>
                    </div>
                    
                    <div className="border-[1px] border-solid border-gray-500">
                        <ul>
                            <li>
                                <div>아이콘</div>
                                <div>개인정보</div>
                                <div>개인정보 및 연락처를 알려주세요</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
        </>
    )
}