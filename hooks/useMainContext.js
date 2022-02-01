import {useContext} from "react";
import {MainContext} from "../utils/MainContext";


export default function useMainContext() {
  return useContext(MainContext);
}