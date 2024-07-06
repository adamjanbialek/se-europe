import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import {useContext} from "react";
import {CartContext} from "../../App";
import {Context} from "../../App";
import './CartSidebar.scss';
import {CheckoutComponent} from "../CheckoutComponent/CheckoutComponent";
import {Link} from "react-router-dom";

export const CartSidebar = () => {
    const [cart, setCart] = useContext(CartContext);
    const [toggleCartSidebar, setToggleCartSidebar] = useContext(Context);

    return (
        <aside className={`aside-container--cart ${!toggleCartSidebar.cartSidebar ? 'aside-container--hidden' : ''}`}>
            <div className={`aside__subcontainer aside__subcontainer--cart`}>
                <div className={'aside__line-container'}>
                    <div className={'aside__line aside__line--no-bg'}>
                        <h2 className={'sidebar-title'}>
                            Koszyk
                        </h2>
                        <FontAwesomeIcon className={'btn btn--close btn--close--cart'} icon={faXmark} onClick={() => {setToggleCartSidebar({cartSidebar: false})}}/>
                    </div>
                </div>
                {cart.length ? (
                        <>
                            <div className={`aside__line-container aside__line-container--cart`}>
                                <button className={'btn-sidebar--cart'}>Do kasy</button>
                                <Link className={'btn-sidebar--cart'} to={'/checkout'} element={<CheckoutComponent/>}>Złożenie oferty</Link>
                                <div className={'info-container'}>
                                    <p>{cart.reduce((acc, el) => acc + el.quantity, 0)} produkt(ów)</p>
                                    <p>Koszt {cart.reduce((acc,el) => acc + (el.price * el.quantity), 0 )} <br></br>
                                        Wyłączając VAT</p>
                                </div>
                            </div>
                            <div className={'aside__line-container aside__line-container--column'}>
                                <ul className={'cart-item-container'}>
                                    {cart.map(product => {
                                        return (
                                            <div className={'cart-item'}>
                                                <div className={'cart-img-container'}>
                                                    <span>{product.quantity}</span>
                                                    <img className={'cart-img'} src={product.imgUrl}/>
                                                </div>
                                                <div>
                                                    <p>{product.id}</p>
                                                    <h3>{product.title}</h3>
                                                    <p>{product.price}</p>
                                                    <p>Sztuk: ${product.price * product.quantity}</p>
                                                </div>
                                                <FontAwesomeIcon className={'btn btn--close'} icon={faXmark} />
                                            </div>
                                        )
                                    })}
                                </ul>
                            </div>
                        </>
                ) : (
                    <div className={'no-products'}>
                        <FontAwesomeIcon className={'sidebar-icon sidebar-icon--empty'} icon={faCartShopping} />
                        <p>No products</p>
                    </div>
                    )}
            </div>
        </aside>
    );
}