import Header from "../Component/Header";
import Footer from "../Component/Footer";
import { Outlet } from "react-router-dom";
import FetchItem from "../Component/FetchItem";
import { useSelector } from "react-redux";
import LoadingSpinner from "../Component/LoadingSpinner";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
 const fetchStatus=useSelector(store=>store.fetchStatus);
  return (
    <>
      <Header></Header>
      <FetchItem></FetchItem>
      {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet/> }
      <Footer></Footer>
    </>
  );
}

export default App;
