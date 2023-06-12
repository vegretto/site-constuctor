import React, {FC} from 'react';
import {ReactComponent as Icon} from "../../assets/img/svg/icon-add.svg";
import {useAppDispatch} from "../../store/hooks";
import {showChooseElement} from "../../store/reducers/layoutSlice";

interface AddButtonProps {
    id: number
}

const AddButton: FC<AddButtonProps> = ({id}) => {
    const dispatch = useAppDispatch()

    return (
        <button type="button" className="add-btn" onClick={() => dispatch(showChooseElement({id}))}>
            <Icon />
        </button>
    );
};

export default AddButton;