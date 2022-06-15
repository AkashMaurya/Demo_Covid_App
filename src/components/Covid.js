import React, { useEffect, useState } from 'react'
import './covid.css';
const Covid = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () => {
        try {
            const res = await fetch('https://data.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        } catch (err) {
            console.log(err);
        }
    }

    // Using the useEffect for first time only
    useEffect(() => {
        getCovidData();
    }, []);


    return (
        <div>
            <h2>Live Data</h2>
            <h1>Covid Report tracker of INDIA</h1>


            <ul>
                <li className="card">
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name"><span>Our </span>Country</p>
                            <p className="card__total card__small">INDIA</p>
                        </div>
                    </div>
                </li>
                <li className="card">
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name"><span>Total </span>Recoved</p>
                            <p className="card__total card__small">{data.recovered}</p>
                        </div>
                    </div>
                </li>
                <li className="card">
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name"><span>Total </span>Confirmed</p>
                            <p className="card__total card__small">{data.confirmed}</p>
                        </div>
                    </div>
                </li>
                <li className="card">
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name"><span>Total  </span>Death</p>
                            <p className="card__total card__small">{data.deaths}</p>
                        </div>
                    </div>
                </li>
                <li className="card">
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name"><span>Total </span>Active</p>
                            <p className="card__total card__small">{data.active}</p>
                        </div>
                    </div>
                </li>
                <li className="card">
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name"><span>Last </span>Update</p>
                            <p className="card__total card__small">{data.lastupdatedtime}</p>
                        </div>
                    </div>
                </li>

            </ul>
        </div>
    )
}

export default Covid
