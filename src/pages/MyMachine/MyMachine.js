import './MyMachine.scss';
import wheelLoader from "../../assets/home/wheel-loader.png";
import excavator from "../../assets/home/excavator.png";
import tractor from "../../assets/home/tractor.png";
import telescopicHandler from "../../assets/home/telescopic-handler.png";
import skidLoader from "../../assets/home/skid-loader.png";
import forkLift from "../../assets/home/fork-lift.png";
import {LinksListWithImages} from "../../components/LinksListWithImages/LinksListWithImages";
import {Link} from "react-router-dom";

export const MyMachine = ({machines}) => {

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
                            <Link className={'link'} to={`/moja-maszyna/${product.hasOwnProperty('category') ? product.category[0]: product.name}`}>
                                <div className={'bg-change'} />
                                {product.imgUrl ? el : ''}
                                <p className={'link-name'} >
                                    {product.hasOwnProperty('category') ? product.category[1]: product.name}
                                </p>
                            </Link>
                        )
                    })}
                </div>
            </section>
        </main>
    );
}