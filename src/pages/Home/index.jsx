import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return <main>
        <h1>Make your biggest wish happen!</h1>
        <p>Welcome to the <b>Wishing Well</b>, the world's most famous Wishes site!</p>
        <ul>
            <li><Link to="/wishes">See your wishes</Link></li>
            <li><Link to="/add">Add a wish</Link></li>
        </ul>
    </main>
}
