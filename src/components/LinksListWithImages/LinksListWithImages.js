import './LinksListWithImages.scss';
import {Link} from "react-router-dom";

export const LinksListWithImages = (props) => {
    return (
        <div className={'links-container'}>
            { props.data.map(product => {
                const el = <picture>
                    <img src={product.imgUrl} />
                </picture>;
                return (
                    <Link className={'link'} to={`/moje-zlacze/${product.hasOwnProperty('couplings') ? product.couplings[0]: product.name}`}>
                        <div className={'bg-change'} />
                        {product.imgUrl ? el : ''}
                        <p className={'link-name'} >
                            {product.hasOwnProperty('couplings') ? product.couplings[1]: product.name}
                        </p>
                    </Link>
                )
            })}
        </div>
    );
}