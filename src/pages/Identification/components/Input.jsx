import React from 'react';

const Input = React.forwardRef((props, ref) => {
  return (
    <div className='flex flex-col space-y-2'>
      <label htmlFor={props.input.id} className=' text-[22px]'>
        {props.label}
      </label>
      <input
        ref={ref}
        defaultValue={props.value}
        {...props.input}
        className='px-5 py-3 w-5/6 bg-main-background border-dark-brown border-[1px] text-[18px] outline-none'
      />
    </div>
  );
});

export default Input;
