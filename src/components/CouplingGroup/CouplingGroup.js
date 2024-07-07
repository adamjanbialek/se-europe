import './CouplingGroup.scss';

export const CouplingGroup = (props) => {
    return (
        <main>
        <section className={'section-contrains tables-page'}>
            <div className={'heading-container'}>
                <h1 className={'page-title'}>{props.couplingName}</h1>
            </div>
            <div className={'available-choices-container links-container coupling-group-item'}>
                {console.log(props)}
            { props.products.map(product => {
                const el = <picture>
                    <img src={product.imgUrl} />
                </picture>;
                return (
                    <a className={'link'} href={`${product.url}`}>
                        <div className={'bg-change'} />
                        {product.imgUrl ? el : ''}
                        <p className={'link-name'} >
                            {product.name}
                        </p>
                    </a>
                )
            })}
            </div>
        </section>
    </main>
    );
}