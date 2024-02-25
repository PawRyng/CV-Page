import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Header from "./Header";
import { motion } from "framer-motion";
import axios from "axios";
import Modal from "./Modal";
import Colors from "../Other/colors.json"

export default function Portfolio({
  lang,
  isMenuOpen,
  setloading,
  git,
  photos,
  youtube,
}) {

  const [filter, setFilter] = useState("All");


  const SearchElement = (item) => {
    return (
      <li
      key={item.sign}
      onClick={() => {
        setFilter(item.sign);
      }}
        className={`portfolio-Search__item ${
          filter === item.sign ? "portfolio-Search__item--active" : ""
        }`}
        >
        {item.title}
      </li>
    );
  };


  let tab = [];
  if (git.message === undefined) {
    git.map((item) => tab.push(item));
  }
  if(lang.search[3].content){
    lang.search[3].content.map(item => tab.push(item));
  }
  if (typeof youtube === "object") {
    youtube.map((item) => tab.push(item));
  }
  
  const errorMessage = () => {
    if (tab.length === 0) {
      return <div className="portfolio__error">🫣</div>;
    }
  };
  const displayCategoryTitle = item =>{
    if(item.mainTech){
      return lang.search[3].title
    }
    if(item.name){
      return lang.search[2].title
    }
    return lang.search[1].title

  }

  const [modalData, setModalData] = useState();
  
  const onClickHandler = (data)=>{

    let type = '';
    //github
    if(data.languages_url){
      axios.get(data.languages_url).then(languages=> {
        const labels = Object.keys(languages.data);
        const dataValues = Object.values(languages.data);
      
        const shuffledColors = labels.map(item => Colors[item] ? Colors[item].color : '#' + Math.floor(Math.random()*16777215).toString(16));
      
        type = "GitHub"
        const chartData = {
          labels: labels,
          datasets: [
            {
              data: dataValues,
              backgroundColor: shuffledColors,
              hoverBackgroundColor: shuffledColors,
            },
          ],
        };
        setModalData({
          type,
          name: data.name,
          description: data.description,
          homeUrl: data.homepage,
          url: data.html_url,
          chartData: chartData
  
        })
      })
    }
    else if(data.snippet){
      lang.search.map(item => {
        if(item.sign === 'Music'){
          type = item.title 
        }
      })
      setModalData({
        type,
        name: data.snippet.title,
        description: data.snippet.description,
        homeUrl: `https://www.youtube.com/watch?v=${data.id}`,
        canvas_url: `https://www.youtube.com/embed/${data.id}`,
      });
    }
    else if(data.mainTech){
      lang.search.map(item => {
        if(item.sign === 'OtherPages'){
          type = item.title 
        }
      })
      const labels = Object.keys(data.Languages);
      const dataValues = Object.values(data.Languages);
      const shuffledColors = labels.map(item => Colors[item] ? Colors[item].color : '#' + Math.floor(Math.random()*16777215).toString(16));
      const chartData = {
        labels: labels,
        datasets: [
          {
            data: dataValues,
            backgroundColor: shuffledColors,
            hoverBackgroundColor: shuffledColors,
          },
        ],
      };
      setModalData({
        type,
        name: data.name,
        homeUrl: data.html_url,
        chartData: chartData
      });
    }
  }
  const onImageLoadHandler = e=>{
    console.log(e.target);
  }
  return (
    <>
      <Header
        lang={lang}
        mause={true}
        isMenuOpen={isMenuOpen}
        setloading={setloading}
        smoooth="portfolio"
      />
      <div className="portfolio" id="portfolio">
        <div className="portfolio__scroll-container">
          <ul className="portfolio-Search">
            {lang.search.map((item) => SearchElement(item))}
          </ul>
        </div>
        <motion.div layout className="portfolioItems">
          {tab.map((item, index) => (
            <motion.div
              key={index}
              className={`portfolioItems__item ${
                (filter === "All" || filter === "Pages") && item.name && !item.mainTech
                  ? "portfolioItems__item--active"
                  : ""
              } ${
                (filter === "All" || filter === "Music") && item.snippet
                  ? "portfolioItems__item--active"
                  : ""
              } ${
                (filter === "All" || filter === "OtherPages") && item.mainTech
                  ? "portfolioItems__item--active"
                  : ""
              }`}
            >
              <a
                onClick={()=> onClickHandler(item)}
                target="_blank"
                rel="noreferrer"
              >
                <div
                    className="portfolioItems__image"
                  >
                    <LazyLoadImage
                    alt={`${item.name || item.snippet.title}`}
                    height={200}
                    width={`${photos[index] !== undefined ? 200 : 267}`} 
                    src={`${photos[index] !== undefined
                      ? `https://picsum.photos/id/${photos[index].id}/200/200`
                      : item.snippet !== undefined
                      ? item.snippet.thumbnails.high.url
                      : ""}`} 
                      placeholderSrc={`${
                        photos[index] !== undefined
                      ? `https://picsum.photos/id/${photos[index].id}/5/5`
                      : item.snippet !== undefined
                      ? item.snippet.thumbnails.default.url
                      : ""}` 
                      }
                      />
                      
                  {(item.language !== undefined || item.mainTech !== undefined) && (
                    <div className="portfolioItems__language">
                      {item.language || item.mainTech}
                    </div>
                  )}
                </div>

                <div className="portfolioItems__content">
                  <p>
                    {
                      displayCategoryTitle(item)
                  }
                  </p>
                  <p>{item.name || item.snippet.title}</p>
                </div>
              </a>
            </motion.div>
          ))}
          {errorMessage()}
        </motion.div>
        {modalData &&  <Modal modalData={modalData} setModalData={setModalData}/>}
        
      </div>
    </>
  );
}
