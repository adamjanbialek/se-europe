import './MyMachine.scss';
import wheelLoader from "../../assets/home/wheel-loader.png";
import excavator from "../../assets/home/excavator.png";
import tractor from "../../assets/home/tractor.png";
import telescopicHandler from "../../assets/home/telescopic-handler.png";
import skidLoader from "../../assets/home/skid-loader.png";
import forkLift from "../../assets/home/fork-lift.png";
import {LinksListWithImages} from "../../components/LinksListWithImages/LinksListWithImages";

export const MyMachine = ({machines}) => {
    const products = [
        {name: '3 punkt', imgUrl: wheelLoader},
        {name: 'Atlas', imgUrl: excavator},
        {name: 'Avant-Multione', imgUrl: tractor},
        {name: 'Bobcat', imgUrl: telescopicHandler},
        {name: 'Cat 906', imgUrl: skidLoader},
        {name: 'Dieci', imgUrl: forkLift},
    ];

    return (
        <main className={'my-machine'}>

            <section className={'section-contrains tables-page'}>
                <div className={'heading-container'}>
                    <h1 className={'page-title'}>Moja maszyna</h1>
                </div>
                <div className={'links-container'}>
                    { machines.flat().map(product => {
                        const el = <picture>
                            <img src={product.category[2]} />
                        </picture>;
                        return (
                            <a className={'link'} href={`/moja-maszyna/${product.hasOwnProperty('category') ? product.category[0]: product.name}`}>
                                <div className={'bg-change'} />
                                {product.imgUrl ? el : ''}
                                <p className={'link-name'} >
                                    {product.hasOwnProperty('category') ? product.category[1]: product.name}
                                </p>
                            </a>
                        )
                    })}
                </div>
            </section>
        </main>
    );
}