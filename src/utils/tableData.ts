import { tableDataType } from './types';

const tableSingleData: tableDataType = {
  기존유형: { title: '소득적격', size: '100px' },
  신청유형: { title: '개인전문', size: '100px' },
  제출서류: { title: '보기', size: '100px' },
  신청일시: { title: '2023-01-10 09:00:00', size: '190px' },
  승인여부: { title: '', size: '87px' },
  '승인거부 사유': { title: '', size: '372px' },
  승인일시: { title: '2023-01-10 09:00:00', size: '189px' },
  관리자: { title: '', size: '124px' },
};

const tableData: tableDataType[] = [];
let count = 1;

while (count <= 10) {
  const status = Math.floor(Math.random() * 3);
  const manager = Math.floor(Math.random() * 2);
  const reason = Math.floor(Math.random() * 2);

  const tempObj = { ...tableSingleData };

  tempObj['승인거부 사유'].title =
    reason === 1
      ? '서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가'
      : '';

  tempObj.관리자.title = manager === 1 ? '관리자' : '';

  tempObj.승인여부.title =
    status === 0
      ? '승인거부'
      : status === 1
      ? '승인대기'
      : status === 2
      ? '승인완료'
      : '';

  tableData.push(tempObj);
  count++;
}

const tableRow: { title: string; size: string }[] = [];

Object.keys(tableSingleData).forEach((key) => {
  tableRow.push({ title: key, size: tableSingleData[key].size });
});

export default tableData;
export { tableRow };

