// 구글 소셜 로그인 버튼
export default function GoogleLoginBtn() {
  return (
    <button
      type="button"
      className="w-full h-[48px] border-[1px] border-solid border-black rounded-[10px] hover:bg-[#F7F7F7] active:bg-white flex flex-row items-center px-[23px] gap-[170px]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 40 40"
        fill="none"
      >
        <path
          d="M39.7398 16.7979C39.6722 16.3811 39.3068 16.083 38.8845 16.083H38.0415C38.0186 16.083 38 16.0644 38 16.0415C38 16.0186 37.9814 16 37.9585 16H24C21.7909 16 20 17.7909 20 20C20 22.2091 21.7909 24 24 24H24.6805C27.9118 24 30.0371 27.3055 27.5255 29.3385C25.4695 31.0026 22.8529 32 20 32C13.373 32 8 26.627 8 20C8 13.373 13.373 8 20 8C21.6946 8 23.3045 8.35414 24.7637 8.99052C26.7262 9.84634 29.1433 9.85666 30.6572 8.3428C32.2753 6.72473 32.2418 4.04541 30.283 2.86241C27.2799 1.04869 23.7651 0 20 0C8.955 0 0 8.955 0 20C0 31.045 8.955 40 20 40C31.045 40 40 31.045 40 20C40 18.9097 39.9088 17.8406 39.7398 16.7979Z"
          fill="#FFC107"
        />
        <path
          d="M4.06008 7.93453C2.92528 9.4327 3.4277 11.5139 4.94326 12.6253C6.93812 14.0883 9.80387 13.2186 11.5601 11.4763C13.7261 9.32758 16.7063 8 19.9997 8C21.6943 8 23.3042 8.35414 24.7634 8.99052C26.7258 9.84634 29.143 9.85666 30.6569 8.3428C32.2749 6.72473 32.2414 4.04541 30.2826 2.86241C27.2795 1.04869 23.7648 0 19.9997 0C13.4885 0 7.71007 3.11574 4.06008 7.93453Z"
          fill="#FF3D00"
        />
        <path
          d="M20.0003 40C23.4586 40 26.7053 39.114 29.5386 37.5638C31.7509 36.3533 31.6989 33.3606 29.7738 31.7315C28.2814 30.4687 26.1312 30.4918 24.3079 31.1973C22.9429 31.7256 21.4831 32.0011 20.0003 32C16.6309 32 13.5908 30.6083 11.4148 28.37C9.64839 26.5529 6.6626 25.637 4.65515 27.1837C3.2293 28.2823 2.76026 30.2666 3.81647 31.7241C7.44795 36.7353 13.3381 40 20.0003 40Z"
          fill="#4CAF50"
        />
        <path
          d="M39.7398 16.7979C39.6722 16.3811 39.3068 16.083 38.8845 16.083H38.0415C38.0186 16.083 38 16.0644 38 16.0415C38 16.0186 37.9814 16 37.9585 16H24C21.7909 16 20 17.7909 20 20C20 22.2091 21.7909 24 24 24H24.6758C27.9071 24 30.0318 27.3089 27.5161 29.3368C27.4174 29.4164 27.3174 29.4944 27.216 29.571C27.2178 29.5698 27.2201 29.57 27.2218 29.5713L29.6796 31.6511C31.6554 33.3231 35.1566 33.3602 36.6013 31.2125C38.2845 28.7102 40 24.9403 40 20C40 18.9097 39.9088 17.8406 39.7398 16.7979Z"
          fill="#1976D2"
        />
      </svg>
      <div className="text-[14px] font-[500]">구글로 로그인하기</div>
    </button>
  );
}
