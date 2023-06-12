import {createSlice, current, PayloadAction} from "@reduxjs/toolkit";
import {GridElementType} from "../../types/GridElementType";
import {LayoutPartTypes} from "../../types/LayoutPartTypes";
import {InnerElementType} from "../../types/innerElementType";
import {generateId} from "../utils/generateId";
import {GridSelectItem} from "../../types/GridSelectItem";
import {GridTypes} from "../../types/GridTypes";

interface InitialStateType {
    gridSelects: Array<GridSelectItem>
    selectedGrid: GridTypes
    currentContentParts: number
    layoutElements: Array<GridElementType>
    innerElements: Array<InnerElementType>
}

const initialState: InitialStateType = {
    gridSelects: [
        {id: 0, name: 'Лендинг', isActive: true, type:GridTypes.Landing, contentParts: 1},
        {id: 1, name: 'Блог', isActive: false, type:GridTypes.Blog, contentParts: 2},
        {id: 2, name: 'Магазин', isActive: false, type:GridTypes.Shop, contentParts: 3},
    ],
    selectedGrid: GridTypes.Landing,
    currentContentParts: 1,

    layoutElements: [
        {
            id: 0,
            type: LayoutPartTypes.Header,
            isChooseElementVisible: false,
            innerElements: []
        },
        {
            id: 1,
            type: LayoutPartTypes.Content,
            isChooseElementVisible: false,
            innerElements: [],
            uniqueClass: 'content-1'
        },
        {
            id: 2,
            type: LayoutPartTypes.Footer,
            isChooseElementVisible: false,
            innerElements: []
        },
    ],

    innerElements: [
        {id: 0, uniqueClass: 'title', tag: 'h1', text: 'Заголовок H1'},
        {id: 1, uniqueClass: 'title', tag: 'h2', text: 'Заголовок H2'},
        {id: 2, uniqueClass: 'title', tag: 'h3', text: 'Заголовок H3'},
        {id: 3, uniqueClass: 'text', tag: 'p', text: 'Абзац текста'}
    ]
}

export const layoutSlice = createSlice({
    name: 'layout',
    initialState,
    reducers: {
        selectGrid: (state, action: PayloadAction<{id:number, type:GridTypes}>) => {
            const itemIndex = state.gridSelects.findIndex(item => item.id === action.payload.id)

            if (state.gridSelects[itemIndex].isActive) return
            state.gridSelects.map(item => {
                if (item.isActive) {
                    item.isActive = false
                }
                return item
            })

            state.gridSelects[itemIndex].isActive = true
            state.selectedGrid = action.payload.type
            state.currentContentParts = state.gridSelects[itemIndex].contentParts

            layoutSlice.caseReducers.clearInnerElements(state)
            layoutSlice.caseReducers.updateContentParts(state)
        },

        updateContentParts: (state) => {
            const renderedContentPartsQty = state.layoutElements.filter(item => item.type === LayoutPartTypes.Content).length
            if (state.currentContentParts === renderedContentPartsQty) return

            state.layoutElements = state.layoutElements.filter(item => item.type !== LayoutPartTypes.Content)
            for (let i = 0; i < state.currentContentParts; i++) {
                state.layoutElements.push({
                    id: generateId(state.layoutElements),
                    type: LayoutPartTypes.Content,
                    isChooseElementVisible: false,
                    innerElements: []
                })
            }
        },

        showChooseElement: (state, action: PayloadAction<{ id: number }>) => {
            const element = state.layoutElements.find(item => item.id === action.payload.id)
            if (!element) return
            element.isChooseElementVisible = true
        },

        hideChooseElement: (state, action: PayloadAction<{ id: number }>) => {
            const element = state.layoutElements.find(item => item.id === action.payload.id)
            if (!element) return
            element.isChooseElementVisible = false
        },

        addInnerElement: (state, action: PayloadAction<{ id: number, innerElementId: number }>) => {
            const index = state.layoutElements.findIndex(item => item.id === action.payload.id)
            const innerElement = state.innerElements.find(item => item.id === action.payload.innerElementId)
            if (!innerElement) return
            const clone = structuredClone(current(innerElement))
            clone.id = generateId(state.layoutElements[index].innerElements)
            state.layoutElements[index].innerElements.push(clone)
        },

        removeInnerElement: (state, action: PayloadAction<{id: number, innerElementId: number}>) => {
            const element = state.layoutElements.find(item => item.id === action.payload.id)
            if (!element) return
            const index = element.innerElements.findIndex(item => item.id === action.payload.innerElementId)
            element.innerElements.splice(index, 1)
        },

        clearInnerElements: (state) => {
            state.layoutElements.map(item => {
                item.innerElements = []
            })
        }
    }
})

export const {selectGrid, updateContentParts, showChooseElement, hideChooseElement, addInnerElement, removeInnerElement, clearInnerElements} = layoutSlice.actions

export default layoutSlice.reducer