import { ReactNode, createContext, useState } from 'react';
import { viewLimitOptions } from './statics';
import { alertModalContent, baseContext, tableDataType } from './types';

export const BaseContext = createContext<baseContext>({
  alertToggleState: false,
  alertModalContent: {
    text: '',
    type: '',
    cancellable: false,
    cancelAction: (e?: any) => {},
    approveAction: (e?: any) => {},
  },
  tableDataState: [],
  documentToggleState: false,
  investmentTypeToggleState: false,
  investmentFormDocument: [],
  rejectionModalState: false,
  activePage: 1,
  perPageDataLimit: viewLimitOptions[0].value,
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
      cancelAction: (e?: any) => {},
      approveAction: (e?: any) => {},
    }
  );
  const [tableDataState, setTableDataState] = useState<tableDataType[]>([]);
  const [rejectionModalState, setRejectionModalState] = useState(false);
  const [documentToggleState, setDocumentModalState] = useState(false);
  const [investmentTypeToggleState, setInvestmentTypeModalState] =
    useState(false);

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

