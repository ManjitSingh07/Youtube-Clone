import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';

import Parent from './Components/Parent';
import FullPage from './Components/FullPage';
import YoutubeVideoPlayer from './Components/VideoPlayer/YoutubeVideoPlayer';
import SearchVideoPage from './Components/SearchPage/SearchVideoPage';
function App() {
  
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Parent />,
      children:[
        {path:'page/:pageTitle',element: <FullPage/>},
        {path:'/',element:<FullPage/>},
        {path:'video/:videoID',element: <YoutubeVideoPlayer/>},
        {path:'searchPage/:searchQuery',element: <SearchVideoPage />},
      ]
    },
    
   

  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App;
