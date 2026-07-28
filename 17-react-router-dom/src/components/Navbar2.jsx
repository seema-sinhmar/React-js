//Import use navitaion routing
import { useNavigate } from "react-router-dom";

const Navbar2 = () => {
  //UseNavigation Routing
    let navigate = useNavigate();
  return (
    <div>
      <div style={{ display: "flex", backgroundColor: "cyan", gap: "30px" }}>
        <button
          onClick={() => {
            //For home page
            navigate("/");
          }}
        >
          Return Home Page
        </button>
        <button
          onClick={() => {
            //For back page
            navigate(-1);
          }}
        >
          Back
        </button>
        <button
          onClick={() => {
            //For next page
            navigate(+1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Navbar2;
