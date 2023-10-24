export type selectOptionType = { title: string; value: string | number };

export type tableDataType = {
  [key: string]: { title: string; size: string } | any;
};

export type alertModalContent = {
  text: string;
  type?: string;
  cancellable?: boolean;
  cancelAction?: (e?: any) => void;
  approveAction?: (e?: any) => void;
};
export type baseContext = {
  alertToggleState: boolean;
  documentToggleState: boolean;
  investmentTypeToggleState: boolean;
  rejectionModalState: boolean;
  alertModalContent: alertModalContent;
  tableDataState: tableDataType[][];
  investmentFormDocument: File[];
  activePage: number;
  perPageDataLimit: number;
  selectedData: string[];
  setSelectedData: (e: string[]) => void;
  setAlertModalContent: (e: alertModalContent) => void;
  setTableDataState: (e: tableDataType[][]) => void;
  setRejectionModalState: (e: boolean) => void;
  setDocumentModalState: (e: boolean) => void;
  setInvestmentFormDocument: (e: File[]) => void;
  setInvestmentTypeModalState: (e: boolean) => void;
  setActivePage: (e: number) => void;
  setPerPageDataLimit: (e: number) => void;
  setAlertModalState: (e: boolean) => void;
};

export type selectBoxProps = {
  dataArr: selectOptionType[];
  onChangeOptionCb?: (e: selectOptionType) => void;
  className?: string;
  bodyClassName?: string;
};
export type modalProps = {
  isOpen: boolean;
  closeModal: () => void;
  // checkAction: () => void;
  // bodyContent: string;
  cancellable?: true;
  // type?: 'success' | 'warn';
};

export type buttonProps = {
  isLarge?: true;
  actionCb: () => void;
  title: string;
  variant?: 'outlined';
};

