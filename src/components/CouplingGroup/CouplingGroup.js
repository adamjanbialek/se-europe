import './CouplingGroup.scss';
import {Link} from "react-router-dom";

export const CouplingGroup = (props) => {
    return (
        <main>
        <section className={'section-contrains tables-page'}>
            <div className={'heading-container'}>
                <h1 className={'page-title'}>{props.couplingName}</h1>
            </div>
            <div className={'available-choices-container links-container coupling-group-item'}>
            { props.products.map((product,key) => {
                const el = <picture>
                    <img src={product.imgUrl} />
                </picture>;
                return (
                    <Link key={key} className={'link'} to={`../${product.url}`}>
                        <div className={'bg-change'} />
                        {product.imgUrl ? el : ''}
                        <p className={'link-name'} >
                            {product.name}
                        </p>
                    </Link>
                )
            })}
            </div>
        </section>
    </main>
    );
}