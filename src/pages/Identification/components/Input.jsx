import React from 'react';

const Input = (props) => {
  return (
    <div className='flex flex-col space-y-2'>
      <label htmlFor={props.id} className=' text-[22px]'>
        {props.label}
      </label>
      <input
        id={props.id}
        type={props.type}
        {...props.register(props.name, {
          required: {
            value: props.required,
            message: 'გთხოვთ შეავსოთ ეს ველი',
          },
          minLength: {
            value: props.minLength,
            message: `უნდა შეიყვანოთ მინიმუმ ${props.minLength}  სიმბოლო`,
          },
          validate: props.customValidation?.func,
        })}
        className='px-5 py-3 w-5/6 bg-main-background border-dark-brown border-[1px] text-[18px] outline-none'
      />
      <p className=' text-error-red mt-2 ml-2'>
        {props.errors[props.name]?.message}
        {props.errors[props.name]?.type === 'validate' &&
          props.customValidation.message}
      </p>
    </div>
  );
};

export default Input;
