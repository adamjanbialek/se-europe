import './ThreePoint.scss';
import {BoxWithCheckboxes} from "../../components/BoxWithCheckboxes/BoxWithCheckboxes";
import {SliderRangeComponent} from "../../components/SliderRangeComponent/SliderRangeComponent";
import {TableWithTabs} from "../../components/TableWithTabs/TableWithTabs";
import {useState, useEffect} from "react";

export const ThreePoint = (props) => {
    const [displayedItems, setDisplayedItems] = useState([0, 1000000]);
    const [checkboxes, setCheckboxes] = useState({});

    function findCheckboxes() {
        return Object.values(props.products.tableData).flat().reduce((acc, product) => {
            if (!acc.hasOwnProperty(product.coupling)) {
                acc[product.coupling] = false;
            }
            return acc;
        }, {});
    }

    useEffect(() => {
        const uniqueCheckboxes = findCheckboxes();
        setCheckboxes(uniqueCheckboxes);
    }, [props.products.tableData]);

    return (
        <main>
            <section className={'section-contrains tables-page'}>
                {props.img === 'yes' ?
                    <>
                        {props.products.imgUrl ? <div className={'img-three-point'}><img src={props.products.imgUrl}/></div> : ''}
                    </>
                    : null}
                <div className={'heading-container'}>
                    <h1 className={'page-title'}>{props.products.name}</h1>
                    <p className={'paragraph paragraph--medium'}>{props.products.description}</p>
                </div>
                <div className={'available-choices-container'}>
                    <div className={'choice-container'}>
                        <h2>Waga Maszyny</h2>
                        <SliderRangeComponent productsData={props.products} setDiplayedItems={setDisplayedItems}/>
                    </div>
                    <div className={'choice-container'}>
                        <h2>Złącze</h2>
                        <div className={'choice-container__checkboxes'}>
                            {checkboxes && Object.keys(checkboxes).map((name, i) => {
                                return (
                                    <BoxWithCheckboxes key={i} label={name} checkboxes={checkboxes} setCheckboxes={(checkboxValue) => setCheckboxes(checkboxValue)} />
                                )
                            })}
                        </div>
                    </div>
                </div>
                <TableWithTabs productsData={props.products} displayedItems={displayedItems} checkboxes={checkboxes} />
            </section>
        </main>
    );
}