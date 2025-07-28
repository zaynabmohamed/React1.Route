import {  Outlet } from "react-router-dom";
import Navbar from './../Navbar/Navbar';
import Footer from "../Footer/Footer"
import Section from "../Section/Section";

export default function Layout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Section/>
    <Footer/>

    </>
  )
}
