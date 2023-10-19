import { FC } from 'react';
import { tableRow } from '../utils/tableData';
import { computed } from '@preact/signals-react';
import { activePage, renderDataState } from '../utils/states';

const Table: FC = () => {
  const tableData = computed(() => renderDataState.value[activePage.value]);
  return (
    <>
      <div className='w-full overflow-x-auto'>
        <table className=''>
          <thead>
            <tr className='bg-[#EEF0F4] '>
              <th className='uppercase py-[22px] text-[#222222] border-r border-white last:border-r-transparent  '>
                <label htmlFor={'markDataAll'} className='relative group'>
                  <input
                    type='checkbox'
                    name='markData'
                    className='opacity-0 -z-10 absolute w-0 h-0 peer'
                    id={'markDataAll'}
                  />
                  <span className='w-4 h-4 flex mx-auto rounded bg-white text-white shadow border border-[#D7D8DA] peer-checked:border-blue-500 peer-checked:bg-blue-500 '>
                    <i className='fa-solid m-auto text-[10px] fa-check'></i>
                  </span>
                </label>
              </th>
              <th className='uppercase py-[22px] text-[#222222] border-r border-white last:border-r-transparent  '>
                no
              </th>
              {tableRow.map((headings, id) => (
                <th
                  className='capitalize py-[22px] text-[#222222] border-r border-white last:border-r-transparent  '
                  key={id}
                >
                  {headings}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.value.map((data, dataId) => (
              <tr key={dataId} className=' bg-white even:bg-[#F9F9FB] '>
                <td className='min-w-[53px] text-center mx-auto min-h-[44px] '>
                  <label
                    htmlFor={'markData' + dataId}
                    className='relative group'
                  >
                    <input
                      type='checkbox'
                      name='markData'
                      disabled={data.active}
                      className='opacity-0 -z-10 absolute w-0 h-0 peer'
                      id={'markData' + dataId}
                    />
                    <span className='w-4 h-4 flex mx-auto rounded bg-white text-white shadow border border-[#D7D8DA] peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-disabled:bg-[#DDE0E5] peer-disabled:text-[#DDE0E5] text-[10px] '>
                      <i className='fa-solid m-auto fa-check'></i>
                    </span>
                  </label>
                </td>
                <td
                  style={{
                    minWidth: '53px',
                    textAlign: 'center',
                    margin: 'auto 0',
                    padding: '4px',
                    minHeight: '44px',
                  }}
                >
                  <span>{dataId + 1}</span>
                </td>
                {Object.keys(data).map((key, id) => (
                  <td
                    key={id}
                    style={{
                      minWidth: data[key].size,
                      textAlign: key === '승인거부 사유' ? 'left' : 'center',
                      margin: 'auto 0',
                      padding: '4px',
                      minHeight: '44px',
                    }}
                  >
                    {key === '승인여부' ? (
                      <span
                        className={`text-sm leading-4 font-medium py-0.5 px-2.5 rounded-full ${
                          data[key].title === '승인대기'
                            ? 'bg-[#FFEDD5] text-[#9A3412] '
                            : data[key].title === '승인거부'
                            ? 'bg-[#FEE2E2] text-[#991B1B] '
                            : data[key].title === '승인완료'
                            ? 'bg-[#DCFCE7] text-[#166534] '
                            : ''
                        } `}
                      >
                        {data[key].title}
                      </span>
                    ) : (
                      <span
                        className={
                          key === '제출서류'
                            ? 'py-1.5 px-[18px] rounded-lg border-[#D7D8DA] bg-[#EBEEF3] text-[#222222] my-2 flex justify-center items-center '
                            : ''
                        }
                      >
                        {data[key].title}
                      </span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;

