import React from 'react';
import { useEffect, useState } from 'react';
import UserCard from './UserCard.jsx';
import './App.css'; 

function App() {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        async function getUsers() {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            setUsers(data);
                console.log(users);
        }

        getUsers();
    }, []);

    const filteredUsers = users.filter(function (user) {
        return user.name.toLowerCase().includes(search.toLowerCase());
    });

    return (
        <main className="container">
            <h1>React User API Explorer</h1>
            <p>Explore users loaded from a public API.</p>

            <label htmlFor="search">Search users by name</label>
            <input
                id="search"
                type="text"
                placeholder="Enter a name"
                value={search}
                onChange={function (event) {
                    setSearch(event.target.value);
                }}
            />

            <section className="user-list" aria-label="Users">
                {filteredUsers.map(function (user) {
                    return (
                        <UserCard
                            key={user.id}
                            name={user.name}
                            email={user.email}
                            phone={user.phone}
                        />
                    );
                })}
           </section>     
        </main>
    );
}

export default App;