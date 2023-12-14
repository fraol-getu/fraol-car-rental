import { Route, Routes, Navigate } from "react-router-dom";
import About from '../pages/About'
import Blog from '../pages/Blog'
import BlogDetails from '../pages/BlogDetails'
import CarDetails from '../pages/CarDetails'
import CarListng from '../pages/CarListng'
import Home from "../pages/Home";
import Contact from "../pages/Contact";
const Routers = () => {

return (
<Routes>

<Route path="/*" element={<Home/>} />
<Route path="/about" element={<About/>} />
<Route path="/cars" element={<CarListng/>} />
<Route path="/cars/:slug" element={<CarDetails/>} />
<Route path="/blogs" element={<Blog/>} />
<Route path="/blogs/:slug" element={<BlogDetails/>} />
<Route path="/contact" element={<Contact/>} />





</Routes>






)
 



}

export default Routers