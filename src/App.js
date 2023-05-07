//import './categories.styles.scss';
//import CategoryItem from './components/category-item/category-item.component';
//import Directoty from './components/directory/directory.component'
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';

/* const Navigation = () => {
  return (
    <div>
      <div>
        <h1>I am the navigation bar</h1>
      </div>
      <Outlet />
    </div>
  )
} */



const Shop = () => {
  return <h1>I am the shop page.</h1>;
}

const App = () => {
  return (
    //index:路徑上什麼都沒有的時候，會導向Home，即首頁的作法
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>

  );
};

export default App;
