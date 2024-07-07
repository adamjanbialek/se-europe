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
                <li className={'table-heading'}>
                    <div className={'table-subcontainer'}>
                        <p className={'serial'}>Nr seryjny</p>
                        <p>Nazwa</p>
                    </div>
                    <div className={'table-subcontainer'}>
                        <p>Cena</p>
                        <p className={'total'}>Ilość</p>
                        <p className={'total'}>Łącznie</p>
                    </div>
                </li>
                {cart.map(product => {
                    return (
                        <li className={'cart-item'}>
                            <div className={'cart-img-container'}>
                                <img className={'cart-img'} src={product.imgUrl}/>
                            </div>
                            <div className={'cart-item__info'}>
                                <div className={'table-subcontainer'}>
                                    <p className={'serial'}>{product.id}</p>
                                    <p>{product.title}</p>
                                </div>
                                <div className={'table-subcontainer'}>
                                    <p>{product.price}</p>
                                    <p className={'total'}>{product.quantity}</p>
                                    <p className={'total'}>{product.price * product.quantity}</p>
                                </div>
                            </div>
                            <FontAwesomeIcon className={'btn btn--close'} icon={faXmark} onClick={() => {
                                cart.filter(cartItem => cartItem.id === product.id).forEach(cartItem => {
                                    cartItem.quantity = 0
                                })
                                setCart([...cart.filter(cartItem => cartItem.id !== product.id)]);
                                console.log(cart)}}/>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}