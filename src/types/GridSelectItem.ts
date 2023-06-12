import {GridTypes} from "./GridTypes";

export interface GridSelectItem {
    id: number,
    name: string,
    isActive: boolean,
    type: GridTypes,
    contentParts: number
}