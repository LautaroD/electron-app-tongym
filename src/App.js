import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Clients, Rutines, Layout, Exercises, Profile, Attendance } from './components';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/clients' element={<Clients />} />
            <Route path='/rutines' element={<Rutines />} />
            <Route path='/ejercicios' element={<Exercises />} />
            <Route path='/asistencias' element={<Attendance />} />
            <Route path='/perfil/:id' element={<Profile />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

