import { GetStarted } from 'components/GetStarted';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import 'style/App.css';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      Component: GetStarted,
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
