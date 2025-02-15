import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";

// export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();