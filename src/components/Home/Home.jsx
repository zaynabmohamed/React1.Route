import Section from "../Section/Section";

import "./Home.css";
import img from "../../../public/female-engineer-safety-a-hard-hat-vector.jpg";

export default function Home() {
  return (
    <>
      <div className="Home w-100 ">
        <div className="">
          <img src={img} className="pic" alt="" />
        </div>
        <div>
          <h1 className="test text-black text-center">start Framework</h1>
          <div>
            <span className="position3">
              <i className=" text-white fa-solid fa-star"></i>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
