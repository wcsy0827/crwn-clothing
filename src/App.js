//import './categories.styles.scss';
//import CategoryItem from './components/category-item/category-item.component';
//import Directoty from './components/directory/directory.component'
import { Routes, Route } from 'react-router-dom'
import Home from './routes/home/home.component'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>

  );
};

export default App;
