import { MoveRight } from "lucide-react";

const RightCard = (props) => {
  console.log(props.color)
  return (
    <div>
      <div className="w-full h-full absolute left-0 top-0 p-8 flex flex-col justify-between">
        <h2 className="w-12 h-12 text-black bg-white text-xl rounded-full flex justify-center items-center font-semibold">
         {props.id+1}
        </h2>
        <div>
          <p className="text-white text-xl text-shadow-2xs mb-14 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            excepturi sed magni porro ipsa pariatur!
          </p>
          <div className="flex justify-between">
            <button style={{backgroundColor:props.color}}  className=" rounded-full font-medium px-8 py-2 text-white">
              {props.tag}
            </button>
            <button className="text-white px-3 py-2 rounded-full bg-blue-400">
              <MoveRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightCard;
