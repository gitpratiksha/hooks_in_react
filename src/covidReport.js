import React, { useEffect,useState } from "react";
import './covidReport.css'
const Covid = () => {
    const [data, setData] = useState([]);

    const getCovidData = async()=>{
        try{
          const res = await fetch('https://api.covid19india.org/data.json');
          const actualData=await res.json();
          console.log(actualData.statewise[0]); 
          setData(actualData.statewise[0]);
      }
        catch(error)
        {
         console.log(error);
        }
      }
    useEffect(()=>{
    getCovidData()
  },[]);

  return (
      <>
    <section className="section">

  <h1 className="title">Live Covid19 Tracker</h1>
    <ul className="no-bullets">
        <li className="card w3-blue w3-hover-shadow w3-padding-30 w3-center">
        <div className="card__main">
            <div className="card__inner">
                <p className="card__name">OUR COUNTRY</p>
                <p className="card__total card__small">INDIA</p>
            </div>
        </div>


        </li>
        <li className="card w3-grey w3-hover-shadow w3-padding-30 w3-center">
        <div className="card__main">
            <div className="card__inner">
                <p className="card__name">TOTAL RECOVERED</p>
                <p className="card__total card__small">{data.recovered}</p>
            </div>
        </div>


        </li><li className="card w3-blue w3-hover-shadow w3-padding-30 w3-center">
        <div className="card__main">
            <div className="card__inner">
                <p className="card__name">TOTAL CONFIRMED</p>
                <p className="card__total card__small">{data.confirmed}</p>
            </div>
        </div>


        </li><li className="card w3-grey w3-hover-shadow w3-padding-30 w3-center">
        <div className="card__main">
            <div className="card__inner">
                <p className="card__name">TOTAL DEATH</p>
                <p className="card__total card__small">{data.deaths}</p>
            </div>
        </div>


        </li><li className="card w3-blue w3-hover-shadow w3-padding-30 w3-center">
        <div className="card__main">
            <div className="card__inner">
                <p className="card__name">TOTAL ACTIVE</p>
                <p className="card__total card__small">{data.active}</p>
            </div>
        </div>


        </li><li className="card w3-grey w3-hover-shadow w3-padding-30 w3-center">
        <div className="card__main">
            <div className="card__inner">
                <p className="card__name">TOTAL UPDATED</p>
                <p className="card__total card__small">{data.lastupdatedtime}</p>
            </div>
        </div>


        </li>
    </ul>
    </section>
    </>

    );
};

export default Covid;
