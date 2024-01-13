
export default function Item({ key, name, grade, where, days, price }) {
  return (
    <div key={key} className="w-[20rem] mx-2 ">
      <div className="my-4">
        <img
          src="https://a0.muscache.com/im/pictures/539b4b10-b32b-4360-985a-5e44820b0d9a.jpg?im_w=1200"
          alt="sample"
          className="border-black h-[17rem] rounded-xl"
        />
      </div>
      <div className='flex justify-between font-bold'>
        <div>{name}</div>
        <div>{grade}</div>
      </div>
      <div>{where}</div>
      <div>{days}</div>
      <div>{price}</div>
    </div>
  );
}
