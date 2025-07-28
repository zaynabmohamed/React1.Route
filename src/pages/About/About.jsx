import "./About.css";
export default function About() {
  return (
    <>
      <div className="About text-white w-100 m-auto vh-100 pt-3">
        <div className="container pt-5">
          <h1 className="text-center pt-5 text-black">ABOUT COMPONENT</h1>
         <div className="position1">
           <i className="fa-solid fa-star"></i>
          </div>
          <div className="container pt-5 text-black">
            <div className="row">
              <div className="col-md-6 sm-12">
                <p className="p-3">
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
              <div className="col-md-6 sm-12">
                <p className="p-3">
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
