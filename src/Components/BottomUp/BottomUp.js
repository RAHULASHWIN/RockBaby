import React,{useState,useEffect} from 'react'
import './BottomUp.css'
import {useWindowScroll} from "react-use";


const BottomUp = () => {
    const {y: pageYOffset} = useWindowScroll();
    const [visible,setVisibility] = useState(false);

    useEffect(()=>{
        if(pageYOffset > 400){
            setVisibility(true);

        }else{
setVisibility(false);
        }
    },[pageYOffset])

const scrollToTop = () => window.scrollTo({top: 0, behavior: "smooth"})

    if(!visible){
return false;
    }

    return(

        <div className="scroll-to-top cursor-pointer text-center" onClick={scrollToTop}>
          <span class="material-icons">
arrow_upward
</span>

        </div>
    )
}

export default BottomUp;