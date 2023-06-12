import React, {FC} from 'react';
import LayoutElement from "../LayoutElement/LayoutElement";
import {InnerElementType} from "../../types/innerElementType";
import {LayoutPartTypes} from "../../types/LayoutPartTypes";
import classNames from "classnames";


interface LayoutElementsProps {
    parentId: number
    parentType: LayoutPartTypes
    innerElements: Array<InnerElementType>
}

const LayoutElements: FC<LayoutElementsProps> = ({parentId, innerElements, parentType}) => {

    const elements = innerElements.map(item => {
        return <LayoutElement key={item.id} element={item} parentId={parentId} />
    })

    const classes = classNames ({
        [`${parentType}__elements-wrapper`]: true,
    })

    return (
        <div className={classes}>
            {elements}
        </div>
    );
};

export default LayoutElements;