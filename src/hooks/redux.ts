import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";

export const useAppDispatch = () => useDispatch<AppDispatch>(); // типизированный диспатч
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; // типизированный юзселектор