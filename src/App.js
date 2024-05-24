import { Route,Routes } from "react-router-dom";

Route
function App() {
    return (
        <div className='App'>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
               
                
            </Routes>
            <h1>Hello</h1>
        </div>
    );
}

export default App;
