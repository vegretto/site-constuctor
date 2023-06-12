import React, {FC} from 'react';

interface ChooseElementButtonProps {
    text: string
    innerElementId: number
    addElementToLayout: (innerElementId: number) => void
}

const ChooseElementButton: FC<ChooseElementButtonProps> = ({text, innerElementId, addElementToLayout}) => {
    return (
        <button className="choose-elem__btn" type="button" onClick={() => addElementToLayout(innerElementId)}>{text}</button>
    );
};

export default ChooseElementButton;