import SearchForm from './components/SearchForm';
import WeatherPage from './views/WeatherPage';

function App() {
  return (
    <div className="App">
      <div className=' m-10 p-10 box-border flex min-h-screen items-center justify-center color-red-600'>
        <div className='box-border rounded-sm h-full min-h-fit w-full'>
          <div className='box-border'>
            <SearchForm />
            <WeatherPage/>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
