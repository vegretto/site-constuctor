import React, {FC, useRef} from 'react';
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import ChooseElementButton from "../ChooseElementButton/ChooseElementButton";
import useOutsideClickHandler from "../../hooks/useOutsideClickHandler";
import {addInnerElement, hideChooseElement} from "../../store/reducers/layoutSlice";


interface ChooseElementProps {
    id: number
    isVisible: boolean
}

const ChooseElement: FC<ChooseElementProps> = ({id, isVisible}) => {
    const dispatch = useAppDispatch()
    const ref = useRef(null)

    useOutsideClickHandler({
        ref,
        actionCreator: hideChooseElement,
        payload: {id}
    })

    const addElementToLayout = (innerElementId: number) => {
        dispatch(addInnerElement({id, innerElementId}))
        dispatch(hideChooseElement({id}))
    }

    const chooseElementsButtonsState = useAppSelector(state => state.layout.innerElements)

    const chooseElementButtons = chooseElementsButtonsState.map(item => {
        return <ChooseElementButton
            key={item.id} text={item.text} innerElementId={item.id} addElementToLayout={addElementToLayout}/>
    })

    return (
        <>
            {isVisible &&
            <div className={'choose-elem'} ref={ref}>
                {chooseElementButtons}
            </div>}
        </>
    );
};

export default ChooseElement;