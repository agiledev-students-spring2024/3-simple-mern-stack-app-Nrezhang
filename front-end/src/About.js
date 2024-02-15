import React, {useState, useEffect}from 'react'
import axios from 'axios'
import './About.css'


const About = () => {
    const [data, setData] = useState(null);
    const fetchAbout = () => {
        axios
            .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/about`)
            .then(response => {
                setData(response.data);
                console.log(response.data);
            })
            .catch(err => {
                console.error(err);
            });
    };
    useEffect(() => {
        fetchAbout();
    }, []);


    return (
        <>
            <h1>About</h1>
            {data ? (
                <div className='about'>
                    <img src={data.image} alt="About Image" />
                    <p>{data.text}</p>
                    <p>{data.text2}</p>
                    
                </div>
            ) : (
                <div>Error fetching data.</div>
            )}
        </>
    );
};

export default About