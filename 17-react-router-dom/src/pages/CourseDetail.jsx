//Import Params
import { useParams } from "react-router-dom";

const CourseDetail = () => {
  //Params for shown the dyanamic url on the page
    let params = useParams();
  return (
    <div
      style={{
        fontSize: "30px",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%)",
        fontWeight: "bold",
      }}
    >
      <h1 style={{whiteSpace:'nowrap'}}>{params.id} Course Detail</h1>
    </div>
  );
};

export default CourseDetail;
