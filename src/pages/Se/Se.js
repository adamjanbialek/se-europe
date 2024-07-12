import { useState } from 'react';
import { ThreePoint } from '../ThreePoint/ThreePoint';
import './Se.scss';
import { useParams } from 'react-router-dom';

export const Se = (props) => {

    const { product } = useParams();

    const [itemsToOrder, setItemsToOrder] = useState(1);

    

    function makeOrder(number) {
        console.log(`${itemsToOrder} ordered`);
    }
    
    return (
        <main className='product-page'>
            <ThreePoint products={props.coupling.filter((el) => Object.values(el.tableData).flat().find(el => el.artNo === props.products.id))[0]}></ThreePoint>
            {/*{console.log(props.coupling.map(el => Object.values(el.tableData).flat()).filter(el => el.find(elem => elem.artNo === props.products.id)))}*/}
            <section className={'section-contrains tables-page item-page'}>
                <div>
                    <h1 className={'page-title'}>{props.products.title}</h1>
                    <p>{props.products.id}</p>
                    <br></br>
                    <h2>{props.products.subtitle}</h2>
                    <br></br>
                    {props.products.description.map(
                        (product,key) => <p key={key}>{product}</p>
                    )}
                    {props.products.benefits.length > 0 ?
                        <>
                            <h3>Korzyści:</h3>

                            <ul>
                                {props.products.benefits.map(
                                    (benefit,key) =><ul key={key}>{benefit}</ul>
                                )}
                            </ul>
                        </>
                        : ''}
                    <br></br>
                    {props.products.technicalData.length > 0 ?
                        <>
                            <h3>DANE TECHNICZNE</h3>

                            <ul>
                                {props.products.technicalData.map(
                                    (data,key) => <li key={key}>{`${data[0]}: ${data[1]}`}</li>
                                )}
                            </ul>
                            <br></br>
                        </>
                        : ''}
                    <div className='price-container'>
                        <h2>{props.products.price}.00</h2>
                    </div>
                    {/*<br></br>*/}
                    {/*<div className={'item-quantity'}>*/}
                    {/*    <button className='quantity-btn'>-</button>*/}
                    {/*    <p>0</p>*/}
                    {/*    <button className='quantity-btn' >+</button>*/}
                    {/*    <button className='buy-btn btn-container'>BUY</button>*/}
                    {/*</div>*/}
                </div>
                <div>
                    <img src={props.products.imgUrl}/>
                </div>
            </section>
        </main>
    );
}