import { Routes, Route, Navigate } from 'react-router-dom';

import { Preview } from '../pages/Preview';
import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';
import { New } from '../pages/New';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/preview/:id" element={<Preview />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/new" element={<New />} />
      
      <Route path='*'element={<Navigate to='/' />} />
    </Routes>
  );
}