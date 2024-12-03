/*https://cloudinary.com/blog/3-ways-to-implement-a-carousel-in-nextjs*/
import React, { FC } from 'react';
import { Carousel } from "react-responsive-carousel";
import { items } from "./Items.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../../public/globals.css";

interface ResponsiveCarouselProps { }

const { responsive } = items;

const ResponsiveCarousel: FC<ResponsiveCarouselProps> = () => (
    <div>
        <Carousel
        showArrows={true}
        showIndicators={true}
        infiniteLoop={true}
        dynamicHeight={false}
        >
        {responsive.map((item) => (
            <div key={item.id}>
            <div>
                <img src={item.imageUrl} alt="slides" />
            </div>
            <div>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
            </div>
            </div>
        ))}
        </Carousel>
    </div>
);

export default ResponsiveCarousel;