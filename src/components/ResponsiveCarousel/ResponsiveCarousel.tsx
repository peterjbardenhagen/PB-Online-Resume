import React, { FC } from 'react';
import { Carousel } from "react-responsive-carousel";
import { Slides } from "./Slides.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image';

interface ResponsiveCarouselProps { }

const { responsive } = Slides;

const ResponsiveCarousel: FC<ResponsiveCarouselProps> = () => (
    <div>
        <Carousel
            showArrows={true}
            showIndicators={true}
            infiniteLoop={true}
            dynamicHeight={false}
        >
            {responsive.map((slide) => (
                <div key={slide.id}>
                    <div>
                        <Image src={slide.imageUrl} alt={slide.title} layout="responsive" width={800} height={600} />
                    </div>
                    <div>
                        <h2>{slide.title}</h2>
                        <p>{slide.text}</p>
                    </div>
                </div>
            ))}
        </Carousel>
    </div>
);

export default ResponsiveCarousel;