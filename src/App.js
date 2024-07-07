import './App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {NavbarComponent} from "./components/NavbarComponent/NavbarComponent";
import {SidebarComponent} from "./components/SidebarComponent/SidebarComponent";
import {FooterComponent} from "./components/FooterComponent/FooterComponent";
import {HomePage} from "./pages/HomePage/HomePage";
import {MyMachine} from "./pages/MyMachine/MyMachine";
import {MyCoupling, productsLoader} from "./pages/MyCoupling/MyCoupling";
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
import {Se} from "./pages/Se/Se";
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { Coupling } from './components/Coupling/Coupling';
import { CouplingGroup } from './components/CouplingGroup/CouplingGroup';
import jsonCouplings from './data/couplings.json';
import jsonProducts from './data/products.json';
import {CartSidebar} from "./components/CartSidebar/CartSidebar";
import {CheckoutComponent} from "./components/CheckoutComponent/CheckoutComponent";
import {ThankYou} from "./components/ThankYou/ThankYou";

export const Context = createContext({sidebar: false, cartSidebar: false});
export const ProductContext = createContext(false);
export const AuthContext = createContext(null);
export const CartContext = createContext([]);

function App() {
    const [toggleSidebar, setToggleSidebar] = useState({sidebar: false, cartSidebar: false});

    const [toggleCartSidebar, setToggleCartSidebar] = useState({sidebar: false, cartSidebar: false});

    const [ user, setUser ] = useState({name: "", isAuthenticated: false})

    const [cart, setCart] = useState([]);

    // const login = (userName, password) => {

    //     // Make a call to the authentication API to check the username

    //     return new Promise((resolve, reject) => {

    //         if (password === "password") {
    //             setUser({name: '', isAuthenticated: false})
    //             resolve("success")
    //         } else {
    //             reject("Incorrect password")
    //         }
    //     })


    // }

    // const logout = () => {

    //     setUser({...user, isAuthenticated: false})
    // }

    let couplings = JSON.parse(JSON.stringify(jsonCouplings, null, 2));
    let products = JSON.parse(JSON.stringify(jsonProducts, null, 2));

    function flattenArray(arr) {
        return arr.reduce((acc, val) => {
            if (Array.isArray(val)) {
                acc.push(...flattenArray(val));
            } else if (typeof val === 'object' && val !== null) {
                acc.push(val);
            }
            return acc;
        }, []);
    }

  return (
    <div className="App">
      <Context.Provider value={[toggleSidebar, setToggleSidebar, toggleCartSidebar, setToggleCartSidebar]}>
        <AuthContext.Provider value={[user, setUser]}>
            <CartContext.Provider value={[cart, setCart]}>
                <Router>
                    <NavbarComponent products={couplings}/>
                    <SidebarComponent products={couplings}/>
                    <CartSidebar/>
                    <Routes basename="/se-europe-pl">
                        <Route path="/" element={<HomePage />} />
                        <Route path="/moje-zlacze">
                            <Route index  element={<MyCoupling products={couplings} />} />
                            {products.map(product => <Route path={`${product.id}`} element={<Se products={product} coupling={flattenArray(couplings)}

                                                                                      // coupling={couplings.filter(elem => Object.values(elem.tableData))}
                            />} />) }
                            {/*{console.log(flattenArray(couplings).map(el => Object.values(el.tableData).flat().filter(el => el.artNo === 100838)).flat().find(el => el.artNo === 100838))*/}
                            {/*    console.log(Object.values(elem.tableData).flat().filter(el => el.artNo === 100838))*/}
                            {/*}*/}
                            {/* <Route path=":product" element={<Coupling/>} /> */}
                            {couplings.map(el => Array.isArray(el) ?
                                <>
                                    <Route path={`${el[0].couplings[0]}`} element={<CouplingGroup couplingName={`${el[0].couplings[1]}`} products={el} />} ></Route>
                                    {el.map(
                                        elem => <Route path={`${elem.url}`} element={<ThreePoint products={elem}/>}/>
                                    )}
                                </>
                                :
                                <Route path={`${el.url}`} element={<ThreePoint products={el}/>}/>
                            )}
                            {/* <Route path="3-punkt" element={<ThreePoint />} /> */}
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
                        <Route path="/moje-konto" element={<PrivateRoute />} >
                            <Route path="moja-strona" element={<MyPage />} />
                            <Route path="moje-dane" element={<MyDetails />} />
                            <Route path="przeglad-zamowien" element={<OrderOverview />} />
                            <Route path="przeglad-faktur" element={<InvoiceOverview />} />
                        </Route>
                        <Route path="/checkout" element={<CheckoutComponent />} />
                        <Route path="/thank-you-page" element={<ThankYou />} />
                        <Route path="/pomoc-nowy-klient" element={<NewCustomer />} />
                        <Route path="/pomoc-jak-zamawiac" element={<HowToShop />} />
                        <Route path="/pomoc-jak-szukac" element={<HowToSearch />} />
                        <Route path="/pomoc-bezpieczenstwo-cookies" element={<SecurityCookies />} />
                        <Route path="/pomoc-dostawa" element={<Delivery />} />
                        <Route path="/pomoc-moje-konto" element={<MyAccount />} />
                    </Routes>
                    <FooterComponent />
                </Router>
            </CartContext.Provider>
        </AuthContext.Provider>
      </Context.Provider>
    </div>
  );
}


export default App;
