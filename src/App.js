import './App.css';
import Sidebar from './component/Sidebar';
import Mainchart from './component/charts/Mainchart';
import SearchBar from './component/SearchBar';
import CurrencyExchange from './component/CurrencyExchange';
import CurrencyChange from './component/CurrencyChange';
import MarketDominance from './component/Marketdominance';
import Navbar from './component/Navbar';


function App() {


  return (
    <div>
      <Navbar />
      <div className='lg:flex lg:flex-row flex flex-col'>
        <div className=' lg:w-[70%] w-full lg:overflow-y-auto lg:h-screen '>
          <div className='flex items-center justify-between'>
            <div className=' '>
              <CurrencyChange />
            </div>
            <div className='w-full'>
              <SearchBar />
            </div>
          </div>
          <div className='p-2 border'>
            <Mainchart />
          </div>
          <div className='lg:flex lg:flex-row flex-col gap-4'>
            <div className='border w-full'>
              <MarketDominance />
            </div>
            <div className='border w-full'>
              <CurrencyExchange />
            </div>
          </div>
        </div>
        <div className='lg:w-[30%] w-full'>
          <h1 className="text-xl font-bold m-2 pl-3">Cryptocurrency By MarketCap</h1>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default App;
