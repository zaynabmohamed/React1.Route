import "./Portfoli.css";
import imgHtml from "../../../public/Html.jpeg"
import imgCss from "../../../public/css.jpeg"
import imgJs from "../../../public/js.png"
export default function Portfoli() {
  return (
    <>
      <div className="portfoli pt-5 vh-100 my-4">
         <h1 className="pb-3 fs-1 text-center pt-5 mt-3">Portfoli</h1>
            <div className="position1 pb-3">
           <i className=" fa-solid fa-star"></i>
          </div>
       <div className="container w-100 m-auto text-center">
        <div className="row m-2">
          <div className="col-md-4 py-3 px-3">
            <div className="img">
              <img src={imgCss} alt="picture angular"/>
            </div>
          </div>
             <div className="col-md-4 py-3 px-3">
            <div className="img">
              <img src={imgJs} alt="picture angular"/>
            </div>
          </div>
             <div className="col-md-4 py-3 px-3">
            <div className="img">
              <img src={imgHtml} alt="picture angular"/>
            </div>
          </div>
        </div>
              <div className="row m-2">
          <div className="col-md-4 py-3 px-3">
            <div className="img">
              <img src={imgCss} alt="picture angular"/>
            </div>
          </div>
             <div className="col-md-4 py-3 px-3">
            <div className="img">
              <img src={imgJs} alt="picture angular"/>
            </div>
          </div>
             <div className="col-md-4 py-3 px-3">
            <div className="img">
              <img src={imgHtml} alt="picture angular"/>
            </div>
          </div>
        </div>
       </div>
      </div>
   </>
  );
}
