import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {dispatchType, reducerType} from "../redux/store";


export const useTypedSelector: TypedUseSelectorHook<reducerType> = useSelector
export const useTypedDispatch: () => dispatchType = useDispatch