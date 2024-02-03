import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Sidebar from './component/Sidebar';
import Linecharts from './component/charts/LInecharts';
import { fetchchart } from './redux/slice/chartslice';
import { useEffect } from 'react';
import Horizontalbarchart from './component/charts/HorizontalBarchart';
import VerticalBarchart from './component/charts/VerticalBarchart';
import Mainchart from './component/charts/Mainchart';
import CurrencyExchange from './component/CurrencyExchange';

function App() {



  return (
    <div>
      {/* <CurrencyExchange /> */}
      {/* <Mainchart /> */}
      <Sidebar />
    </div>
  );
}

export default App;
