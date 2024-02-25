import React from "react";
import axios from "axios"
//img

import toJa from "../../IMG's/user.jpg";

const AboutMe = ({ langg, personalist }) => {

  
  const downloadHandler = ()=>{
    console.log(`/Downloads/${langg.nameFileToDownlod}`)
    axios({
      url: `/Downloads/${langg.nameFileToDownlod}`, 
      method: 'GET',
      responseType: 'blob',
    })
    .then(response => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', langg.nameFileToDownlod);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    })
    .catch(error => {
      console.error('Błąd podczas pobierania pliku', error);
    });
  }



  return (
    <div id="About" className="about">
      <div className="about__title">
        <h2>{langg.title}</h2>
      </div>
      <div className="about__img">
        <img src={toJa} alt="test" />
      </div>
      <p className="about__describe">{langg.description}</p>
      <ul className="about__userInformation">
          <li>
            {langg.Name}: <span>{personalist.firstName}</span>
          </li>
          <li>
            {langg.Age}:{" "}
            <span>
              {personalist.Age} {langg.AgeFix}
            </span>
          </li>
          <li>
            {langg.Job}: <span>{personalist.Job}</span>
          </li>
          <li>
            {langg.CitizenShip}: <span>{langg.CitizenShipCountry}</span>
          </li>
          <li>
            {langg.Residence}: <span>{personalist.residence}</span>
          </li>
          <li>
            E-Mail: <span>{personalist.Email}</span>
          </li>
      </ul>
      {langg.nameFileToDownlod && (
        <div className="about__button">
          <button onClick={downloadHandler}>
            <span aria-hidden="true">{langg.Download} CV</span>
            {langg.Download} CV
            <span aria-hidden="true">{langg.Download} CV</span>
          </button>
        </div>
      )}
    </div>
  );
};
export default AboutMe;
