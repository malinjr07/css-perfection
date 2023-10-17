import { tableDataType } from './types';

const tableSingleData: tableDataType = {
  기존유형: '소득적격',
  신청유형: '개인전문',
  제출서류: '보기',
  신청일시: '2023-01-10 09:00:00',
  승인일시: '2023-01-10 09:00:00',
};

const tableData: tableDataType[] = [];
let count = 1;

while (count <= 1000) {
  const status = Math.floor(Math.random() * 3);
  const manager = Math.floor(Math.random() * 2);
  const reason = Math.floor(Math.random() * 2);

  const tempObj = { ...tableSingleData };

  tempObj['승인거부 사유'] =
    reason === 1
      ? '서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가'
      : '';

  tempObj.관리자 = manager === 1 ? '관리자' : '';

  tempObj.승인여부 =
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

const tableRow: string[] = [];

tableData.forEach((el) => {
  Object.keys(el).forEach((key) => {
    if (!tableRow.includes(key)) {
      tableRow.push(key);
    }
  });
});

export default tableData;
export { tableRow };

