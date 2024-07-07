import './CheckoutComponent.scss';
import {Link} from "react-router-dom";
import {OrderTable} from "../OrderTable/OrderTable";
import {ThankYou} from "../ThankYou/ThankYou";

export const CheckoutComponent = () => {

    return (
        <main>
            <section className={'section-contrains tables-page'}>
                <h1 className={'page-title'}>CHECKOUT</h1>
                <div className={'info-container'}>
                    <div className={'info-item'}>
                        <h2>Order and offer</h2>
                    </div>
                </div>
                <div className={'info-container'}>
                    <div className={'info-item'}>
                        <h2>Cart</h2>
                        <h2>Excl. VAT</h2>
                        <OrderTable />
                    </div>
                </div>
                <div className={'info-container'}>
                    <div className={'info-item'}>
                        <h2>Payment</h2>
                    </div>
                    <div className={'info-item'}>
                        <h2>Delivery</h2>
                    </div>
                </div>
                <div className={'info-container'}>
                    <div className={'info-item'}>
                        <h2>My delivery</h2>
                    </div>
                    <div className={'info-item'}>
                        <h2>Total</h2>
                    </div>
                </div>
                <div className={'info-container'}>
                    <div className={'info-item'}>
                        <h2>Other details</h2>
                    </div>
                </div>
                <div className={'info-container'}>
                    <div className={'info-item'}>
                        <h2>Złóż zamówienie</h2>
                        <Link className={'btn-sidebar--cart'} to={'/thank-you-page'} element={<ThankYou/>}>ZŁÓŻ ZAMÓWIENIE</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}