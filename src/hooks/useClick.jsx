import { useEffect } from "react";

const useClick = (onClick) => {
    const element = useRef();
    
    useEffect(() => {
        if(element.current) {
            element.current.addEventListener("click", onClick);
        }
        return () => {
            if(element.current){
                element.current.removeEventListener("click", onClick)};
            }
    }, []);

    return element
}


// const onClick = () => {
//     console.log("say Hello");
// }
// const title = useClick();

{/* <h1 ref={title}></h1> */}