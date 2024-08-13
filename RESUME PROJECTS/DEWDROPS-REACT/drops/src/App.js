import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import Whatsup from "./Components/Whatsup";
import InstagramButton from "./Components/InstagramButton";

function App() {
  return (
    <div>
      <div className="firstdiv">
        <Navbar />
        <Card />
        <Whatsup
          phoneNumber="https://api.whatsapp.com/send?phone=919446818911"
          message="Hello! I want to chat with you."
        />
        <br />
        <br />
        <br />
        <br />
        <InstagramButton />
      </div>

      <div className="container-fluid sidedive p-0 m-0 ">
        <div className="seconddiv row col-md-12">
          <div className="col-6 col-md-6 d-flex align-items-center">
            <img
              src={process.env.PUBLIC_URL + "/Assets/Images/deccor (3).jpg"}
              alt="Logo"
              className="abtimg"
            />
          </div>
          <div className="col-6 col-md-6">
            <h1 className="about">About</h1>
            <em>
              {" "}<h2 className="abhead">Crafting Ideal Moments!</h2>
            </em>
            <p className="abcontent text-center">
              We have a clear vision to ensure clients satisfaction and loyalty.
              <br />
              As every event has to be perfect social,technical and creative
              fit. we have a collaborative <br /> approach to all the events.To
              be the leading event management company in calicut, by meeting{" "}
              <br /> and exceeding the expectations of our clients through
              innovative ideas and the delivery <br /> of excellent service
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid sidedive2 p-0 m-0">
        <div className="thirddiv row col-md-12">
          <div className="col-md-6">
            <h1 className="catering text-center">CATERING</h1>
            <p className="thirdcontent text-center">
              “Unleashing a symphony of flavors on your palate”<br />
              "Delight your guests with exquisite catering services tailored to
              perfection. Our <br /> event management team collaborates with
              top-tier caterers to curate a culinary <br /> experience that
              elevates your event to unforgettable heights. From delectable{" "}
              <br /> appetizers to sumptuous main courses and decadent desserts,
              our catering options <br /> are designed to tantalize every
              palate."
            </p>
          </div>
          <div className="col-6 col-md-6 d-flex align-items-center">
            <img
              src={process.env.PUBLIC_URL + "/Assets/Images/tea.jpeg"}
              alt="Logo"
              className="catimg"
            />
          </div>
        </div>
      </div>

      <div className="container-fluid sidedive3 p-0 m-0 ">
        <div className="div4 row col-md-12">
          <div className="col-6 col-md-6 d-flex align-items-center">
            <img
              src={process.env.PUBLIC_URL + "/Assets/Images/panthal (3).jpeg"}
              alt="Logo"
              className="eventimg"
            />
          </div>
          <div className="col-6 col-md-6">
            <h1 className="event text-center">EVENTS</h1>
            <p className="text-center">
              "Elevating ordinary occasions to extraordinary celebrations."{" "}
              <br />
              "Crafting events that are as clever as they are memorable
              Transform your event into <br /> a captivating masterpiece with
              our expert decoration services. Our seasoned team of <br />{" "}
              decorators brings your vision to life, crafting enchanting
              atmospheres that leave a <br /> lasting impression on your
              guests."
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid sidedive4 p-0 m-0 ">
        <div className="row col-md-12  col-md-4 border-end border-white">
          <div className="col-md-4 bg-dark firstpart">
              <h3 className="contact">Contact Us</h3>
              <p className="contactcontent">dew_drops_event_planners <br />
                   Kodanchery <br />
                   Thamarassery <br />
                   Kozhikode, Kerala <br />
                   pin : 673580</p> 
          </div>
          <div className="col-md-4 bg-dark secondpart">
          <h3 className="connectus">Connect with Us</h3>
           <a className="nmbr">+919446818911</a>
           <p class="display-7 text-center text-white dewmail">
              dewdropskodanchery@gmail.com
            </p>
          </div>
          <div className="col-md-4 bg-dark thirdpart">
            
          </div>
        </div>
        </div>
    </div>
  );
}

export default App;
