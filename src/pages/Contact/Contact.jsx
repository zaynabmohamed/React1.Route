import "./Contact.css"
export default function Contact() {

   
  return(
    <div>
      <div className="contact text-center w-100 vh-100 pt-5 my-4">
      <h1 className="pt-5 mt-3">CONTACT SECTION</h1>
       <div className="position1">
           <i className="fa-solid fa-star"></i>
          </div>
          <div className="container w-50 m-auto">
     <input type="text" className="Name w-100 m-3 p-2" id="userName" placeholder="userName"/>
     <input type="number" className="Name w-100 m-3 p-2" id="userAge" placeholder="userAge"/>
     <input type="Email" className="Name w-100 m-3 p-2" id="userEmail" placeholder="userEmail"/>
     <input type="password" className="Name w-100 m-3 p-2" id="userpassword" placeholder="userPassword"/>
      <button className="Btn">send Message</button>
</div>
</div>
    </div>
  )
}

