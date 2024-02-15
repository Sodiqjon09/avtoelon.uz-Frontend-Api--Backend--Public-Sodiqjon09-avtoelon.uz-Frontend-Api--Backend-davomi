import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import Footure from "../components/Footure/Footure";
import Post from "../admin login/Post/Post";
import IndexJsx from "../../client/pages/index";
import Main from "../components/Main/Main";
import CarAPi from "../components/carApi/carApi";
import Loading from "../components/loading/loading";
import Error404 from "../components/Error404/Error";
import ContentQoyida from "../components/ContentQoyida/ContentQoyida";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const Home = () => {
  const [loading, setLoading] = useState(true);

  const isPostPage = window.location.pathname === "/post";

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  return (
    <>
      <ToastContainer />
      {loading ? (
        <Loading />
      ) : (
       <>
        <Routes>
            <Route path="/post" element={<Post />} />
            <Route
              path="/"
              element={
                isPostPage ? (
                  <Navigate to="/post" />
                ) : (
                  <>
                    <Navbar />
                    <Main />
                    <CarAPi />
                    <Footure />
                  </>
                )
              }
            />
            <Route path="/home" element={<IndexJsx />} />
            <Route path="/mashinasozlik" element={<IndexJsx />} />
            <Route path="/mashina" />
            <Route path="/avtozapchat" />
            <Route path="/remont" />
            <Route path="/content" element={<ContentQoyida />} />
            <Route path="/*" element={<Error404 />} />
          </Routes>
       </>
      )}
    </>
  );
};

export default Home;
