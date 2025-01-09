import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import d3Cloud from 'd3-cloud';
import './WordCloud.css';

const WordCloud = () => {
    const containerRef = useRef();
    const [dimensions, setDimensions] = useState({ width: 1200, height: 900 });

    useEffect(() => {
        // Function to update dimensions
        const updateDimensions = () => {
            if (containerRef.current) {
                const { width } = containerRef.current.getBoundingClientRect();
                // Maintain aspect ratio of 4:3
                setDimensions({
                    width: width,
                    height: width * 0.8
                });
            }
        };

        // Initial dimension setup
        updateDimensions();

        // Add resize listener
        window.addEventListener('resize', updateDimensions);

        // Cleanup
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    useEffect(() => {
        if (!dimensions.width || !dimensions.height) return;

        const words = [
            { text: "SEO", size: 30 },
            { text: "Strategy", size: 45 },
            { text: "Software Development", size: 30 },
            { text: "Business Acumen", size: 40 },
            { text: "Interpersonal Skills", size: 25 },
            { text: "Reliable", size: 20 },
            { text: "Communicator", size: 35 },
            { text: "Proactive", size: 25 },
            { text: "Mentor", size: 20 },
            { text: "Digital", size: 60 },
            { text: "SDLC", size: 20 },
            { text: "Project Management", size: 40 },
            { text: "Innovative", size: 30 },
            { text: "High-Pressure", size: 20 },
            { text: "Relationship Builder", size: 30 },
            { text: "Microsoft", size: 20 },
            { text: "Leadership", size: 35 },
            { text: "Quality and Excellence", size: 25 },
            { text: "Emerging Technologies", size: 35 }
        ];

        // Clear any existing SVG content
        d3.select(containerRef.current).selectAll("svg").remove();

        // Create new SVG
        const svg = d3.select(containerRef.current)
            .append("svg")
            .attr("width", dimensions.width)
            .attr("height", dimensions.height)
            .append("g")
            .attr("transform", `translate(${dimensions.width / 2},${dimensions.height / 2})`);

        // Adjust font sizes based on container width
        const fontScale = dimensions.width / 1000; // baseline width of 1000px
        const fontSize = d3.scaleLinear()
            .domain([20, 50])
            .range([20 * fontScale, 60 * fontScale]);

        const color = d3.scaleOrdinal()
            .domain(words.map(d => d.text))
            .range(d3.schemeSet2);

        const getRotation = () => {
            return Math.random() < 0.5 ? 0 : 90;
        };

        // Configure the layout
        const layout = d3Cloud()
            .size([dimensions.width, dimensions.height])
            .words(words)
            .padding(10)
            .rotate(() => getRotation())
            .font("Arial Narrow")
            .fontSize(d => fontSize(d.size))
            .spiral("archimedean")
            .on("end", draw);

        function draw(words) {
            svg.selectAll("text")
                .data(words)
                .enter()
                .append("text")
                .style("font-family", "Arial Narrow")
                .style("font-weight", "600")
                .style("fill", d => color(d.text))
                .attr("text-anchor", "middle")
                .style("font-size", d => `${d.size}px`)
                .attr("transform", d => `translate(${d.x},${d.y})rotate(${d.rotate})`)
                .text(d => d.text)
                .style("cursor", "pointer")
                .on("mouseover", function (event, d) {
                    d3.select(this)
                        .transition()
                        .duration(200)
                        .style("font-size", `${d.size * 1.2}px`);
                })
                .on("mouseout", function (event, d) {
                    d3.select(this)
                        .transition()
                        .duration(200)
                        .style("font-size", `${d.size}px`);
                });
        }

        layout.start();

        return () => {
            d3.select(containerRef.current).selectAll("svg").remove();
        };
    }, [dimensions]);

    return (
        <div className="word-cloud-wrapper">
            <div
                ref={containerRef}
                className="word-cloud-container"
            />
            <p className="c">
                An AI generated visualisation of skills and qualities most often recognised by peers
            </p>
        </div>
    );
};

export default WordCloud;