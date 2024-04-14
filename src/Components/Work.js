import React from 'react';
import ChooseMeals from "../Assets/choose-image.png";
import PickMeals from "../Assets/mimage1.png";
import image1 from "../Assets/mimage2.png";
import image2 from "../Assets/mimage3.png";
import image3 from "../Assets/mimage4.png";
import image4 from "../Assets/mimage5.png";
import DeliveryMeals from "../Assets/delivery-image.png";
import "./card.css"
import { Link } from 'react-router-dom';



const Work = () => {
    const workInfoData = [
         {
            image: PickMeals,
            title: "App Development",
            link: "/card",

            // text: "Developing customized algorithms, revealing data insights, and nurturing business innovation",
        },
        //  {
        //     // image: image1,
        //     // title: "Wordpress Development",
        //     // text: "Developing customized algorithms, revealing data insights, and nurturing business innovation",
        // },
         {
            image: image2,
            title: "Web Development",
            link: "/card",
            // text: "Developing customized algorithms, revealing data insights, and nurturing business innovation",
        },
         {
            image: image4,
            title: "Machine Learning",
            link: "/card",

            // text: "Developing customized algorithms, revealing data insights, and nurturing business innovation",
        },
         {
            image: image3,
            title: "Wordpress Development",
            link: "/card",

            // text: "Developing customized algorithms, revealing data insights, and nurturing business innovation",
        },
        //  {
        //     image: ChooseMeals,
        //     title: "Machine Learning",
        //     // text: "Crafting tailored algorithms, unleashing data insights, and fostering business innovation.",
        //  },
        //  {
        //     image: DeliveryMeals,
        //     title: "Machine Learning",
        //     // text: "Customizing algorithms, uncovering data insights, and fostering business innovation to foster.",
        //  },
        


        ];
  return (
    <div id="services" className="work-section-wrapper">
           <div className="work-section-top">
            <p className="primary-subheading">FEATURED SERVICES</p>
            <h1 className="primary-heading">Services we provide</h1>
            <p className="primary-text">
                We provide various services they are :
            </p>
           </div>
           {/* <div className="work-section-bottom">
  {workInfoData.map((data) => (
    // <div className="work-section-info" style={{ border: '3px solid #00a6ff', padding: '10px' }} key={data.id}>
    <div className="work-section-info" style={{ backgroundColor: '#feff3', padding: '10px' }} key={data.id}>
      <div className="info-boxes-img-container">
        <img src={data.image} alt="" />
      </div>
      <h2>{data.title}</h2>
      <p>{data.text}</p>
    </div>
  ))}
</div> */}
<div className="work-section-bottom">
  {workInfoData.map((data, index) => (
    <div className="card" key={index}>
      <div className="info-boxes-img-container">
        <img src={data.image} alt="" />
      </div>
      <div className="card-details">
        <h2 className="text-title">{data.title}</h2>
        {/* Add condition to render text if it exists */}
        {data.text && <p className="text-body">{data.text}</p>}
        {/* Use Link component for navigation */}
        <Link to={data.link} style={{ textDecoration: 'none', color: 'inherit' }}>
          <a className="card-button">More info</a>
        </Link>
      </div>
    </div>
  ))}
</div>




    </div>
  );
}

export default Work;