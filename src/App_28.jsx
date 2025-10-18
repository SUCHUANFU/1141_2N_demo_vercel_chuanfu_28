import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {
  HomeLayoutPage_28,
  HomePage_28,
  BlogStaticPage_28,
  BlogLocalJsonPage_28,
  BlogNodePage_28,
  BookListPage_28,
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayoutPage_28 />,
    children: [
      {
        index: true,
        element: <HomePage_28 />,
      },
      {
        path: 'static_28',
        element: <BlogStaticPage_28 />,
      },
      {
        path: 'localjson_28',
        element: <BlogLocalJsonPage_28 />,
      },
      {
        path: 'Node_28',
        element: <BlogNodePage_28 />,
      },
      {
        path: 'bookList_28',
        element: <BookListPage_28 />,
      },
    ],
  },
]);

const App_28 = () => {
  return <RouterProvider router={router} />;
};

export default App_28;
