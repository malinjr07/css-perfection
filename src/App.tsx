import Button from './components/Button';
import Dot from './components/Dot';
import Pagination from './components/Pagination';
import SelectBox from './components/SelectBox';
import Table from './components/Table';
import Tabs from './components/Tabs';
import {
  approvalOptions,
  dateTimeOptions,
  statusOption,
} from './utils/statics';

function App() {
  return (
    <>
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
              (총 100명 | 승인대기&nbsp;
              <span className='text-[#FF4D4F] underline'>1</span>건)
            </p>
          </div>
          <div className='flex justify-start items-center gap-1 '>
            <SelectBox dataArr={approvalOptions} />
            <SelectBox dataArr={dateTimeOptions} />
          </div>
        </div>
        <div className='w-full flex justify-between py-3 items-center '>
          <Button actionCb={() => {}} title='등록' />
          <div className='flex gap-1 justify-start items-center'>
            <p className='text-[#5A616A] text-sm mr-4 leading-[16px] '>
              선택한 0건
            </p>
            <SelectBox dataArr={statusOption} />
            <Button actionCb={() => {}} title='저장' />
          </div>
        </div>
        <Table />
        <Pagination />
      </section>
    </>
  );
}

export default App;

