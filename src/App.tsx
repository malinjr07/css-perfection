import { createContext, useEffect, useState } from 'react';
import Button from './components/Button';
import Dot from './components/Dot';
import Pagination from './components/Pagination';
import SelectBox from './components/SelectBox';
import Tabs from './components/Tabs';

import {
  approvalOptions,
  dateTimeOptions,
  statusOption,
  viewLimitOptions,
} from './utils/statics';
import tableData from './utils/tableData';
import Table from './components/Table';
import { alertModalStateType, contextType, tableDataType } from './utils/types';
import AlertModal from './components/modals/AlertModal';
import RejectionModal from './components/modals/RejectionModal';

export const BaseContext = createContext<contextType>({
  setDataLimit: () => {},
  currentPage: 1,
  pageLimit: 1,
  setCurrentPage: () => {},
  sortingAttribute: '',
  setSortingAttribute: () => {},
  selectedData: [],
  setSelectedData: () => {},
  visibleArr: [],
  alertModalState: { visibleState: false, text: '' },
  setAlertModalState: () => {},
  rejectionModalView: false,
  setRejectionModalView: () => {},
  investmentModalView: false,
  setInvestmentModalView: () => {},
  investmentDocs: [],
  setInvestmentDocs: () => {},
});

function App() {
  const [dataLimit, setDataLimit] = useState<number>(viewLimitOptions[0].value);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageLimit, setPageLimit] = useState<number>(1);
  const [sortingAttribute, setSortingAttribute] = useState<string>('');
  const [selectedData, setSelectedData] = useState<string[]>([]);
  const [visibleArr, setVisibleArr] = useState<tableDataType[]>([]);
  const [alertModalState, setAlertModalState] = useState<alertModalStateType>({
    visibleState: false,
    text: '',
  });
  const [rejectionModalView, setRejectionModalView] = useState(false);
  const [investmentModalView, setInvestmentModalView] = useState(false);
  const [investmentDocs, setInvestmentDocs] = useState<File[]>([]);

  useEffect(() => {
    const tempNestedArr: any[][] = [];

    if (tableData.length > dataLimit) {
      for (let i = 0; i < tableData.length; i += dataLimit) {
        const chunk = tableData.slice(i, i + dataLimit);
        tempNestedArr.push(chunk);
      }

      setVisibleArr(tempNestedArr[currentPage - 1]);
      setPageLimit(tempNestedArr.length);
    } else {
      setVisibleArr([tableData]);
    }
  }, [dataLimit, currentPage]);
  return (
    <BaseContext.Provider
      value={{
        setDataLimit,
        currentPage,
        pageLimit,
        setCurrentPage,
        sortingAttribute,
        setSortingAttribute,
        selectedData,
        setSelectedData,
        visibleArr,
        alertModalState,
        setAlertModalState,
        rejectionModalView,
        setRejectionModalView,
        investmentModalView,
        setInvestmentModalView,
        investmentDocs,
        setInvestmentDocs,
      }}
    >
      <>
        <section className='container py-6 flex flex-col flex-wrap justify-start items-start '>
          <div className='flex w-full py-3 border-transparent border border-b-[#D7D8DA] flex-row items-center justify-start gap-6 '>
            <h1 className='text-[#0B101A] text-2xl font-bold leading-7 '>
              회원상세
            </h1>
            <p className='text-[#FF4D4F] relative font-medium text-sm leading-4 '>
              <span className='absolute -top-0.5 -left-2'>
                <Dot />
              </span>
              필수항목
            </p>
          </div>
          <div className='py-3 mb-[21px] w-full flex flex-row justify-start items-start '>
            <Tabs />
          </div>
          <div className='w-full flex items-center border border-transparent border-b-[#D7D8DA] justify-between py-3 '>
            <div className='flex justify-start items-center gap-2'>
              <h2 className='font-semibold text-xl text-[#0B101A] '>
                신청 목록
              </h2>
              <p className='font-medium text-sm leading-4 text-[#5A616A]'>
                (총 {tableData.length}명 | 승인대기&nbsp;
                <span className='text-[#FF4D4F] underline'>
                  {
                    tableData.filter(
                      (item) => item.승인여부.title === '승인대기'
                    ).length
                  }
                </span>
                건)
              </p>
            </div>
            <div className='flex justify-start items-center gap-1 '>
              <SelectBox dataArr={approvalOptions} />
              <SelectBox
                dataArr={dateTimeOptions}
                onChangeOptionCb={() => {}}
              />
              <SelectBox
                dataArr={viewLimitOptions}
                onChangeOptionCb={(e) => {
                  setDataLimit(parseInt(e.value.toString()));
                  setCurrentPage(1);
                }}
              />
            </div>
          </div>
          <div className='w-full flex justify-between py-3 items-center '>
            <Button actionCb={() => {}} title='등록' />

            <div className='flex gap-1 justify-start items-center'>
              <p className='text-[#5A616A] text-sm mr-4 whitespace-nowrap leading-[16px] '>
                선택한 {selectedData.length}건
              </p>

              <SelectBox
                dataArr={statusOption}
                onChangeOptionCb={() => {
                  if (!selectedData.length) {
                    const tempObj: alertModalStateType = {
                      ...alertModalState,
                      text: '선택된 신청건이 없습니다.',
                      type: 'warn',
                      visibleState: true,
                    };
                    setAlertModalState(tempObj);
                  }
                }}
              />
              <Button
                actionCb={() => {
                  if (selectedData.length) {
                    const selectedTableData = tableData.filter((item) =>
                      selectedData.includes(item.id)
                    );
                    const hasApprovedUsers = selectedTableData.find(
                      (item) => item.승인여부.title === '승인완료'
                    );
                    const hasRejectedUsers = selectedTableData.find(
                      (item) => item.승인여부.title === '승인거부'
                    );
                    if (hasApprovedUsers) {
                      const tempObj: alertModalStateType = {
                        ...alertModalState,
                        text: '이미 승인 완료된 회원입니다.',
                        type: 'warn',
                        visibleState: true,
                      };
                      setAlertModalState(tempObj);
                    } else if (hasRejectedUsers) {
                      const tempObj: alertModalStateType = {
                        ...alertModalState,
                        text: '이미 승인 거부된 회원입니다.',
                        type: 'warn',
                        visibleState: true,
                      };
                      setAlertModalState(tempObj);
                    } else {
                      setRejectionModalView(true);
                    }
                  } else {
                    const tempObj: alertModalStateType = {
                      ...alertModalState,
                      text: '선택된 신청건이 없습니다.',
                      type: 'warn',
                      visibleState: true,
                    };
                    setAlertModalState(tempObj);
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
            <Button actionCb={() => {}} isLarge title='Document Modal' />
          </div>
        </section>
        <AlertModal />
        {/* <ChangeInvestmentTypeModal />*/}
        <RejectionModal />
      </>
    </BaseContext.Provider>
  );
}

export default App;

