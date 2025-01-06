import React from 'react';
import CardData from '../models/CardData'; 

interface CardComponentProps {
    data: CardData;
}

const CardComponent: React.FC<CardComponentProps> = ({ data }) => {
    return (
        <div className="card border rounded-lg shadow-md p-4">
            <img src={data.imageUrl} alt={data.title} className="card-image mb-2 rounded" />
            <div className="card-info">
                <h3 className="text-lg font-semibold">{data.title}</h3>
                <p>฿{data.price}</p>
            </div>
        </div>
    );
};

export default CardComponent;
