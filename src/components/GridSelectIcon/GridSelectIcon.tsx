import React, {FC} from 'react';
import {GridTypes} from "../../types/GridTypes";
import {ReactComponent as LandingSvg} from "../../assets/img/svg/grid-select-icon-landing.svg";
import {ReactComponent as BlogSvg} from "../../assets/img/svg/grid-select-icon-blog.svg";
import {ReactComponent as ShopSvg} from "../../assets/img/svg/grid-select-icon-shop.svg";

interface GridSelectIconComponentProps {
    type: GridTypes
}

const Icons = {
    [GridTypes.Landing]: LandingSvg,
    [GridTypes.Blog]: BlogSvg,
    [GridTypes.Shop]: ShopSvg
}

const GridSelectIconComponent: FC<GridSelectIconComponentProps> = ({type}) => {
    const Icon = Icons[type]
    return <Icon />
};

export default GridSelectIconComponent;