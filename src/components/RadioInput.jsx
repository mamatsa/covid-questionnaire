import React from 'react';

const RadioInput = (props) => {
  return (
    <div>
      <label className=' text-[22px]'>{props.topLabel}</label>
      <div className=' mt-3'>
        {props.inputs.map((input) => {
          return (
            <div className='flex items-center' key={input.key}>
              <input
                id={input.id}
                type='radio'
                value={input.value}
                className=' mr-3'
                {...props.register(props.name)}
              />
              <label htmlFor={input.id} className=' text-xl'>
                {input.inputLabel}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RadioInput;
