import React from 'react'
import Slider from 'react-animated-slider'
import 'react-animated-slider/build/horizontal.css'
import { Link } from 'react-router-dom';

const skills = ["8 huespedes", "wifi", "alberca", "cocina"];

const slides = [
    "https://a0.muscache.com/im/pictures/b1fb8257-c668-400f-ad32-7eb1115a8ead.jpg?aki_policy=x_large",
    "https://a0.muscache.com/im/pictures/30fd9b44-a9fe-42c2-a694-b01af1824b64.jpg?aki_policy=large",
    "https://a0.muscache.com/im/pictures/72d6f61d-e25b-41f2-85bf-1f60f0ae7eef.jpg?aki_policy=large",
    "https://a0.muscache.com/im/pictures/bc4410e8-12f8-44cc-9467-bfbe9fae9277.jpg?aki_policy=large",
    "https://a0.muscache.com/im/pictures/e4e1718a-c1d2-43a0-8a91-d3c29087f87e.jpg?aki_policy=large"
];


const Stay = ({ stay }) => (
    <div className="stay">
        <div className="my-carousel">
            <Slider>
                {slides.map((slide, index) => <div key={index}>
                    <img src={slide} alt="img" />
                </div>)}
            </Slider>
        </div>
        <div className="stay-content">
            <div className="stay-content-header">
                <span>Superalfitrion</span>
                <p>Condominio completo</p>
                <span id="stars">
                    <i class="fa fa-star" aria-hidden="true"></i> {stay.stars}
                </span>
            </div>
            <div className="stay-title">
                <Link to={`/stay/${stay.id}`}>{stay.title}</Link>
            </div>
            <div className="skills">
                {skills && skills.map(skill => <span key={skill} id="skill">{skill}</span>)}
            </div>
            <div className="stay-content-footer">
                <div className="price">
                    {stay.price} MXN
                    <span>por noche</span>
                </div>
                <div className="total">
                    Total: {stay.price} MXN
                </div>
            </div>
        </div>
    </div>
);

export default Stay;