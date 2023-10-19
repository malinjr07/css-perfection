import moment from 'moment';
import { tableDataType } from './types';
import { v4 as uuidv4 } from 'uuid';

const tableSingleData: tableDataType = {
  기존유형: { title: '소득적격', size: '100px' },
  신청유형: { title: '개인전문', size: '100px' },
  제출서류: { title: '보기', size: '100px' },
  신청일시: { title: '2023-01-10 09:00:00', size: '190px' },
  승인여부: { title: '', size: '87px' },
  '승인거부 사유': { title: '', size: '372px' },
  승인일시: { title: '2023-01-10 09:00:00', size: '189px' },
  관리자: { title: '', size: '124px' },
  active: true,
  id: uuidv4(),
};

const tableData: tableDataType[] = [];

for (let count = 1; count <= 1000; count++) {
  const status = Math.floor(Math.random() * 3);
  const manager = Math.floor(Math.random() * 2);
  const activeRandom = Math.floor(Math.random() * 2);
  const reason = Math.floor(Math.random() * 2);

  const tempObj = JSON.parse(JSON.stringify(tableSingleData));

  tempObj.active = activeRandom === 1 ? true : false;
  tempObj.id = uuidv4();
  tempObj.승인일시.title = moment(
    Date.now() + Math.ceil(Math.random() * 10000 + 285)
  ).format('yyyy-mm-DD hh:mm:ss');
  tempObj.신청일시.title = moment(
    Date.now() + Math.ceil(Math.random() * 10000 + 2885)
  ).format('yyyy-mm-DD hh:mm:ss');

  tempObj['승인거부 사유'].title =
    reason === 1
      ? '서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가'
      : '';

  tempObj.관리자.title = manager === 1 ? '김관리자' : '';

  tempObj.승인여부.title =
    status === 0
      ? '승인완료'
      : status === 1
      ? '승인대기'
      : status === 2
      ? '승인거부'
      : '';

  tableData.push(tempObj);

  console.log('🚀 ~ file: tableData.ts:33 ~ tempObj:', tempObj);
}

const tableRow: string[] = [];

Object.keys(tableSingleData).forEach((key) => {
  if (!['active', 'id'].includes(key)) {
    tableRow.push(key);
  }
});

export default tableData;
export { tableRow };

