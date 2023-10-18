import { tableDataType } from './types';

/* const tableSingleData: tableDataType = {
  기존유형: { title: '소득적격', size: '100px' },
  신청유형: { title: '개인전문', size: '100px' },
  제출서류: { title: '보기', size: '100px' },
  신청일시: { title: '2023-01-10 09:00:00', size: '190px' },
  승인여부: { title: '', size: '87px' },
  '승인거부 사유': { title: '', size: '372px' },
  승인일시: { title: '2023-01-10 09:00:00', size: '189px' },
  관리자: { title: '', size: '124px' },
}; */

const tableSingleData: tableDataType = {
  Type: { title: 'Type', size: '100px' },
  Application: { title: 'Application', size: '100px' },
  Document: { title: 'Document', size: '100px' },
  'Date and Time': { title: '2023-01-10 09:00:00', size: '190px' },
  Approval: { title: '', size: '87px' },
  reason: { title: '', size: '372px' },
  'Apporval Time': { title: '2023-01-10 09:00:00', size: '189px' },
  Manager: { title: '', size: '124px' },
};

const tableData: tableDataType[] = [];
let count = 1;

while (count <= 10) {
  const status = Math.floor(Math.random() * 10);
  const manager = Math.floor(Math.random() * 10);
  const reason = Math.floor(Math.random() * 10);

  const tempObj = { ...tableSingleData };

  tempObj.reason.title = reason === 1 ? 'Lorem Ipsum' : '';

  tempObj.Manager.title = manager === 1 ? 'Maruf' : '';

  tempObj.Approval.title =
    status === 0
      ? 'approved'
      : status === 1
      ? 'pending'
      : status === 2
      ? 'rejected'
      : '';

  tableData.push(tempObj);
  count++;
}

const tableRow: string[] = [];

Object.keys(tableSingleData).forEach((key) => {
  tableRow.push(key);
});

export default tableData;
export { tableRow };

