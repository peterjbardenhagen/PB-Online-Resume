import React from 'react';
import './Recommendations.css';
import json from './Recommendations.json';

interface Recommendation {
    name: string;
    profile_link: string;
    profile_image: string;
    recommendation: string;
}

const Recommendations: React.FC = () => {
    // Sort the recommendations by name
    const sortedRecommendations = json.sort((a: Recommendation, b: Recommendation) => {
        return a.name.localeCompare(b.name);
    });

    return (
        <div className="recommendations-container">
            <div className="recommendations-grid">
                {sortedRecommendations.map((item: Recommendation, index: number) => (
                    <div key={index} className="recommendation">
                        <div className="profile">
                            <img
                                src={item.profile_image}
                                alt={`Profile image of ${item.name}`}
                                className="profile-image"
                            />
                            <div className="profile-info">
                                <a
                                    href={item.profile_link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="profile-name"
                                >
                                    {item.name}
                                </a>
                            </div>
                        </div>
                        <p className="recommendation-text">
                            {item.recommendation}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Recommendations;