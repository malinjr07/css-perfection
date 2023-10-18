import { FC, Fragment, useState } from 'react';
import { selectBoxProps, selectOptionType } from '../utils/types';
import { Listbox, Transition } from '@headlessui/react';

const SelectBox: FC<selectBoxProps> = ({ dataArr, onChangeOptionCb }) => {
  const [selected, setSelected] = useState<selectOptionType>(dataArr[0]);
  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <div className='relative mt-1'>
          <Listbox.Button className='w-[150px] flex justify-between items-center cursor-pointer rounded-lg bg-white py-2.5 px-3 text-left border sm:text-sm'>
            <span className='block truncate'>{selected.title}</span>
            <i
              className={`fa-solid ${open ? 'fa-angle-up' : 'fa-angle-down'} `}
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-base shadow-lg'>
              {dataArr.map((option, optionIdx) => (
                <Listbox.Option
                  key={optionIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'text-white bg-[#2A3958]/60' : 'text-[#B1B4BB]'
                    } ${
                      selected.value === option.value
                        ? '!bg-[#2A3958] text-white'
                        : ''
                    } `
                  }
                  value={option}
                  onClick={() => {
                    onChangeOptionCb?.();
                  }}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {option.title}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      )}
    </Listbox>
  );
};

export default SelectBox;

