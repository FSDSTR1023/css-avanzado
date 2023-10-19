import { useEffect, useState } from 'react';
import './App.css';
import { Card } from './components/Card';
import { fetchUsers } from './helpers/fetch-users';

function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetchUsers().then(data => setUsers(data))
  }, [])

  return (
    <div className='container'>
      {
        users.map((e, i) => <Card key={e.id} props={e}></Card>)
      }
    </div>
  );
}

export default App;
