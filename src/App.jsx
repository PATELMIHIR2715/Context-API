
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <div className="main-container">
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  );
}

export default App
