import React, { FC, useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import CandidatePage from './components/pagecomponents/Candidate/CandidatePage';
import AdminPage from './components/pagecomponents/AdminPage/AdminPage';
import Login from './components/pagecomponents/Login/Login';
import { Roles, User } from './model';
import { AdminRoute, CandidateRoute } from './routes';
import { AdminLanding } from './components/pagecomponents/AdminPage/AdminLanding';
import { CandidateLanding } from './components/pagecomponents/Candidate/CandidateLanding';
import LandingPage from './components/pagecomponents/Guest/LandingPage';
import { Notfound } from './components/pagecomponents/Notfound';


const App: FC = () => {
  const [user, setUser] = useState<User | null>(JSON.parse(localStorage.getItem('user') || '{}'));

  useEffect(() => {
  }, []);

  return (
    <BrowserRouter>
      {(() => {
        switch (user?.roleName) {
          case Roles.ADMIN:
            return <AdminPage user={user} setUser={setUser} />
          case Roles.CANDIDATE:
            return <CandidatePage user={user} setUser={setUser} />
          default:
            return <Login setUser={setUser} />
        }
      })()}
      {(() => {
        switch (user?.roleName) {
          case Roles.ADMIN:
            return (
              <Routes>
                <Route path='/' element={<AdminLanding />} />
                <Route path='/admin' element={<AdminLanding />} />
                <Route path='*' element={<Notfound />} />
              </Routes>
            )
          case Roles.CANDIDATE:
            return (
              <Routes>
                <Route path='/' element={<CandidateLanding />} />
                <Route path='*' element={<Notfound />} />
              </Routes>
            )
          default:
            return (
              <Routes>
                <Route path='*' element={<LandingPage setUser={setUser} />} />
              </Routes>
            )
        }
      })()}
    </BrowserRouter>
  );
}

export default App;
