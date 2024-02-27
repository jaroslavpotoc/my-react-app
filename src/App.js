import React from 'react';
import { Route, RouterProvider } from 'react-router-dom';
import "./App.css";

const router = (
  <>
    {/* Wrap this Root Route to create Router here */}
    <Route path="/" element={null}>
      {/* Add Routes here! */}
    </Route>
  </>
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
