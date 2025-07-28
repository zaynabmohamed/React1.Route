import Footer from "../Footer/footer";
import "./Section.css";
export default function Section() {
  return (
    <>
      <div className="Container bg-body-tertiary text-black pt-4">
        <div className="row w-100 m-auto">
          <div className="col-md-4">
            <div className="Divfirst">
              <h2>LOCATION</h2>
              <h4>2215 John Daniel Drive</h4>
              <p>Clark, MO 65243</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="Divfirst p-2">
              <h2>AROUND THE WEB</h2>
              <ul className="list ">
                <li>
                  <i className="text-black fa-brands fa-facebook"></i>
                </li>
                <li>
                  <i className=" text-black fa-brands fa-twitter"></i>
                </li>
                <li>
                  <i className="text-black fa-brands fa-linkedin"></i>
                </li>
                <li>
                  <i className="text-black fa-solid fa-globe"></i>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="Divfirst">
              <h2>ABOUT FREELANCER</h2>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
