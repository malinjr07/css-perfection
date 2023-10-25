type contextStates = {
  currentPage: number;
  pageLimit: number;
  sortingAttribute: string;
  selectedData: string[];
  visibleArr: tableDataType[];
};

export type alertModalStateType = {
  visibleState: boolean;
  text: string;
  type?: string;
  cancellable?: boolean;
  cancelAction?: (e?: any) => void;
  approveAction?: (e?: any) => void;
};

export interface contextType extends contextStates {
  setDataLimit: (e: number) => void;
  setCurrentPage: (e: contextType['currentPage']) => void;
  setSortingAttribute: (e: contextType['sortingAttribute']) => void;
  setSelectedData: (e: contextType['selectedData']) => void;
  alertModalState: alertModalStateType;
  setAlertModalState: (e: alertModalStateType) => void;
  rejectionModalView: boolean;
  setRejectionModalView: (e: boolean) => void;
  investmentModalView: boolean;
  setInvestmentModalView: (e: boolean) => void;
  investmentDocs: File[];
  setInvestmentDocs: (e: File[]) => void;
}

export type tableDataType = {
  [key: string]: { title: string; size: string } | any;
};

export type selectOptionType = { title: string; value: string | number };

export type selectComponentProps = {
  dataArr: selectOptionType[];
  onChangeOptionCb?: (e: selectOptionType) => void;
  className?: string;
  bodyClassName?: string;
};

