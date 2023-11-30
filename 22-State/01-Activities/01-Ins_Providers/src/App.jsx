import UserProvider from './utils/UserContext';
import UserComponent from './components/UserComponent';
import './App.css';

export default function App() {
  return (
    <div>
       <UserProvider> {/* Wrap in UserProvider to grant access to global variables. */}
        <UserComponent />
      </UserProvider>
    </div>
  );
}
