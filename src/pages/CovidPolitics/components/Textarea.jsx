import React from 'react';

const Textarea = (props) => {
  return (
    <div className={'flex flex-col'}>
      <label htmlFor={props.id} className=' text-[22px]'>
        {props.label}
      </label>
      <textarea
        id={props.id}
        rows={props.rows}
        {...props.register(props.name)}
        className='px-5 py-3 w-5/6 bg-main-background mt-4 border-dark-brown border-[1px] text-[18px] outline-none'
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Textarea;
