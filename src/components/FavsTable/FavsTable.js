import './FavsTable.scss';
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useContext} from "react";
import {FavsContext} from "../../App";

export const FavsTable = ({products}) => {
    const [favs, setFavs] = useContext(FavsContext);

    const toggleFavorite = (productId) => {
        setFavs(favs.filter(product => product.id !== productId))
    };

    return (
        <main className={'my-page'}>

            <section className={'section-contrains tables-page'}>
                <div className={'aside__line-container aside__line-container--column'}>
                    <div className={'heading-container'}>
                        <h1 className={'page-title'}>Ulubione produkty</h1>
                    </div>
                    <br/>
                    <ul className={'cart-item-container cart-item-container--checkout'}>
                        <li className={'table-heading'}>
                            <div className={'table-subcontainer'}>
                                <p className={'serial'}>Nr seryjny</p>
                                <p>Nazwa</p>
                            </div>
                        </li>
                        {favs.map((product,key) => {
                            return (
                                <li key={key} className={'cart-item'}>
                                    <FontAwesomeIcon className={'btn btn--close'} icon={faXmark} onClick={() => toggleFavorite(product.id)} />
                                    <div className={'cart-img-container'}>
                                        <img className={'cart-img'} src={product.imgUrl}/>
                                    </div>
                                    <div className={'cart-item__info'}>
                                        <div className={'table-subcontainer'}>
                                            <p className={'serial'}>{product.id}</p>
                                            <p>{product.title}</p>
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </section>
        </main>
    );
}