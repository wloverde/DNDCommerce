import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ItemPage() {
    const [item, setItem] = useState({});
    const { itemId } = useParams();

    useEffect(() => {
        fetch(`/api/items/${itemId}`)
            .then(response => response.json())
            .then(data => setItem(data));
    }, [itemId]);

    return (
        <div>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <p>Price: {item.price}</p>
        </div>
    );
}

export default ItemPage;
