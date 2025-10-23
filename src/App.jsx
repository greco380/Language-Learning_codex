import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import Dashboard from './pages/Dashboard';
import LessonLibrary from './pages/LessonLibrary';
import Settings from './pages/Settings';
import Layout from './components/Layout';
import LoadingState from './components/LoadingState';

const App = () => (
  <Layout>
    <Suspense fallback={<LoadingState message="Loading your curriculum" />}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/library" element={<LessonLibrary />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Suspense>
  </Layout>
);

export default App;
