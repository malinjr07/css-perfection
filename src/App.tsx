import { batch } from '@preact/signals-react';
import AlertModal from './components/AlertModal';
import Button from './components/Button';
import ChangeInvestmentTypeModal from './components/ChangeInvestmentType';
import Dot from './components/Dot';
import Pagination from './components/Pagination';
import SelectBox from './components/SelectBox';
import Table from './components/Table';
import Tabs from './components/Tabs';
import {
  ModalToggleStates,
  activePage,
  alertModalState,
  dataLimitState,
  rejectionModalState,
  selectedApplicantsState,
} from './utils/states';
import {
  approvalOptions,
  dateTimeOptions,
  statusOption,
  viewLimitOptions,
} from './utils/statics';
import { useState } from 'react';
import tableData from './utils/tableData';

function App() {
  const [alertToggleState, setAlertModalState] = useState(false);
  const [documentToggleState, setDocumentModalState] = useState(false);
  const [investmentTypeToggleState, setInvestmentTypeModalState] =
    useState(false);
  return (
    <ModalToggleStates.Provider
      value={{
        alertToggleState,
        documentToggleState,
        investmentTypeToggleState,
        toggleAlert: (e: boolean) => {
          setAlertModalState(e);
        },
        toggleDocumentModal: (e: boolean) => {
          setDocumentModalState(e);
        },
        toggleInvestTypeModal: (e: boolean) => {
          setInvestmentTypeModalState(e);
        },
      }}
    >
      <section className='container py-6 flex flex-col flex-wrap justify-start items-start '>
        <div className='flex w-full py-3 border-transparent border border-b-[#D7D8DA] flex-row items-center justify-start gap-6 '>
          <h1 className='text-[#0B101A] text-2xl font-bold leading-7 '>
            회원상세
          </h1>
          <p className='text-[#FF4D4F] relative font-medium text-sm leading-4 '>
            <span className='absolute -top-0.5 -left-2'>
              <Dot />
            </span>{' '}
            필수항목
          </p>
        </div>
        <div className='py-3 mb-[21px] w-full flex flex-row justify-start items-start '>
          <Tabs />
        </div>
        <div className='w-full flex items-center border border-transparent border-b-[#D7D8DA] justify-between py-3 '>
          <div className='flex justify-start items-center gap-2'>
            <h2 className='font-semibold text-xl text-[#0B101A] '>신청 목록</h2>
            <p className='font-medium text-sm leading-4 text-[#5A616A]'>
              (총 {tableData.length}명 | 승인대기&nbsp;
              <span className='text-[#FF4D4F] underline'>
                {
                  tableData.filter((item) => item.승인여부.title === '승인대기')
                    .length
                }
              </span>
              건)
            </p>
          </div>
          <div className='flex justify-start items-center gap-1 '>
            <SelectBox dataArr={approvalOptions} />
            <SelectBox dataArr={dateTimeOptions} />
            <SelectBox
              dataArr={viewLimitOptions}
              onChangeOptionCb={(e) => {
                batch(() => {
                  activePage.value = 1;
                  dataLimitState.value = parseInt(e.value.toString());
                });
              }}
            />
          </div>
        </div>
        <div className='w-full flex justify-between py-3 items-center '>
          <Button
            actionCb={() => {
              setInvestmentTypeModalState(true);
            }}
            title='등록'
          />
          <div className='flex gap-1 justify-start items-center'>
            <p className='text-[#5A616A] text-sm mr-4 whitespace-nowrap leading-[16px] '>
              선택한 0건
            </p>
            <SelectBox
              dataArr={statusOption}
              className='!w-full'
              onChangeOptionCb={() => {
                if (selectedApplicantsState.value.length) {
                  /** */
                } else {
                  setAlertModalState(true);
                  alertModalState.value.text = '선택된 신청건이 없습니다.';
                  alertModalState.value.type = 'warn';
                }
              }}
            />
            <Button
              actionCb={() => {
                if (selectedApplicantsState.value.length) {
                  /** */
                } else {
                  setAlertModalState(true);
                  alertModalState.value.text = '선택된 신청건이 없습니다.';
                  alertModalState.value.type = 'warn';
                }
              }}
              title='저장'
            />
          </div>
        </div>
        <Table />
        <Pagination />
        <div className='flex flex-row flex-wrap w-full justify-start gap-4 items-center'>
          <h4 className='w-full text-left'>Modal Buttons</h4>
          <Button
            actionCb={() => {
              setInvestmentTypeModalState(true);
            }}
            isLarge
            title='Change investment type'
          />
          <Button
            actionCb={() => {
              rejectionModalState.value = true;
            }}
            isLarge
            title='Rejection Reason'
          />
          <Button
            actionCb={() => {
              setDocumentModalState(true);
            }}
            isLarge
            title='Document Modal'
          />
        </div>
      </section>
      <AlertModal />
      <ChangeInvestmentTypeModal />
    </ModalToggleStates.Provider>
  );
}

export default App;

