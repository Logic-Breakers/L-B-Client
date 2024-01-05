export default function Item({key, name, grade, where, days, price}) {
  return <div key={key} className="w-[20rem] mx-2 ">
    <div className="border-2 border-black h-[19rem] rounded-xl my-4">
        이미지자리
    </div>
  {name},{grade},{where},{days},{price}
  </div>
}
