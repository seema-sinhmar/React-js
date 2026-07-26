import RightCardContent from "./RightCardContent"

const RightContent = (props) => {
  return (
    <div className='h-full w-2/3 flex gap-10 p-6 rounded-4xl flex-nowrap overflow-x-auto'>
   {props.user.map(function(elem, idx){
    return <RightCardContent key={idx} id={idx} img={elem.img} color={elem.color} tag={elem.tag}/>
   })}
    </div>
  )
}

export default RightContent