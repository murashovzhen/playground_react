
import { useState } from 'react';
import { Range, getTrackBackground } from 'react-range';


const RangeElement = (rangeProps: {value:[number,number], min:number, max:number, step:number, roundeCount: number, onChange: (values: [number, number]) => void}) => {
    const [values, setValues] = useState(rangeProps.value);
     
    return (
      <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}
    >
    <Range
        step={rangeProps.step}
        min={rangeProps.min}
        max={rangeProps.max}
        values={values}
        onChange={(values) => {
          rangeProps.onChange([values[0], values[1]]);
          setValues([values[0], values[1]]);
        }}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: '36px',
              display: 'flex',
              width: '100%'
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: '5px',
                width: '100%',
                borderRadius: '4px',
                background: getTrackBackground({
                  values,                
                  colors: ["#323537", "#7b61ff", "#323537"],
                  min: rangeProps.min,
                  max: rangeProps.max,
                }),
                alignSelf: 'center'
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '42px',
              width: '42px',
              borderRadius: '4px',
              backgroundColor: '#FFF',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0px 2px 6px #AAA'
            }}
          >
            <div
              style={{
                height: '16px',
                width: '5px',
                backgroundColor: isDragged ? '#548BF4' : '#CCC'
              }}
            />
          </div>
        )}
      />
      <output style={{ marginTop: '30px' }} id="output">
        {values[0].toFixed(rangeProps.roundeCount)} - {values[1].toFixed(rangeProps.roundeCount)}
      </output>
    </div>
    )
}

export default RangeElement


