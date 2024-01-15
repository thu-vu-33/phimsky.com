import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Media = React.lazy(() => import("pages/Media"));
const Tab1 = React.lazy(() => import("pages/Tab1"));
const FrameTwo = React.lazy(() => import("pages/FrameTwo"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/frametwo" element={<FrameTwo />} />
          <Route path="/tab1" element={<Tab1 />} />
          <Route path="/media" element={<Media />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
