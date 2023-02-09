import React, {useState, useEffect} from 'react'
import Tag from '../Tag';

export default function AddForm({input, setInputText}) {
    const [success, setSuccess] = useState('');
    const [tags, setTags] = useState([]);
    const [tagConnection, setTagConnection] = useState([]);

    function handleInput(e) {
        setInputText(e.target.value)
    }

    function handleTag(e) {
        setTagConnection([...tagConnection, parseInt(e.target.value)])
    }

    function handleSubmit(e) {
        e.preventDefault(); 
        fetch('http://localhost:3000/wishes', {
            method: 'POST',
            body: JSON.stringify({text: input, tagIds: tagConnection}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
         .then((res) => res.json())
         .then((data) => {
            setSuccess('Wish added successfully.', 2000)
            setTimeout(() => {
                setSuccess('')
            }, 5000)
         })
         .catch((err) => {
            console.log(err.message);
         });
        setInputText('')
    }


    useEffect(() => {
        async function loadSnacks() {
            const response = await fetch("http://localhost:3000/tags");
            const data = await response.json();
            setTags(data);
        };
        loadSnacks();
  }, [])

    return(
        <>
        <form>
            <input value={input} type="text" className="wish-input" onChange={handleInput}/>  
            <div className='tag-container'>      
            {tags.map((tag) => <Tag tag={tag} handleTag={handleTag}/>)}
            </div>    
            <button type="submit" className="wish-button" onClick={handleSubmit}>Add a wish</button>
        </form>
        <p className='success'>{success}</p>
        </>
    )
}
