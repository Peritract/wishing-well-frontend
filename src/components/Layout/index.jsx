import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <main>
            <header>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/add">Add a wish</NavLink>
                    <NavLink to="/wishes">Wishes</NavLink>
                </nav>
            </header>
            <article>
                <Outlet />
            </article>
        </main>
   )
}
