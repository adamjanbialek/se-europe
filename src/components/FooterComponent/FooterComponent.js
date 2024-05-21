import '../../styles.scss';
import './FooterComponent.scss';
import headset from '../../assets/icons/headset.png';
import clock from '../../assets/icons/clock.png';
import home from '../../assets/icons/home.png';
import bgShape from '../../assets/footer/footer-shape.png';
import {Link} from "react-router-dom";
import {NewCustomer} from "../../pages/NewCustomer/NewCustomer";
import {MyAccount} from "../../pages/MyAccount/MyAccount";

export const FooterComponent = () => {
    return (
        <footer className={'text-shadow'}>
            <div className={'bg-shape'}>
                <picture>
                    <img src={bgShape} alt={'a shape in background'}/>
                </picture>
            </div>
            <div className={'footer-container section-contrains'}>
                <div className={'subsection__container'}>
                    <picture className={'footer-icon'}>
                        <img src={headset} alt={'headset icon'}/>
                    </picture>
                    <h3>Kontakt / Informacje</h3>
                    <div className={'subsection__content'}>
                        <p>SE Equipment Poland Sp. z o.o.</p>
                        <p>ul. Uśmiechu 4, 05-250 Cegielnia</p>
                        <p>VAT UE: PL 5322043940</p>
                    </div>
                    <div className={'subsection__content'}>
                        <p>Telefon: +48 22 487 84 13</p>
                        <p>office-pl@se-europe.com</p>
                    </div>
                </div>
                <div className={'subsection__container'}>
                    <picture className={'footer-icon'}>
                        <img src={clock} alt={'clock icon'}/>
                    </picture>
                    <h3>Godziny otwarcia</h3>
                    <div className={'subsection__content'}>
                        <p>Biuro:</p>
                        <p>Poniedziałek-Piątek: 08.00-16.00</p>
                    </div>
                </div>
                <div className={'subsection__container'}>
                    <picture className={'footer-icon'}>
                        <img src={home} alt={'home icon'}/>
                    </picture>
                    <h3>POMOC</h3>
                    <div className={'subsection__content'}>
                        <Link to={'/nowy-klient'} element={<NewCustomer />}>Nowy klient</Link>
                        <Link to={'/jak-zamawiac'} element={<MyAccount />}>Jak zamawiać</Link>
                        <a>Jak szukać</a>
                        <Link to={'/moje-konto'} element={<MyAccount />}>Moje konto</Link>
                        <a>Dostawa</a>
                        <Link to={'/bezpieczenstwo-cookies'} element={<NewCustomer />}>Bezpieczeństwo & cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}