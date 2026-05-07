import { Routes, Route } from "react-router-dom";

import SidebarLayout from "./layouts/SidebarLayout";
import DetailLayout from "./layouts/DetailLayout";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import ProjectDetails from "./pages/ProjectDetails";
import BlogDetails from "./pages/BlogDetails";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="max-h-full overflow-y-scroll relative">
      <div className="max-w-350 mx-auto">
        <Routes>
          <Route element={<SidebarLayout />}>
            <Route index element={<About />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="blog" element={<Blog />} />
          </Route>
          <Route element={<DetailLayout />}>
            <Route path="projects/:id" element={<ProjectDetails />} />
            <Route path="blog/:id" element={<BlogDetails />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}
