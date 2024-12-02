import React from 'react';
import { Card } from 'antd';

const ComponentCard = ({ title, details, imgSrc, imgAlt, imgWidth = 400 }) => {
    return (
        <Card style={{ margin: '20px 96px 0px 72px' }}>
            <div style={{ display: 'flex' }}>
                <div style={{ flex: 1 }}>
                    <h2>{title}</h2>
                    <p>
                        {details.map((detail, index) => (
                            <span key={index}>
                                <b style={{ fontStyle: 'italic' }}>{detail.label}:</b> {detail.value} <br />
                            </span>
                        ))}
                    </p>
                </div>
                {imgSrc && (
                    <img
                        src={imgSrc}
                        alt={imgAlt}
                        style={{ width: `${imgWidth}px`, marginRight: '60px' }}
                    />
                )}
            </div>
        </Card>
    );
};

export default ComponentCard;
