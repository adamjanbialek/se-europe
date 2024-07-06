import './OrderTable.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {useContext} from "react";
import {CartContext} from "../../App";

export const OrderTable = () => {
    const [cart, setCart] = useContext(CartContext);

    return (
        <div className={'aside__line-container aside__line-container--column'}>
            <ul className={'cart-item-container cart-item-container--checkout'}>
                {cart.map(product => {
                    return (
                        <div className={'cart-item'}>
                            <div className={'cart-img-container'}>
                                <span>{product.quantity}</span>
                                <img className={'cart-img'} src={product.imgUrl}/>
                            </div>
                            <div className={'cart-item__info'}>
                                <p>{product.id}</p>
                                <h3>{product.title}</h3>
                                <p>{product.price}</p>
                                <p>Łacznie: ${product.price * product.quantity}</p>
                            </div>
                            <FontAwesomeIcon className={'btn btn--close'} icon={faXmark} />
                        </div>
                    )
                })}
            </ul>
        </div>
    );
}