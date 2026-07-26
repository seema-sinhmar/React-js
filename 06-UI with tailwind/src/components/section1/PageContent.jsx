import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const PageContent = (props) => {
  console.log(props.user)
  return (
    <div className="flex gap-20 h-[86vh] pt-6 px-18 pb-16">
      <LeftContent />
      <RightContent user={props.user} />
    </div>
  );
};

export default PageContent;
