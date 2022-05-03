import React from 'react';

const RadioInput = (props) => {
  return (
    <div>
      <label className=' text-[22px]'>{props.topLabel}</label>
      <div className=' mt-4'>
        {props.inputs.map((input) => {
          return (
            <div className='flex items-center mt-1' key={input.key}>
              <input
                id={input.id}
                type='radio'
                value={input.value}
                className=' mr-3 scale-125'
                {...props.register(props.name, {
                  required: {
                    value: props.required,
                    message: 'რომელიმე პასუხი უნდა აირჩიო',
                  },
                })}
              />
              <label htmlFor={input.id} className=' text-xl'>
                {input.inputLabel}
              </label>
            </div>
          );
        })}
      </div>
      {props.errors && (
        <p className=' text-error-red mt-1 ml-2'>
          {props.errors[props.name]?.message}
        </p>
      )}
    </div>
  );
};

export default RadioInput;
