import React, { useEffect, useState } from "react";
import axios from 'axios';

const Quotes = () => {
    const [ quotes, setQuotes ] = useState([]);

    useEffect(()=>{
        console.log("Fetching quotes...")
        axios.get('http://localhost:3000/quotes')
        .then(response => setQuotes(response.data))
        .catch(error => console.error('Error fetching quotes:', error))
    }, []);

    return (
        <div>
            <h2>My Favourite Quotes</h2>
            <ul>
                {quotes.map(quote=>(
                    <li key={quote.id}>
                        {quote.text} - <em>{quote.category}</em>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Quotes;