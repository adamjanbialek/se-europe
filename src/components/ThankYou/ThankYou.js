import {OrderTable} from "../OrderTable/OrderTable";
import './ThankYou.scss';

export const ThankYou = () => {
    return (
        <main className={'checkout-page'}>
            <section className={'section-contrains tables-page thank-page'}>
                <h1 className={'page-title'}>PODSUMOWANIE</h1>
                <br/>
                <h1 className={'page-title'}>DZIĘKUJEMY ZA TWOJE ZAMÓWIENIE</h1>
                <br/>
                <div>
                    {/* TODO: trzeba dynamicznie pobierać numer zamówienia z bazy */}
                    <p>Numer twojego zamówienia: 1</p>
                    <br />
                    <p>Status dostawy</p>
                    <br />
                    <p>Jeśli chcesz zobaczyć swoje zamówienie, możesz znaleźć wszystkie jego szczegóły i śledzić status dostawy w Twoim Profilu.</p>
                </div>
                <br />
                <br />
                <div>
                    <p>Twoje zamówienie</p>
                </div>
                <br/>
                <OrderTable />
            </section>
        </main>
    );
}