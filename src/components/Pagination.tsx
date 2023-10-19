import { useEffect, useState } from 'react';
import { activePage, renderDataState } from '../utils/states';

const pageLimit = renderDataState.value.length - 1;

const Pagination = () => {
  const active = activePage.value;
  const [pageArr, setPageArr] = useState<number[]>([]);

  useEffect(() => {
    let tempArr = [];
    let increment = active + 1;
    let decrement = active - 1;
    tempArr.unshift(active);
    if (active === 1) {
      while (increment <= 10) {
        tempArr.push(increment);
        increment++;
      }
      setPageArr(tempArr);
    } else if (active - 8 >= 1 && active + 5 <= pageLimit) {
      while (active + 5 >= increment && active - 5 <= decrement) {
        tempArr.push(increment);
        tempArr.unshift(decrement);
        increment++;
        decrement--;
      }

      setPageArr(tempArr);
    } else if (active > pageLimit - 5 && active < pageLimit) {
      tempArr = [...pageArr];
      let tempVar = pageArr[pageArr.length - 1];
      while (tempVar < pageLimit) {
        tempArr.push(tempVar + 1);
        tempVar++;
      }
      setPageArr(tempArr);
    }
    //eslint-disable-next-line
  }, [active]);

  return (
    <div className='flex w-full flex-row justify-center py-3 gap-4 '>
      <button
        type='button'
        disabled={active === 1}
        onClick={() => {
          activePage.value = 1;
        }}
        className={`w-10 h-10 rounded justify-center flex items-center hover:text-white hover:bg-[#2A3958]/60 text-[#A1A1A1] disabled:hover:bg-white disabled:hover:text-[#a1a1a1] disabled:cursor-not-allowed `}
      >
        &lt;&lt;
      </button>
      <button
        type='button'
        disabled={active === 1}
        onClick={() => {
          activePage.value = active - 1;
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
            activePage.value = el;
          }}
          className={`w-10 h-10 rounded justify-center flex items-center hover:text-white hover:bg-[#2A3958]/60 ${
            active === el
              ? 'bg-[#2A3958] hover:bg-[#2A3958] text-white'
              : 'text-[#A1A1A1]'
          } `}
        >
          {el}
        </button>
      ))}
      <button
        type='button'
        disabled={active === pageLimit}
        onClick={() => {
          activePage.value = active + 1;
        }}
        className={`w-10 h-10 rounded justify-center flex items-center hover:text-white hover:bg-[#2A3958]/60 text-[#A1A1A1] disabled:hover:bg-white disabled:hover:text-[#a1a1a1] disabled:cursor-not-allowed`}
      >
        &gt;
      </button>
      <button
        type='button'
        disabled={active === pageLimit}
        onClick={() => {
          const tempArr = [];
          let count = pageLimit;
          while (count >= pageLimit - 10) {
            tempArr.unshift(count);
            count--;
          }
          setPageArr(tempArr);
          activePage.value = pageLimit;
        }}
        className={`w-10 h-10 rounded justify-center flex items-center hover:text-white hover:bg-[#2A3958]/60 text-[#A1A1A1] disabled:hover:bg-white disabled:hover:text-[#a1a1a1] disabled:cursor-not-allowed`}
      >
        &gt;&gt;
      </button>
    </div>
  );
};

export default Pagination;

