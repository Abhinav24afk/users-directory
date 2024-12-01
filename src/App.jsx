import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { Route, Router, Routes } from 'react-router-dom'
import UserList from './pages/UserList'
import UserDetail from './pages/UserDetail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>

      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/user/:id" element={<UserDetail />} />
        </Routes>
      </div>

    </Provider>
  )
}

export default App
