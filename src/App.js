import './App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {NavbarComponent} from "./components/NavbarComponent/NavbarComponent";
import {SidebarComponent} from "./components/SidebarComponent/SidebarComponent";
import {FooterComponent} from "./components/FooterComponent/FooterComponent";
import {HomePage} from "./pages/HomePage/HomePage";
import {MyMachine} from "./pages/MyMachine/MyMachine";
import {MyCoupling} from "./pages/MyCoupling/MyCoupling";
import {createContext, useState} from "react";
import {ThreePoint} from "./pages/ThreePoint/ThreePoint";
import {Tractor} from "./pages/Tractor/Tractor";
import {TelescopicHandler} from "./pages/TelescopicHandler/TelescopicHandler";
import {WheelLoader} from "./pages/WheelLoader/WheelLoader";
import {Excavator} from "./pages/Excavator/Excavator";
import {Forklift} from "./pages/Forklift/Forklift";
import {WithoutCoupling} from "./pages/WithoutCoupling/WithoutCoupling";
import {Contact} from "./pages/Contact/Contact";
import {ThisIsSe} from "./pages/ThisIsSe/ThisIsSe";
import {Sustainability} from "./pages/Sustainability/Sustainability";
import {NewCustomer} from "./pages/NewCustomer/NewCustomer";
import {SecurityCookies} from "./pages/SecurityCookies/SecurityCookies";
import {MyAccount} from "./pages/MyAccount/MyAccount";
import {HowToShop} from "./pages/HowToShop/HowToShop";
import {HowToSearch} from "./pages/HowToSearch/HowToSearch";
import {Delivery} from "./pages/Delivery/Delivery";
import {FindReseller} from "./pages/FindReseller/FindReseller";
import {MyPage} from "./pages/MyPage/MyPage";
import {MyDetails} from "./pages/MyDetails/MyDetails";
import {OrderOverview} from "./pages/OrderOverview/OrderOverview";
import {InvoiceOverview} from "./pages/InvoiceOverview/InvoiceOverview";

export const Context = createContext(false);
export const ProductContext = createContext(false);

export const AuthContext = createContext(null);

function App() {
    const [toggleSidebar, setToggleSidebar] = useState(false);

    const [ user, setUser ] = useState({name: "", isAuthenticated: false})

    const login = (userName, password) => {

        // Make a call to the authentication API to check the username

        return new Promise((resolve, reject) => {

            if (password === "password") {
                setUser({name: userName, isAuthenticated: true})
                resolve("success")
            } else {
                reject("Incorrect password")
            }
        })


    }
    const logout = () => {

        setUser({...user, isAuthenticated: false})
    }

  return (
    <div className="App">
      <Context.Provider value={[toggleSidebar, setToggleSidebar]}>
          <Router>
              <NavbarComponent />
              <SidebarComponent />
              <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/moje-zlacze">
                      <Route index  element={<MyCoupling />} />
                      <Route path="3-punkt" element={<ThreePoint />} />
                  </Route>
                  <Route path="/moja-maszyna">
                      <Route index element={<MyMachine />} />
                      <Route path="ladowarka-kolowa" element={<WheelLoader />} />
                      <Route path="koparka" element={<Excavator />} />
                      <Route path="traktor" element={<Tractor />} />
                      <Route path="ladowarka-teleskopowa" element={<TelescopicHandler />} />
                      <Route path="wozek-widlowy" element={<Forklift />} />
                      <Route path="bez-zlacz" element={<WithoutCoupling />} />
                  </Route>
                  <Route path="/o-nas">
                      <Route path="kontakt" element={<Contact />} />
                      <Route path="to-jest-se" element={<ThisIsSe />} />
                      <Route path="zrownowazony-rozwoj" element={<Sustainability />} />
                      <Route path="znajdz-posrednika" element={<FindReseller />} />
                  </Route>
                  {/*<AuthContext.Provider value={{user, login, logout}}>*/}
                      <Route path="/moje-konto">
                          <Route path="moja-strona" element={<MyPage />} />
                          <Route path="moje-dane" element={<MyDetails />} />
                          <Route path="przeglad-zamowien" element={<OrderOverview />} />
                          <Route path="przeglad-faktur" element={<InvoiceOverview />} />
                      </Route>
                  {/*</AuthContext.Provider>*/}
                  <Route path="/nowy-klient" element={<NewCustomer />} />
                  <Route path="/jak-zamawiac" element={<HowToShop />} />
                  <Route path="/jak-szukac" element={<HowToSearch />} />
                  <Route path="/bezpieczenstwo-cookies" element={<SecurityCookies />} />
                  <Route path="/dostawa" element={<Delivery />} />
                  <Route path="/moje-konto" element={<MyAccount />} />
              </Routes>
              <FooterComponent />
          </Router>
      </Context.Provider>
    </div>
  );
}

export default App;
