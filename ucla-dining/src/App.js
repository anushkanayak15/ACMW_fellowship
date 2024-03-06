
import {Routes, Route} from 'react-router-dom';
import Homepage from './pages/homepage';
import DishReview from './pages/dishReview';




function App() {
  return (
    <div>
      <Routes>
        <Route index element= {<Homepage/>}></Route>
        <Route path="/home" element={<Homepage/>}/>
        <Route path="/home" element={<DishReview/>}/>
      </Routes>
    </div>
    
  );
}

export default App;
