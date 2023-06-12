import React from 'react';
import GridSelectItem from "../GridSelectItem/GridSelectItem";
import {useAppSelector} from "../../store/hooks";

const GridSelect = () => {

    const gridSelectsState = useAppSelector(state => state.layout.gridSelects)
    const gridSelects = gridSelectsState.map((item) => {
        return <GridSelectItem key={item.id} id={item.id} name={item.name} isActive={item.isActive} type={item.type} />
    })

    return (
        <form className="grid-select">
            <h2 className="grid-select__header">Выберите сетку сайта</h2>
            <div className="grid-select__items">
                {gridSelects}
            </div>
        </form>
    );
};

export default GridSelect;