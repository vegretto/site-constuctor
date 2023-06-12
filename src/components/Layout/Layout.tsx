import React from 'react';
import classNames from "classnames";
import {useAppSelector} from "../../store/hooks";
import {GridTypes} from "../../types/GridTypes";
import GridElement from "../GridElement/GridElement";

const Layout = () => {
    const selectedGrid = useAppSelector(state => state.layout.selectedGrid)
    const gridPartsState = useAppSelector(state => state.layout.layoutElements)

    const gridParts = gridPartsState.map(item => {
        return <GridElement key={item.id} element={item}/>
    })

    const classes = classNames({
        'layout': true,
        'layout--landing': selectedGrid === GridTypes.Landing,
        'layout--blog': selectedGrid === GridTypes.Blog,
        'layout--shop': selectedGrid === GridTypes.Shop,
    })

    return (
        <div className={classes}>
            {gridParts}
        </div>
    );
};

export default Layout;