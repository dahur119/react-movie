import React, {useMemo} from "react";
import MyParagraph from "./MyParagrapgh";

const DemoOutput = (props) =>{
    const sortedList = useMemo(()=>{
        return props.item.sort((a,b)=>a-b)
    }, []) 
    return  (
          <div className={classes.list}>
             <p>{props.title}</p>
             <ul>
                 {sortedList.map((item)=>(
                     <li key={item}>{item}</li>
                 ))}
             </ul>
             <MyParagraph>{props.children}</MyParagraph>
          </div>
    )

}
export default React.memo(DemoOutput) 