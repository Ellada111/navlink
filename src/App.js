import { PortfolioPage } from "./Components/pages/PortfolioPage";
import { ContactsPage } from "./Components/pages/ContactsPage";
import { MainPage } from "./Components/pages/MainPage";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import { NavBar } from "./Components/NavBar";
import { LoginPage } from "./Components/pages/LoginPage";
import { Layout } from "./Components/hoc/Layout";
import { Footer } from "./Components/Footer";



function App (){
  return (
    <BrowserRouter>

    <Routes>
      <Route path="/" element= {<Layout/>}>
      <Route index element = {<MainPage/>}/>
      <Route path="contacts" element = {<ContactsPage/>}/>
      <Route path="portfolio" element = {<PortfolioPage/>}/>
     
      </Route>
     
      <Route path="/login" element = {<LoginPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App