import './App.css';
import {useQuery, gql} from '@apollo/client';
import React from 'react'; // Add missing import statement

const query = gql`
  query GetTodos{
    getTodos {
      id
      title
      user{
        name
      }
    }
  }
`;


function App() {
  const {data, loading} = useQuery(query);
  if(loading) return <h1>loading ...</h1>
  return data.getTodos.map(({ id, title, user }) => (
    <div key={id}>
      <h3>{id}</h3>
      <br />
      <b>{title}</b> 
      <p>{user.name}</p>
      <br />
    </div>
  ));
}

export default App;
