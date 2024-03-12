
import {Routes, Route} from 'react-router-dom';
import Homepage from './pages/homepage';
import DishReview from './pages/dishReview';
import Review from './pages/review';




function App() {
  return (
    <div>
      <Routes>
        <Route index element= {<Homepage/>}></Route>
        <Route path="/home" element={<Homepage/>}/>
        <Route path="/dish" element={<DishReview/>}/>
        <Route path="/review" element={<Review/>}/>
      </Routes>
    </div>
    
  );
}

export default App;
