import { useEffect, useState } from 'react'
import { Row, Col } from 'antd'
import UserCard from './components/UserCard'
import './App.css'

const App = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
  }, [])

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id))
  }

  const updateUser = (id, user) => {
    setUsers(
      users.map((item) => {
        if (item.id === id) {
          return user
        }
        return item
      })
    )
  }

  return (
    <Row>
      {users.map((user) => (
        <Col xs={24} sm={24} md={8} lg={8} xl={6} key={user.id}>
          <UserCard
            user={user}
            deleteUser={deleteUser}
            updateUser={updateUser}
          />
        </Col>
      ))}
    </Row>
  )
}

export default App
