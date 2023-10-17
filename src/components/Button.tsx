import React, { FC } from 'react';
import { buttonProps } from '../utils/types';

const Button: FC<buttonProps> = ({ title, actionCb, isLarge }) => {
  return (
    <button
      className={`px-4 rounded-[10px] bg-[#2A3958] text-white ${
        isLarge ? 'py-[12.5px] w-[170px]' : 'py-2.5 w-[100px] '
      } `}
      onClick={actionCb}
      type='button'
    >
      {title}
    </button>
  );
};

export default Button;

