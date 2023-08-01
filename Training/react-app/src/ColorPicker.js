import { useState } from 'react'
import DisplayColor from "./DisplayColor";
import ColorSelectors from "./ColorSelectors";


function ColorPicker(){

    const [selectedColor, setSelectedColor] = useState('red');
    const [colorOptions, setColorOptions] = useState(['red', '#000000', 'blue', 'orange', 'grey']);

    const handleColorSelect = (color) => {
        setSelectedColor(color)
    }

    return(
        <div>
            <DisplayColor selectedColor={selectedColor}  />
            <ColorSelectors colorOptions={colorOptions}
            handleSelect={handleColorSelect}              
            selectedColor={selectedColor} />
        </div>
    );
}

export default ColorPicker;