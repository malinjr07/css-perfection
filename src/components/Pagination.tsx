import { useContext, useEffect, useState } from 'react';
import { BaseContext } from '../utils/Context';

const Pagination = () => {
  const { activePage, tableDataState, setActivePage } = useContext(BaseContext);
  const [pageArr, setPageArr] = useState<number[]>([]);
  const [pageLimit, setPageLimit] = useState(1);

  useEffect(() => {
    const pageLimit = tableDataState.length;
    setPageLimit(pageLimit);
    let tempArr = [];
    let increment = activePage + 1;
    let decrement = activePage - 1;
    tempArr.unshift(activePage);
    if (activePage === 1) {
      while (increment <= 10) {
        tempArr.push(increment);
        increment++;
      }
      setPageArr(tempArr);
    } else if (activePage - 8 >= 1 && activePage + 5 <= pageLimit) {
      while (activePage + 5 >= increment && activePage - 5 <= decrement) {
        tempArr.push(increment);
        tempArr.unshift(decrement);
        increment++;
        decrement--;
      }

      setPageArr(tempArr);
    } else if (activePage > pageLimit - 5 && activePage < pageLimit) {
      tempArr = [...pageArr];
      let tempVar = pageArr[pageArr.length - 1];
      while (tempVar < pageLimit) {
        tempArr.push(tempVar + 1);
        tempVar++;
      }
      setPageArr(tempArr);
    }
    //eslint-disable-next-line
  }, [activePage]);

  return (
    <div className='flex w-full flex-row justify-center py-3 gap-4 '>
      <button
        type='button'
        disabled={activePage === 1}
        onClick={() => {
          setActivePage(1);
        }}
        className={`w-10 h-10 rounded justify-center flex items-center hover:text-white hover:bg-[#2A3958]/60 text-[#A1A1A1] disabled:hover:bg-white disabled:hover:text-[#a1a1a1] disabled:cursor-not-allowed `}
      >
        &lt;&lt;
      </button>
      <button
        type='button'
        disabled={activePage === 1}
        onClick={() => {
          setActivePage(activePage - 1);
        }}
        className={`w-10 h-10 rounded justify-center flex items-center hover:text-white hover:bg-[#2A3958]/60 text-[#A1A1A1] disabled:hover:bg-white disabled:hover:text-[#a1a1a1] disabled:cursor-not-allowed `}
      >
        &lt;
      </button>
      {pageArr.map((el) => (
        <button
          key={el}
          type='button'
          onClick={() => {
            setActivePage(el);
          }}
          className={`w-10 h-10 rounded justify-center flex items-center hover:text-white hover:bg-[#2A3958]/60 ${
            activePage === el
              ? 'bg-[#2A3958] hover:bg-[#2A3958] text-white'
              : 'text-[#A1A1A1]'
          } `}
        >
          {el}
        </button>
      ))}
      <button
        type='button'
        disabled={activePage === pageLimit}
        onClick={() => {
          setActivePage(activePage + 1);
        }}
        className={`w-10 h-10 rounded justify-center flex items-center hover:text-white hover:bg-[#2A3958]/60 text-[#A1A1A1] disabled:hover:bg-white disabled:hover:text-[#a1a1a1] disabled:cursor-not-allowed`}
      >
        &gt;
      </button>
      <button
        type='button'
        disabled={activePage === pageLimit}
        onClick={() => {
          const tempArr = [];
          let count = pageLimit;
          while (count >= pageLimit - 10) {
            tempArr.unshift(count);
            count--;
          }
          setPageArr(tempArr);
          setActivePage(pageLimit);
        }}
        className={`w-10 h-10 rounded justify-center flex items-center hover:text-white hover:bg-[#2A3958]/60 text-[#A1A1A1] disabled:hover:bg-white disabled:hover:text-[#a1a1a1] disabled:cursor-not-allowed`}
      >
        &gt;&gt;
      </button>
    </div>
  );
};

export default Pagination;

