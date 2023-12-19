import Link from "next/link";

export default function FooterItem ({link, text}) {
    return (
        <li>
            <Link href={link} className="inline text-[14px] hover:underline decoration-solid text-[--menu-gray-color]">
                {text}
            </Link>
        </li>
    )
}