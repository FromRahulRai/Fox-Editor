import './App.css';
import Home from './Components/Home';
import DataProvider from './Context/DataProvider';

function App() {
    return (
        <DataProvider>
            <Home />

        </DataProvider>

    )
}

export default App;
