import React, { useState, useEffect } from 'react';
import TodoCard from './TodoCard';

export default function Todos({ todos }) {
    const [randomImageUrls, setRandomImageUrls] = useState([]);
    const [randomIndices, setRandomIndices] = useState([]);
    
    
    useEffect(() => {
        // Generate random images for each todo
        const images = Array.from({ length: todos?.length }, (_, i) => `https://picsum.photos/id/${i + 1}/200/300`);
        setRandomImageUrls(images);

        // Generate random indices to decide which todos will have images
        const indices = Array.from({ length: todos?.length }, (_, i) => i)
                             .filter(() => Math.random() > 0.5); // Adjust probability as needed
        setRandomIndices(indices);
    }, [todos]);

    return (
        <div
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 overflow-y-scroll gap-2"
            style={{
                gridAutoRows: 'auto',  // Ensures rows fit their content
            }}
        >
            {todos?.map((item, index) => {
                const isImageCard = randomIndices.includes(index);
                return (
                    <div
                        key={index} // Move key here for the wrapping div
                        style={{
                            gridRow: isImageCard ? 'span 2' : 'span 1',  // Span 2 rows for image cards
                        }}
                    >
                        <TodoCard
                            item={item}
                            image={isImageCard ? randomImageUrls[index] : null} // Use isImageCard directly
                        />
                    </div>
                );
            })}
        </div>
    );
}
