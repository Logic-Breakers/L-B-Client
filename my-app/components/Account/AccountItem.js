import Link from "next/link";

export default function AccountItem({link, icon, itemName, itemDetail}) {
    return (
        <div className="rounded-[12px] cursor-pointer w-[328px] h-[156px] my-[4px] px-[8px] shadow-[0_7px_29px_0_rgba(100,100,111,0.2)]">
            <ul className="py-[16px] px-[8px] h-[100%]">
                <Link href={link}>
                    <li className="flex-col justify-between">
                        <div className="text-[30px]">
                            {icon}
                        </div>
                        <div>
                            <div className="font-[500] mb-[4px]">
                                {itemName}
                            </div>
                            <div className="text-[#939393] text-[14px]">
                                {itemDetail}
                            </div>
                        </div>
                    </li>
                </Link>
            </ul>
        </div>
    )
}