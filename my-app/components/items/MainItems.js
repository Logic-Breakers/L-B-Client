import Item from './Item';
import { data } from './dummydata';

export default function MainItems() {
  return (
    <div className='flex flex-wrap justify-between'>
      {data.map((item)=>{
        return <Item
        key={item.id}
        name={item.name}
        grade={item.grade}
        where={item.where}
        days={item.days}
        price={item.price}
      />
      })}
      
    </div>
  );
}
