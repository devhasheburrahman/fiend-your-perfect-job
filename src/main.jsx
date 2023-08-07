import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Componant/Home/Home.jsx';
import Statistics from './Componant/Statistics/Statistics.jsx';
import Jobs from './Componant/Jobs/Jobs.jsx';
import Blogs from './Componant/Blogs/Blogs.jsx';
import Header from './Componant/Header/Header.jsx';
import Layout from './Componant/Layout/Layout.jsx';
import JobDetails from './Componant/JobDetails/JobDetails.jsx';
import Error from './Error/Error.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [


      {
        path: '/',
        element: <Home />,
        loader: () => fetch("job.json"),
        // loader: () => fetch("FutureJob.json")
      },

      {
        path: '/Statistics',
        element: <Statistics />,
        loader: () => fetch("chart.json")
      },
      {
        path: '/Jobs',
        element: <Jobs />
      },
      {
        path: '/blogs',
        element: <Blogs />
      },
      {
        path: '/jobDetails',
        element: <JobDetails />
      },
      {
        path: '/*',
        element: <Error />
      },





    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />





  ,
)
