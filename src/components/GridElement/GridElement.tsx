import React, {FC} from 'react';
import classNames from "classnames";
import AddButton from "../AddButton/AddButton";
import ChooseElement from "../ChooseElement/ChooseElement";
import LayoutElements from "../LayoutElements/LayoutElements";
import {GridElementType} from "../../types/GridElementType";

interface GridElementProps {
    element: GridElementType
}

const GridElement: FC<GridElementProps> = ({element}) => {

    const classes = classNames({
        [element.type]: true,
        [element.uniqueClass!]: element.uniqueClass,
        [`${element.type}--empty`]: element.innerElements.length === 0
    })

    return (
        <div className={classes}>
            <p className="placeholder">{element.type}</p>
            <AddButton id={element.id} />
            <ChooseElement isVisible={element.isChooseElementVisible} id={element.id}/>
            <LayoutElements parentId={element.id} parentType={element.type} innerElements={element.innerElements}/>
        </div>
    );
};

export default GridElement;