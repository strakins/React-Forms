
import './App.css';
import Forms from './component/Forms';
import Header from './component/Header';

function App() {
  return (
    <div className="bg-slate-900 lg:h-screen ">
      < Header />
      <div className='pb-4'>
        < Forms />
      </div>
    </div>
  );
}

export default App;
