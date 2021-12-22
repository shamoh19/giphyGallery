import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Layout from './components/Layout/Layout';
import './App.css';



function App() {

  return (
    <Layout>
      <Routes >
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<Navigate to='/' />} />

      </Routes >
    </Layout>
  );
}

export default App;