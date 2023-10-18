import { FC } from 'react';

const Table: FC = () => {
  return (
    <>
      {/* <div className='w-full overflow-x-auto'>
      <table className='table-auto w-full whitespace-no-wrap bg-white table-striped'>
        <tbody className='bg-[#EEF0F4] border border-transparent border-r-white'>
          <tr className=''>
            <th className='text-center'>NO</th>
            {tableRow.map((item, id) => (
              <th key={id} className='text-center'>
                {item}
              </th>
            ))}
          </tr>

          {tableData.map((data, id) => (
            <tr key={id}>
              <td style={{ width: '100px' }}>{id + 1}</td>
              {Object.keys(data).map((heads, id) => (
                <td key={id} style={{ width: data[heads].size || '100px' }}>
                  {data[heads].title ? data[heads].title : ''}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div> */}
      <div className='w-full overflow-x-auto '>
        {/* <table className='container table-auto '>
          <thead>
            <tr>
              <td className='w-[160px]'>Checkbox</td>
              <td className='w-[160px]'>NO</td>
              <td className='w-[160px]'>Existing type</td>
              <td className='w-[160px]'>Application type</td>
              <td className='w-[160px]'>Documents to be submitted</td>
              <td className='w-[160px]'>Application date and time</td>
              <td className='w-[160px]'>Approval</td>
              <td className='w-[160px]'>Reason for rejection of approval</td>
              <td className='w-[160px]'>Approval date and time</td>
              <td className='w-[160px]'>Manager</td>
            </tr>
          </thead>
          <tr>
            <td className='w-[160px]'>Checkbox</td>
            <td className='w-[160px]'>NO</td>
            <td className='w-[160px]'>Existing type</td>
            <td className='w-[160px]'>Application type</td>
            <td className='w-[160px]'>Documents to be submitted</td>
            <td className='w-[160px]'>Application date and time</td>
            <td className='w-[160px]'>Approval</td>
            <td className='w-[160px]'>Reason for rejection of approval</td>
            <td className='w-[160px]'>Approval date and time</td>
            <td className='w-[160px]'>Manager</td>
          </tr>
          <tr>
            <td className='w-[160px]'>Checkbox</td>
            <td className='w-[160px]'>NO</td>
            <td className='w-[160px]'>Existing type</td>
            <td className='w-[160px]'>Application type</td>
            <td className='w-[160px]'>Documents to be submitted</td>
            <td className='w-[160px]'>Application date and time</td>
            <td className='w-[160px]'>Approval</td>
            <td className='w-[160px]'>Reason for rejection of approval</td>
            <td className='w-[160px]'>Approval date and time</td>
            <td className='w-[160px]'>Manager</td>
          </tr>
          <tr>
            <td className='w-[160px]'>Checkbox</td>
            <td className='w-[160px]'>NO</td>
            <td className='w-[160px]'>Existing type</td>
            <td className='w-[160px]'>Application type</td>
            <td className='w-[160px]'>Documents to be submitted</td>
            <td className='w-[160px]'>Application date and time</td>
            <td className='w-[160px]'>Approval</td>
            <td className='w-[160px]'>Reason for rejection of approval</td>
            <td className='w-[160px]'>Approval date and time</td>
            <td className='w-[160px]'>Manager</td>
          </tr>
        </table> */}
      </div>
    </>
  );
};

export default Table;

