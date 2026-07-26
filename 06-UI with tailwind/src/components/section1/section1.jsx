import Navbar from "../section1/Navbar";
import PageContent from "./PageContent";

const Section1 = (props) => {
  console.log(props.user)
  return (
    <div className=" h-screen w-full">
      <Navbar />
      <PageContent user = {props.user}/>
    </div>
  )
}

export default Section1