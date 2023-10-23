import { ReactNode, createContext, useState } from 'react';
import { viewLimitOptions } from './statics';
import { baseContext, tableDataType } from './types';

export const BaseContext = createContext<baseContext>({
  alertToggleState: false,
  documentToggleState: false,
  investmentTypeToggleState: false,
  rejectionModalState: false,
  toggleRejectionModal: () => {},
  toggleAlert: () => {},
  toggleDocumentModal: () => {},
  toggleInvestTypeModal: () => {},
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
  const [alertModalContent, setAlertModalContent] = useState({
    text: '',
    type: '',
    cancellable: false,
    cancelAction: (e?: any) => {},
    approveAction: (e?: any) => {},
  });
  const [tableDataState, setTableDataState] = useState<tableDataType[]>([]);
  const [rejectionModalState, setRejectionModalState] = useState(false);
  const [documentToggleState, setDocumentModalState] = useState(false);
  const [investmentTypeToggleState, setInvestmentTypeModalState] =
    useState(false);
  return (
    <BaseContext.Provider
      value={{
        alertToggleState,
        documentToggleState,
        investmentTypeToggleState,
        rejectionModalState,

        toggleRejectionModal: (e: boolean) => {
          setRejectionModalState(e);
        },
        toggleAlert: (e: boolean) => {
          setAlertModalState(e);
        },
        toggleDocumentModal: (e: boolean) => {
          setDocumentModalState(e);
        },
        toggleInvestTypeModal: (e: boolean) => {
          setInvestmentTypeModalState(e);
        },
      }}
    >
      {children}
    </BaseContext.Provider>
  );
};

export default ContextProvider;

