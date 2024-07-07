import './CheckoutComponent.scss';
import {Link} from "react-router-dom";
import {OrderTable} from "../OrderTable/OrderTable";
import {ThankYou} from "../ThankYou/ThankYou";
import {useContext} from "react";
import {CartContext} from "../../App";

export const CheckoutComponent = () => {
    const [cart, setCart] = useContext(CartContext);

    return (
        <main className={'checkout-page'}>
            <section className={'section-contrains tables-page'}>
                <h1 className={'page-title'}>CHECKOUT</h1>
                <div className={'info-container'}>
                    <div className={'info-item'}>
                        <h2 className={'paragraph--medium'}>Zamówienie i oferta</h2>
                        <br />
                        <div className={'info-item__subitem'}>
                            <label>
                                <input
                                    type="radio"
                                    name="options"
                                    value="option1"
                                />
                                Zamówienie
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="options"
                                    value="option1"
                                />
                                Oferta
                            </label>
                        </div>
                    </div>
                </div>
                <div className={'info-container'}>
                    <div className={'info-item'}>
                        <div className={'info-item__titles'}>
                            <h2 className={'paragraph--medium'}>Koszyk</h2>
                            <h2 className={'paragraph--medium'}>Wyłączając VAT</h2>
                        </div>
                        <br />
                        <OrderTable />
                    </div>
                </div>
                <div className={'info-container info-container--multiple'}>
                    <div className={'info-item'}>
                        <h2 className={'paragraph--medium'}>Płatność</h2>
                    </div>
                    <div className={'info-item'}>
                        <h2 className={'paragraph--medium'}>Dostawa</h2>
                    </div>
                </div>
                <div className={'info-container info-container--multiple'}>
                    <div className={'info-item'}>
                        <h2 className={'paragraph--medium'}>Moja dostawa</h2>
                        <br />
                    </div>
                    <div className={'info-item'}>
                        <h2 className={'paragraph--medium'}>Łącznie</h2>
                        <br />
                        <div className={''}>
                            <p className={'section-subtitle total-info'}>
                                {cart.reduce((acc, item)  => acc + (item.price * item.quantity), 0)}
                            </p>
                            <div className={'total--partial'}>
                                <p>Ilość przedmiotów</p>
                                <p>{cart.reduce((acc, item) => acc + (item.quantity), 0)}</p>
                            </div>
                            <div className={'total--partial'}>
                                <p>Waga</p>
                                <p>{cart.reduce((acc, item) => acc + (item.weight), 0)}</p>
                            </div>
                            <div className={'total--partial'}>
                                <p>Łączna suma bez VAT</p>
                                <p>{cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)}</p>
                            </div>
                            <div className={'total--partial'}>
                                <p>Suma VATu</p>
                                <p>0</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'info-container'}>
                    <div className={'info-item'}>
                        <h2 className={'paragraph--medium'}>Other details</h2>
                    </div>
                </div>
                <div className={'info-container'}>
                    <div className={'info-item'}>
                        <h2 className={'paragraph--medium'}>Złóż zamówienie</h2>
                        <br />
                        <Link className={'btn-sidebar--cart'} to={'/thank-you-page'} element={<ThankYou/>}>ZŁÓŻ ZAMÓWIENIE</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}