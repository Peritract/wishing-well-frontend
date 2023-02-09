import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const Wish = () => {

    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [wish, setWish] = useState({});

    useEffect(() => {

        setLoading(true);
        async function loadWish() {

            const response = await fetch(`http://localhost:3000/wishes/${id}`);
            const data = await response.json();
            setWish(data);
            setLoading(false);
        };

        loadWish();

    }, [])

    function displayWish() {
        return <main>
            <h1 className="wish-text">{wish.text}</h1>
            <Link to="/wishes">Back</Link>
        </main>
    }

    return loading ? <h2><em>loading...</em></h2> : displayWish();

};

export default Wish;