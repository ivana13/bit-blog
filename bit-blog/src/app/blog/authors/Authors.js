import React from 'react';
import { Link } from "react-router-dom";
import { AuthorInfo } from './AuthorInfo';

const Authors = () => {
    //{`/author/${author.id}`}
    return (
        <div>
            <h2> AUTHORS </h2>
            <Link to='author' className="nav-item nav-link">Milorad Pavic</Link>
        </div>
    )
}

export { Authors }