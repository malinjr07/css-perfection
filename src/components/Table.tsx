import { FC } from 'react';
import tableData, { tableRow } from '../utils/tableData';

const Table: FC = () => {
  return (
    <table className=''>
      <tbody className='bg-[#EEF0F4] border border-transparent border-r-white table overflow-x-auto w-full'>
        <tr className=''>
          <th className='text-center' style={{ width: '100px' }}>
            NO
          </th>
          {tableRow.map((item, id) => (
            <th key={id} className='text-center' style={{ width: item.size }}>
              {item.title}
            </th>
          ))}
        </tr>

        {tableData.map((data, id) => (
          <tr key={id}>
            <td>{id + 1}</td>
            {Object.keys(data).map((heads, id) => (
              <td key={id}>{data[heads].title ? data[heads].title : ''}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

