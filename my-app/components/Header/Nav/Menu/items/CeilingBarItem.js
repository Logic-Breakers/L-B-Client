// Top Line이 없는 메뉴바 리스트 아이템
export default function CeilingBarItem({text}) {
    return (
        <li className='px-[20px] py-[12px] hover:cursor-pointer hover:bg-gray-100 border-t-[1px] border-solid border-[#DDDDDD]'>
            <span className='text-[#5e5e5e]'>
                {text}
            </span>
        </li>
    )
}