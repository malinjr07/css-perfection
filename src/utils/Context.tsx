import { ReactNode, createContext, useEffect, useState } from 'react';
import { viewLimitOptions } from './statics';
import { alertModalContent, baseContext, tableDataType } from './types';

export const BaseContext = createContext<baseContext>({
  alertToggleState: false,
  alertModalContent: {
    text: '',
    type: '',
    cancellable: false,
    cancelAction: () => {},
    approveAction: () => {},
  },
  tableDataState: [],
  documentToggleState: false,
  investmentTypeToggleState: false,
  investmentFormDocument: [],
  rejectionModalState: false,
  activePage: 1,
  perPageDataLimit: viewLimitOptions[0].value,
  selectedData: [],
  setSelectedData: () => {},
  setAlertModalContent: () => {},
  setTableDataState: () => {},
  setRejectionModalState: () => {},
  setDocumentModalState: () => {},
  setInvestmentFormDocument: () => {},
  setInvestmentTypeModalState: () => {},
  setActivePage: () => {},
  setPerPageDataLimit: () => {},
  setAlertModalState: () => {},
});

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [activePage, setActivePage] = useState<number>(1);
  const [selectedData, setSelectedData] = useState<string[]>([]);
  const [perPageDataLimit, setPerPageDataLimit] = useState<number>(
    parseInt(viewLimitOptions[0].value.toString())
  );
  const [investmentFormDocument, setInvestmentFormDocument] = useState<File[]>(
    []
  );
  const [alertToggleState, setAlertModalState] = useState(false);
  const [alertModalContent, setAlertModalContent] = useState<alertModalContent>(
    {
      text: '',
      type: '',
      cancellable: false,
      cancelAction: () => {},
      approveAction: () => {},
    }
  );
  const [tableDataState, setTableDataState] = useState<tableDataType[][]>([]);
  const [rejectionModalState, setRejectionModalState] = useState(false);
  const [documentToggleState, setDocumentModalState] = useState(false);
  const [investmentTypeToggleState, setInvestmentTypeModalState] =
    useState(false);

  useEffect(() => {
    const tempNestedArr: tableDataType[][] = [];

    const tempData = [...tableDataState];

    for (let i = 0; i < tempData.length; i += perPageDataLimit) {
      const chunk = tempData.slice(i, i + perPageDataLimit);
      tempNestedArr.push(chunk);
    }
    setTableDataState(tempNestedArr);
    setPerPageDataLimit(tempNestedArr.length);
    console.log(
      '🚀 ~ file: Context.tsx:65 ~ useEffect ~ perPageDataLimit:',
      perPageDataLimit
    );
  }, [perPageDataLimit]);

  return (
    <BaseContext.Provider
      value={{
        alertToggleState,
        alertModalContent,
        tableDataState,
        documentToggleState,
        investmentTypeToggleState,
        investmentFormDocument,
        rejectionModalState,
        activePage,
        perPageDataLimit,
        selectedData,
        setSelectedData,
        setAlertModalContent,
        setTableDataState,
        setRejectionModalState,
        setDocumentModalState,
        setInvestmentFormDocument,
        setInvestmentTypeModalState,
        setActivePage,
        setPerPageDataLimit,
        setAlertModalState,
      }}
    >
      {children}
    </BaseContext.Provider>
  );
};

export default ContextProvider;

