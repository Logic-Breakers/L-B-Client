import Title from "@/components/Title";
import HeaderAccount from "@/components/Header/HeaderAccount";

// 계정 -> 로그임 및 보안
export default function Preferences() {
    return (
        <>
            <Title text={'글로벌 환경 설정 - 계정 관리 - 에어비앤비'}></Title>
            <HeaderAccount />
        </>
    )
}