import Link from "next/link";

export default function FooterItem ({link, text}) {
    return (
        <Link href={link} className="text-[14px] hover:underline decoration-solid text-[--menu-gray-color]">
            <li>
                {text}
            </li>
        </Link>
    )
}