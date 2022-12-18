import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SharedLayout from './layouts/sharedlayout/SharedLayout';
import { Homepage, SinglePage, About } from './pages';
const App = () => {
   return (
      <>
         <Routes>
            <Route path="/" element={<SharedLayout />}>
               <Route index element={<Homepage />} />
               <Route path="about" element={<About />} />
               <Route path={`singlepage/:pageId`} element={<SinglePage />} />
            </Route>
         </Routes>
      </>
   );
};

export default App;
