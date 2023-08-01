

function ColorSelectors({colorOptions, selectedColor, handleSelect}) {
    return (
        <div>
            {colorOptions?.map((color) => (
                <button key={color} 
                onClick={() => handleSelect(color)}
                style={{ 
                    border: (color === selectedColor) ? '2px solid yellow' : 'none',
                    backgroundColor: color, width: '50px', height: '50px'}} ></button>
            ))}
        </div>
    )
}

export default ColorSelectors;
