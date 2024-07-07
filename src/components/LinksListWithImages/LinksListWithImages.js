import './LinksListWithImages.scss';

export const LinksListWithImages = (props) => {
    return (
        <div className={'links-container'}>
            { props.data.map(product => {
                const el = <picture>
                    <img src={product.imgUrl} />
                </picture>;
                return (
                    <a className={'link'} href={`/moje-zlacze/${product.hasOwnProperty('couplings') ? product.couplings[0]: product.name}`}>
                        <div className={'bg-change'} />
                        {product.imgUrl ? el : ''}
                        <p className={'link-name'} >
                            {product.hasOwnProperty('couplings') ? product.couplings[1]: product.name}
                        </p>
                    </a>
                )
            })}
        </div>
    );
}