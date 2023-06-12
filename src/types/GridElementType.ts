import {LayoutPartTypes} from "./LayoutPartTypes";
import {InnerElementType} from "./innerElementType";

export interface GridElementType {
    id: number,
    type: LayoutPartTypes,
    isChooseElementVisible: boolean,
    innerElements: Array<InnerElementType>,
    uniqueClass?: string
}