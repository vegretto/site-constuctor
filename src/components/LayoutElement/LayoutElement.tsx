import React, {FC} from 'react';
import {InnerElementType as LayoutElementType} from "../../types/innerElementType";
import ContentEditable from "react-contenteditable";
import {useAppDispatch} from "../../store/hooks";
import {removeInnerElement} from "../../store/reducers/layoutSlice";

interface LayoutElementProps {
    parentId: number
    element: LayoutElementType
}

const LayoutElement: FC<LayoutElementProps> = ({parentId,element}) => {
    const dispatch = useAppDispatch()
    const {id, uniqueClass, tag, text} = element
    const clickHandler = () => {
        dispatch(removeInnerElement({id: parentId, innerElementId: id}))
    }
    return (
        <div className={`element ${uniqueClass}`}>
            <ContentEditable
                html={text}
                onChange={()=>{}}
                tagName={tag}
            />
            <button type="button" className="delete-btn" onClick={clickHandler}>
                <span className="visually-hidden">Удалить элемент</span>
            </button>
        </div>
    );
};

export default LayoutElement;