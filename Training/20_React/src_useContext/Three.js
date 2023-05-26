import SubThree from "./SubThree"

function Three({counter}){
    return <div style={{border: '1px solid red'}}> 
    three Component {counter}
    

      <div style={{padding: '10px'}}><SubThree  /></div>
      
    </div>
}

export default Three