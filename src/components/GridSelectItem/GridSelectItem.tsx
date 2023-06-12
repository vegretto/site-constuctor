import React, {FC} from 'react';
import classNames from "classnames";
import {useAppDispatch} from "../../store/hooks";
import {GridTypes} from "../../types/GridTypes";
import GridSelectIcon from "../GridSelectIcon/GridSelectIcon";
import {clearInnerElements, selectGrid, updateContentParts} from "../../store/reducers/layoutSlice";

interface GridSelectItemProps {
    id: number,
    name: string,
    isActive: boolean,
    type: GridTypes
}

const GridSelectItem: FC<GridSelectItemProps> = (props) => {
    const {id, name, isActive, type} = props
    const dispatch = useAppDispatch()

    const classes = classNames({
        'grid-select__btn': true,
        'grid-select__btn--active': isActive
    })

    const handleClick = () => {
        dispatch(selectGrid({id, type}))
    }

    return (
        <div className={classes} onClick={handleClick}>
            <span className="grid-select__text">{name}</span>
            <GridSelectIcon type={type} />
        </div>
    );
};

export default GridSelectItem;