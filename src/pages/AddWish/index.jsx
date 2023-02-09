import React, {useState} from 'react'
import { AddForm } from '../../components';

export default function AddWish() {
  const [input, setInputText] = useState('');

  return (
    <AddForm input={input} setInputText={setInputText}/>
  )
}
