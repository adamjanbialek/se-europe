import './HomePage.scss';
import vehiclePart from '../../assets/home/vehicle-part.png';
import construction from '../../assets/home/construction.png';
import excavator from '../../assets/home/excavator.png';
import wheelLoader from '../../assets/home/wheel-loader.png';
import tractor from '../../assets/home/tractor.png';
import telescopicHandler from '../../assets/home/telescopic-handler.png';
import skidLoader from '../../assets/home/skid-loader.png';
import forkLift from '../../assets/home/fork-lift.png';
import {Link} from "react-router-dom";
import {InstaFeed} from "../../components/InstaFeed/InstaFeed";

export const HomePage = ({machines}) => {
    return (
        <main>
            <section className={'screenwide-photo-section'}>
                <picture className={'screenwide'}>
                    <img src={vehiclePart}/>
                </picture>
                <div className={'section-contrains'}>
                    <Link to={'/o-nas/znajdz-posrednika'} className={'button button--reseller'}>
                        Znajdź sprzedawcę
                    </Link>
                </div>
            </section>
            <section className={'section-contrains place-order'}>
                <div className={'gradient-box-container'}>
                    <div className={'gradient-box'}>
                        <h2 className={'section-title'}>Place your order through our e-commerce</h2>
                        <p className={'section-subtitle'}>Receive a construction shovel to the value of 350sek!</p>
                        <span className={'paragraph'}>OBS! Offer do not apply to brackets spare parts.</span>
                    </div>
                    <div className={'img-box'}>
                        <picture className={''}>
                            <img src={construction}/>
                        </picture>
                    </div>
                </div>
            </section>
            <section className={'vehicles'}>
                <div className={'section-contrains'}>
                    <p className={'paragraph paragraph--large'}>
                        SE Equipment AB magazynuje i dostarcza sprzęt, aby szybko zaspokoić potrzeby Twoje i rynku.
                        Zaopatrujemy sprzedawców detalicznych w całej Europie w szeroką gamę wysokiej jakości produktów z
                        naszego dużego magazynu w Linköping. Cała sprzedaż odbywa się za pośrednictwem naszych sprzedawców.
                    </p>
                    <h2 className={'page-title'}>
                        DESIGN - JAKOŚĆ - BEZPIECZEŃSTWO - CENA
                    </h2>
                </div>
                <div className={'list-container'}>
                    <div className={'vehicles-list'}>
                        { machines.flat().map((product,key) => {
                            const el = <picture>
                                <img src={product.category[2]} />
                            </picture>;
                            return (
                                <Link key={key} className={'vehicle-link'} to={`/moja-maszyna/${product.hasOwnProperty('category') ? product.category[0]: product.name}`}>
                                    <div className={'bg-change'} />
                                    {product.imgUrl ? el : ''}
                                    <p className={'vehicle-name link-title--smaller'} >
                                        {product.hasOwnProperty('category') ? product.category[1]: product.name}
                                    </p>
                                </Link>
                            )
                        })}
                        {/*<Link className={'vehicle-link'} to="">*/}
                        {/*    <picture>*/}
                        {/*        <img src={wheelLoader}/>*/}
                        {/*    </picture>*/}
                        {/*    <p className={'vehicle-name link-title--smaller'}>ŁADOWARKA KOŁOWA</p>*/}
                        {/*</Link>*/}
                        {/*<Link className={'vehicle-link'} to="">*/}
                        {/*    <picture>*/}
                        {/*        <img src={excavator}/>*/}
                        {/*    </picture>*/}
                        {/*    <p className={'vehicle-name link-title--smaller'}>KOPARKA</p>*/}
                        {/*</Link>*/}
                        {/*<Link className={'vehicle-link'} to="">*/}
                        {/*    <picture>*/}
                        {/*        <img src={tractor}/>*/}
                        {/*    </picture>*/}
                        {/*    <p className={'vehicle-name link-title--smaller'}>TRAKTOR</p>*/}
                        {/*</Link>*/}
                        {/*<Link className={'vehicle-link'} to="">*/}
                        {/*    <picture>*/}
                        {/*        <img src={telescopicHandler}/>*/}
                        {/*    </picture>*/}
                        {/*    <p className={'vehicle-name link-title--smaller'}>PODNOŚNIK TELESKOPOWY</p>*/}
                        {/*</Link>*/}
                        {/*<Link className={'vehicle-link'} to="">*/}
                        {/*    <picture>*/}
                        {/*        <img src={skidLoader}/>*/}
                        {/*    </picture>*/}
                        {/*    <p className={'vehicle-name link-title--smaller'}>ŁADOWARKA SKRZYNKOWA</p>*/}
                        {/*</Link>*/}
                        {/*<Link className={'vehicle-link'} to="">*/}
                        {/*    <picture>*/}
                        {/*        <img src={forkLift}/>*/}
                        {/*    </picture>*/}
                        {/*    <p className={'vehicle-name link-title--smaller'}>WÓZEK WIDŁOWY</p>*/}
                        {/*</Link>*/}
                    </div>
                </div>
            </section>
            <section className={'section-contrains insta-section'}>
                <InstaFeed  url="https://www.instagram.com/se_equipment_poland/?utm_source=ig_embed&ig_rid=78605f56-027c-4390-a0bb-02966f08eda5"/>
            </section>
            <section className={'section-contrains'}>
                <div className={'end-of-page'}></div>
            </section>
        </main>
    );
}