
import RightCard from "./RightCard";

const RightCardContent = (props) => {
  return (
    <div id="right" className=" h-full flex w-80 rounded-3xl relative shrink-0 overflow-hidden">
      <img
        src={props.img}
        alt="image"
        className="h-full w-full object-cover rounded-4xl"
      />
      <RightCard id={props.id} color={props.color} tag={props.tag}/>
    </div>
  );
};

export default RightCardContent;
