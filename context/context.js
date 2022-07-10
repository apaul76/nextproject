import {createContext} from "react";

const ServicingContext = createContext({
  show:false,
  setShowBackdrop:()=>{}
})

export default ServicingContext;