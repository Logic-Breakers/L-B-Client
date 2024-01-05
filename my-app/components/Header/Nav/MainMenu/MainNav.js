export default function MainNav() {
  const userFilter = [
    '열대지역',
    '디자인',
    'B&B',
    '세상의 꼭대기',
    '신규',
    '최고의 전망',
    '한적한 시골',
    '방',
    '캠핑장',
    '해변 바로 앞',
    '한옥',
    '멋진 수영장',
    '국립공원',
    '통나무집',
    '농장',
    '인기 급상승',
    '초소형 주택',
    '사막',
  ];
  return (
    <div className="flex justify-around">
      {userFilter.map((item) => (
        <div key={1} className="mt-4 cursor-pointer mb-5">
          {item}
        </div>
      ))}
    </div>
  );
}
