import { PlayerSetting } from 'components/PlayerSetting';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from 'screen/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      Component: Home,
    },
  ]);

  return (
    <div className='App'>
      <div>
        <h1>Clue-helper</h1>
      </div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
