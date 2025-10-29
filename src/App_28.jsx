import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {
  HomeLayoutPage_28,
  HomePage_28,
  BlogStaticPage_28,
  BlogLocalJsonPage_28,
  BlogLocalJsonPage2_28,
  BlogNodePage_28,
  BookListPage_28,
  BlogSupaPage_28,
} from './pages';

import {
  T11_ErrorExamplePage_28,
  T12_UseStateBasicsPage_28,
} from './pages/tutorials';

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
        path: 'localjson2_28',
        element: <BlogLocalJsonPage2_28 />,
      },
      {
        path: 'Node_28',
        element: <BlogNodePage_28 />,
      },
      {
        path: 'supa_28',
        element: <BlogSupaPage_28 />,
      },
      {
        path: 'bookList_28',
        element: <BookListPage_28 />,
      },
    ],
  },
  {
    path: '/tutorials',
    element: <HomeLayoutPage_28 />,
    children: [
      {
        index: true,
        element: <HomePage_28 />,
      },
      {
        path: 't11_28',
        element: <T11_ErrorExamplePage_28 />,
      },
      {
        path: 't12_28',
        element: <T12_UseStateBasicsPage_28 />,
      },
    ],
  },
]);

const App_28 = () => {
  return <RouterProvider router={router} />;
};

export default App_28;
