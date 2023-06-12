import './App.css';
import GridSelect from "./components/GridSelect/GridSelect";
import Layout from "./components/Layout/Layout";

function App() {
    return (
        <div className="container">
            <h1 className="visually-hidden">Конструктор сайтов</h1>
            <GridSelect/>
            <Layout />
        </div>
    );
}

export default App;
