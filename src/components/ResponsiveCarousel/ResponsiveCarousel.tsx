import React, { FC } from "react";
import { Carousel } from "react-responsive-carousel";
import slides from "./Slides.json"; // Ensure the JSON file is structured correctly
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Default Carousel styles
import Image from "next/image";
import "./ResponsiveCarousel.css"; // Custom CSS for styling

const ResponsiveCarousel: FC = () => {
    const { responsive } = slides;

    return (
        <div className="carousel-container">
            <Carousel
                showArrows={true}
                showIndicators={true}
                infiniteLoop={true}
                dynamicHeight={false}
                autoPlay={true} // Optional: Enables auto-play
                interval={5000} // Optional: 5 seconds for auto-play
            >
                {responsive.map((slide) => (
                    <div key={slide.id} className="carousel-slide">
                        {/* Image Section */}
                        <div className="image-container">
                            <Image
                                src={slide.imageUrl}
                                alt={slide.title}
                                layout="responsive"
                                width={800}
                                height={600}
                                className="carousel-image"
                            />
                        </div>

                        {/* Text Section */}
                        <div className="text-container">
                            <h2>{slide.title}</h2>
                            <p>{slide.text}</p>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default ResponsiveCarousel;