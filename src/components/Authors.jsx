import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Authors = () => {
    const [authors, setAuthors] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3000/authors')
        .then(response => setAuthors(response.data))
        .catch(error => console.error('Error fetching authors', error))
    }, []);

    return (
        <div>
            <h2>My Favourite Authors</h2>
            <ol>
                {authors.map(author=>(
                    <li key={author.id}>
                        {author.name}
                        <img src={author.picture} alt={author.name} style={{width: '100px', height: '100px'}} />
                    </li>
                ))}
            </ol>
        </div>
    )
}
export default Authors;