import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "@/app/store/configureStore";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
