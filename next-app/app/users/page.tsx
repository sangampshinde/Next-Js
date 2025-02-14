// import React from 'react'

// const UserPage = () => {
  
//   return (
//     <div>page</div>
//   )
// }

// export default UserPage


// ----------------------------------------------

// import React from 'react'


// interface Users {
//   id:number;
//   name:string;
// }

// const UserPage = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');

//   const users:Users[] = await res.json();
  
//   return (
//     <>
//     <h1>Users</h1>
//     <ul>
//     {users.map((user) => <li key={user.id}>{user.name}</li>)}
//     </ul>

    
    
//     </>
//   )
// }

// export default UserPage

// -------------------------------------------------------
// Caching

// Storing data to someware whrer it faster to acess
    // Memmory
    // File Manager
    // Network

// as we go down it will speed will decrease i.e Memmory > File Manager > Network

import React from 'react'


interface Users {
  id:number;
  name:string;
}

const UserPage = async () => {

  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users:Users[] = await res.json();

  return (
    <>
    <h1>Users</h1>
    <ul>
    {users.map((user) => <li key={user.id}>{user.name}</li>)}
    </ul>
    </>
  )
}
export default UserPage