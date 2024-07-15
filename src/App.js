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
import jsonMachines from './data/machines.json';
import jsonClient from './data/profile.json';
import {CartSidebar} from "./components/CartSidebar/CartSidebar";
import {CheckoutComponent} from "./components/CheckoutComponent/CheckoutComponent";
import {ThankYou} from "./components/ThankYou/ThankYou";
import {FavsTable} from "./components/FavsTable/FavsTable";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";

export const Context = createContext({sidebar: false, cartSidebar: false});
export const ProductContext = createContext(false);
export const AuthContext = createContext(true);
export const CartContext = createContext([]);
export const OrderAndDeliveryContext = createContext({order: true, delivery: 1});
export const FavsContext = createContext([]);

function App() {
    const [toggleSidebar, setToggleSidebar] = useState({sidebar: false, cartSidebar: false});
    const [orderAndDelivery, setOrderAndDelivery] = useState({order: true, delivery: '1'});

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
    let machines = JSON.parse(JSON.stringify(jsonMachines, null, 2));
    let client = JSON.parse(JSON.stringify(jsonClient, null, 2));

    const [favs, setFavs] = useState(products.filter(product => product.favorite === true));

    console.log(favs)

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
                <OrderAndDeliveryContext.Provider value={[orderAndDelivery, setOrderAndDelivery]}>
                    <FavsContext.Provider value={[favs, setFavs]}>
                        <Router >
                            <NavbarComponent products={couplings} machines={machines}/>
                            <SidebarComponent products={couplings} machines={machines}/>
                            <CartSidebar/>
                            <Routes >
                                <Route path="/" element={<HomePage machines={machines} />} />
                                <Route path="/moje-zlacze">
                                    <Route index  element={<MyCoupling products={couplings} />} />
                                    {products.map((product, key) => <Route key={key} path={`${product.id}`} element={<Se products={product} coupling={flattenArray(couplings)}/>} />) }

                                    {couplings.map((el,key) => Array.isArray(el) ?
                                        <Route path="" key={key}>
                                            <Route key={`group-${key}`} path={`${el[0].couplings[0]}`}  element={<CouplingGroup key={key} couplingName={`${el[0].couplings[1]}`} products={el} />} ></Route>
                                            {el.map(
                                                (elem, subIndex) => <Route key={`item-${key}-${subIndex}`} path={`${elem.url}`} element={<ThreePoint key={key} products={elem}/>}/>
                                            )}
                                        </Route>
                                        :
                                        <Route key={key} path={`${el.url}`} element={<ThreePoint products={el}/>}/>
                                    )}
                                </Route>
                                <Route path="/moja-maszyna">
                                    <Route index element={<MyMachine machines={machines} />} />

                                    {products.map((product,key) => <Route key={key} path={`${product.id}`} element={<Se key={key} products={product} coupling={flattenArray(couplings)}/>} />) }
                                    {machines.map((el,key) => Array.isArray(el) ?
                                        <Route key={key} path="">
                                            <Route key={key} path={`${el[0].category[0]}`} element={<CouplingGroup couplingName={`${el[0].category[1]}`} products={el} />} ></Route>
                                            {el.map(
                                                (elem, key) => <Route key={key} path={`${elem.url}`} element={<ThreePoint products={elem}/>}/>
                                            )}
                                        </Route>
                                        :
                                        <Route key={key} path={`${el.url}`} element={<ThreePoint products={el}/>}/>
                                    )}

                                    {/*<Route path="ladowarka-kolowa" element={<WheelLoader />} />*/}
                                    {/*<Route path="koparka" element={<Excavator />} />*/}
                                    {/*<Route path="traktor" element={<Tractor />} />*/}
                                    {/*<Route path="ladowarka-teleskopowa" element={<TelescopicHandler />} />*/}
                                    {/*<Route path="wozek-widlowy" element={<Forklift />} />*/}
                                    {/*<Route path="bez-zlacz" element={<WithoutCoupling />} />*/}
                                </Route>
                                <Route path="/o-nas">
                                    <Route path="kontakt" element={<Contact />} />
                                    <Route path="to-jest-se" element={<ThisIsSe />} />
                                    <Route path="zrownowazony-rozwoj" element={<Sustainability />} />
                                    <Route path="znajdz-posrednika" element={<FindReseller />} />
                                </Route>
                                <Route path="/moje-konto"  >
                                    <Route path="moja-strona" element={<MyPage />} />
                                    <Route path="moje-dane" element={<MyDetails />} />
                                    <Route path="ulubione-produkty" element={<FavsTable products={products} />} />
                                    <Route path="przeglad-zamowien" element={<OrderOverview />} />
                                    <Route path="przeglad-faktur" element={<InvoiceOverview />} />
                                </Route>
                                <Route path="/checkout" element={<CheckoutComponent client={client} />} />
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
                    </FavsContext.Provider>
                </OrderAndDeliveryContext.Provider>
            </CartContext.Provider>
        </AuthContext.Provider>
      </Context.Provider>
    </div>
  );
}


export default App;
