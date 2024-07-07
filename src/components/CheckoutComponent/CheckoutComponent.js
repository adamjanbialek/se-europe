import './CheckoutComponent.scss';
import {Link} from "react-router-dom";
import {OrderTable} from "../OrderTable/OrderTable";
import {ThankYou} from "../ThankYou/ThankYou";
import {useContext, useState} from "react";
import {CartContext, OrderAndDeliveryContext} from "../../App";

export const CheckoutComponent = ({client}) => {
    const [cart, setCart] = useContext(CartContext);
    const [orderAndDelivery, setOrderAndDelivery] = useContext(OrderAndDeliveryContext);

    const [selectedOption, setSelectedOption] = useState('option1');
    const [selectedDelivery, setSelectedDelivery] = useState('delivery1');

    const handleOptionChange = (event) => {
        event.target.value === 'option1' ? setOrderAndDelivery({order: true, delivery: orderAndDelivery.delivery}) : setOrderAndDelivery({order: false, delivery: orderAndDelivery.delivery});
    };

    const handleDeliveryChange = (event) => {
        console.log(event.target.value);
        setOrderAndDelivery({order: orderAndDelivery.order, delivery: event.target.value.toString()})
    };


    console.log(orderAndDelivery)
    return (
        <main className={'checkout-page'}>
            <section className={'section-contrains tables-page'}>
                <h1 className={'page-title'}>CHECKOUT</h1>
                <div className={'info-container'}>
                    <div className={'info-item'}>
                        <h2 className={'paragraph--medium'}>Zamówienie i oferta</h2>
                        <br />
                        <div className={'info-item__subitem'}>
                            <label className={'table-heading'}>
                                <input
                                    type="radio"
                                    name="options"
                                    value="option1"
                                    checked={orderAndDelivery.order === true}
                                    onChange={handleOptionChange}
                                />
                                Zamówienie
                            </label>
                            <label className={'table-heading'}>
                                <input
                                    type="radio"
                                    name="options"
                                    value="option2"
                                    checked={orderAndDelivery.order === false}
                                    onChange={handleOptionChange}
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
                        <div className={'info-item__titles info-item__titles--alt table-heading'}>
                            {/*<p>Kod promocyjny:</p>*/}
                            {/*<input />*/}
                            {/*<button className={'btn-sidebar--cart'}>Aktywuj</button>*/}
                            <Link className={'btn-sidebar--cart'} to={'/'}>Kontynuuj zakupy</Link>
                            {/*<button className={'btn-sidebar--cart'}>Opróżnij koszyk</button>*/}
                            {/*<button className={'btn-sidebar--cart'}>Zapisz koszyk</button>*/}
                        </div>
                    </div>
                </div>
                <div className={'info-container info-container--multiple'}>
                    <div className={'info-item'}>
                        <h2 className={'paragraph--medium'}>Płatność</h2>
                        <br />
                        <div className={'info-item__subitem table-heading'}>
                            <label>
                                <input
                                    type="radio"
                                    name="payment"
                                    value="payment1"
                                    checked={true}
                                />
                                Faktura, 30 dniowy termin płatności
                            </label>
                        </div>
                    </div>
                    <div className={'info-item'}>
                        <h2 className={'paragraph--medium'}>Dostawa</h2>
                        <br />
                        <div className={'info-item__subitem '}>
                            <label className={' table-heading'}>
                                <input
                                    type="radio"
                                    name="delivery"
                                    value="1"
                                    checked={orderAndDelivery.delivery === '1'}
                                    onChange={handleDeliveryChange}
                                />
                                Ciężarówka
                            </label>
                            <label className={' table-heading'}>
                                <input
                                    type="radio"
                                    name="delivery"
                                    value="2"
                                    checked={orderAndDelivery.delivery === '2'}
                                    onChange={handleDeliveryChange}
                                />
                                Furgonetka z powiadomieniem SMS
                            </label>
                            <label className={' table-heading'}>
                                <input
                                    type="radio"
                                    name="delivery"
                                    value="3"
                                    checked={orderAndDelivery.delivery === '3'}
                                    onChange={handleDeliveryChange}
                                />
                                Powiadomienie telefoniczne
                            </label>
                            <label className={' table-heading'}>
                                <input
                                    type="radio"
                                    name="delivery"
                                    value="4"
                                    checked={orderAndDelivery.delivery === '4'}
                                    onChange={handleDeliveryChange}
                                />
                                Furgonetka z ładunkiem odbiorcy
                            </label>
                        </div>
                    </div>
                </div>
                <div className={'info-container info-container--multiple'}>
                    {orderAndDelivery.order ?
                        <>
                            <div className={'info-item'}>
                                <h2 className={'paragraph--medium'}>Moja dostawa</h2>
                                <br />
                                <div className={''}>
                                    <div className={'total--partial  table-heading'}>
                                        <p>Klient</p>
                                        <p>{client.customer}</p>
                                    </div>
                                    <div className={'total--partial  table-heading'}>
                                        <p>Adres na fakturze</p>
                                        <p>{client.adres}, {client.miasto}</p>
                                    </div>
                                    <div className={'total--partial  table-heading'}>
                                        <p>E-mail</p>
                                        <p>{client.email}</p>
                                    </div>
                                </div>
                            </div>
                    </> : <></>}
                    <div className={'info-item'}>
                        <h2 className={'paragraph--medium'}>Łącznie</h2>
                        <br />
                        <div className={''}>
                            <p className={'section-subtitle total-info  table-heading'}>
                                {cart.reduce((acc, item)  => acc + (item.price * item.quantity), 0)}
                                <span className={'paragraph--medium'}>płatność w EURO</span>
                            </p>
                            <div className={'total--partial  table-heading'}>
                                <p>Ilość przedmiotów</p>
                                <p>{cart.reduce((acc, item) => acc + (item.quantity), 0)}</p>
                            </div>
                            <div className={'total--partial  table-heading'}>
                                <p>Waga</p>
                                <p>{cart.reduce((acc, item) => acc + (item.weight), 0)}</p>
                            </div>
                            <div className={'total--partial  table-heading'}>
                                <p>Łączna suma bez VAT</p>
                                <p>{cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)}</p>
                            </div>
                            <div className={'total--partial  table-heading'}>
                                <p>Suma VATu</p>
                                <p>0</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'info-container'}>
                    <div className={'info-item'}>
                        <h2 className={'paragraph--medium'}>Other details</h2>
                        <br />
                        <div className={'info-item__subitem  table-heading'}>
                            <form className={'form'}>
                                <div className={'field-container'}>
                                    <label htmlFor={'customer_order'}>Numer zamówienia:</label>
                                    <input required={true} type="text" id={'customer_order'}/>
                                </div>
                                <div className={'field-container'}>
                                    <label htmlFor={'desired_delivery_date'}>Pożądana data dostawy:</label>
                                    <input type="text" id={'desired_delivery_date'} />
                                </div>
                                <div className={'field-container'}>
                                    <label htmlFor={'message'}>Wiadomość*:</label>
                                    <textarea id={'message'} className={'message-input'}/>
                                </div>
                                <div className={'field-container'}>
                                    <label htmlFor={'goods_marking'}>Oznaczenie dóbr:</label>
                                    <input type="text" id={'goods_marking'} />
                                </div>
                                <div className={'field-container'}>
                                    <label htmlFor={'sms_notification'}>Kod SMS*:</label>
                                    <input type="text" id={'sms_notification'} required={true} />
                                </div>
                                <div className={'field-container'}>
                                    <label htmlFor={'numer_przewoznika'}>Numer przewoźnika/klienta odbierającego ładunek:</label>
                                    <input type="text" id={'numer_przewoznika'}/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className={'info-container'}>
                    <div className={'info-item'}>
                        <h2 className={'paragraph--medium'}>{orderAndDelivery.order ? 'Złóż zamówienie' : 'Złóż oferte'}</h2>
                        <br />
                        <Link className={'btn-sidebar--cart'} to={'/thank-you-page'} element={<ThankYou option={selectedOption} delivery={selectedDelivery}/>}>{orderAndDelivery.order ? 'ZŁÓŻ ZAMÓWIENIE' : 'ZŁÓŻ OFERTĘ'}</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}