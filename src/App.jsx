import React from 'react';
import * as Pages from './pages';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components';

import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Pages.Home />}/>
        <Route path="add" element={<Pages.AddWish />}/>
        <Route path="wishes" element={<Pages.Wishes />}/>
        <Route path="wishes/:id" element={<Pages.Wish />} />
        <Route path="*" element={<Pages.NotFound />}/>
      </Route>
    </Routes>
  )
}

export default App
