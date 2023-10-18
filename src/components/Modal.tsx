import { Dialog, Transition } from '@headlessui/react';
import { FC, Fragment } from 'react';
import { modalProps } from '../utils/types';

const Modal: FC<modalProps> = ({
  isOpen,
  closeModal,
  bodyContent,
  checkAction,
  cancelAction,
  type,
}) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='w-[400px] flex flex-col justify-start items-start transform overflow-hidden rounded-xl shadow-[#1018281A]/10 bg-white p-6 text-left align-middle shadow-xl transition-all'>
                <div className='w-full flex justify-between items-center '>
                  <div
                    className={`w-[30px] h-[30px] flex justify-center items-center rounded-full border-4 ${
                      type === 'success'
                        ? 'bg-[#D1FADF] text-[#039855] border-[#D1FADF]/50 '
                        : 'bg-[#FEF0C7] text-[#D46B08] border-[#FEF0C7]/50 '
                    } `}
                  >
                    <i
                      className={`fa-regular ${
                        type === 'success'
                          ? 'fa-circle-check'
                          : 'fa-exclamation'
                      } `}
                    ></i>
                  </div>
                  {type === 'success' ? '' : ''}
                  <button type='button' onClick={closeModal}>
                    <i className='fa-solid fa-xmark'></i>
                  </button>
                </div>
                {bodyContent}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;

