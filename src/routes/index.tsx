import { Route, BrowserRouter, Routes} from "react-router-dom";
import Header from "../pages/home";

export const AppRoutes = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header/>} />
        </Routes>
      </BrowserRouter>
    );
  };