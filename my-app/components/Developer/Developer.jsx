import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";

// screen : tailwind.config.js 참고
export default function Developer() {
  return (
    <section>
      {/* 개발자 깃허브 링크 */}
      <ul className="flex flex-row gap-[20px] bnb_md:justify-center items-center">
        <Link
          href={"https://github.com/ghvhdh333"}
          target="_blank"
          title="[FE] Developer 김우주"
          className="text-[30px] text-[#FF385C] hover:animate-bounce"
        >
          <li>
            <FontAwesomeIcon icon={faSquareGithub} />
          </li>
        </Link>
        {/* <Link
          href={"https://github.com/toystory23"}
          target="_blank"
          title="[FE] Developer 정회엽"
          className="text-[30px] text-[#f5711f] hover:animate-bounce"
        >
          <li>
            <FontAwesomeIcon icon={faSquareGithub} />
          </li>
        </Link> */}
        <Link
          href={"https://github.com/KSJ-0"}
          target="_blank"
          title="[BE] Developer 김수정"
          className="text-[30px] text-green-700 hover:animate-bounce"
        >
          <li>
            <FontAwesomeIcon icon={faSquareGithub} />
          </li>
        </Link>
        <Link
          href={"https://github.com/SalguJam"}
          target="_blank"
          title="[BE] Developer 조상아"
          className="text-[30px] text-blue-600 hover:animate-bounce"
        >
          <li>
            <FontAwesomeIcon icon={faSquareGithub} />
          </li>
        </Link>
      </ul>
    </section>
  );
}
