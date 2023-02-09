import React, {useState, useEffect} from 'react'
import Wish from '../../components/Wish';
import { Link } from 'react-router-dom';

export default function Wishes() {
 const [wishes, setWishes] = useState([]);

 useEffect(() => {
        async function loadSnacks() {
            const response = await fetch("http://localhost:3000/wishes");
            const data = await response.json();
            setWishes(data);
        };
        loadSnacks();
  }, [])

  return (
    <main className="wish-main">
        <h1>Wishes</h1>
        <div className="wish-holder">
            {wishes.map((wish) => <Link className='wish-card' to={`/wishes/${wish.id}`} key={wish.id} ><Wish wish={wish} /></Link>)}
        </div>
    </main>
  )
}
