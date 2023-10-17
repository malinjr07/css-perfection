import { FC } from 'react';
import tableData, { tableRow } from '../utils/tableData';

const Table: FC = () => {
  return (
    <table className='w-full overflow-x-auto'>
      <thead>
        {tableRow.map((item, id) => (
          <th key={id}>{item}</th>
        ))}
      </thead>
      <tbody>
        {tableData.map((data) => (
          <tr>
            {Object.keys(data).map((heads) => (
              <td>{data[heads] ? data[heads] : ''}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

