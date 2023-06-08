import {useState} from 'react'
import SubThree from "./SubThree";
import SubThreeLevelContext from "./SubThreeLevelContext";

function Three({}){
  const [country, setCountry] = useState('usa')
    return <div style={{border: '1px solid red'}}> 
   Three Name 
    

      <div style={{padding: '10px'}}>
      <SubThreeLevelContext.Provider value={country}>
          <SubThree />
      </SubThreeLevelContext.Provider>
        
        
        </div>
      
    </div>
}

export default Three