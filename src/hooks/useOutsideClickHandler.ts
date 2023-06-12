import {MutableRefObject, useEffect} from "react";
import {ActionCreatorWithPayload} from "@reduxjs/toolkit";
import {useAppDispatch} from "../store/hooks";

interface UseOutsideClickHandlerProps {
    ref: MutableRefObject<HTMLElement | null>,
    actionCreator: ActionCreatorWithPayload<any>,
    payload: { id: number }
}

const useOutsideClickHandler = ({ref, actionCreator, payload}: UseOutsideClickHandlerProps) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                dispatch(actionCreator(payload))
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, actionCreator, dispatch, payload])
}

export default useOutsideClickHandler;