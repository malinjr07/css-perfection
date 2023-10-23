export type selectOptionType = { title: string; value: string | number };

export type tableDataType = {
  [key: string]: { title: string; size: string } | any;
};
export type baseContext = {
  alertToggleState: boolean;
  documentToggleState: boolean;
  investmentTypeToggleState: boolean;
  rejectionModalState: boolean;
  toggleRejectionModal: (e: boolean) => void;
  toggleAlert: (e: boolean) => void;
  toggleDocumentModal: (e: boolean) => void;
  toggleInvestTypeModal: (e: boolean) => void;
};
export type modalContext = {
  alertToggleState: boolean;
  documentToggleState: boolean;
  investmentTypeToggleState: boolean;
  rejectionModalState: boolean;
  toggleRejectionModal: (e: boolean) => void;
  toggleAlert: (e: boolean) => void;
  toggleDocumentModal: (e: boolean) => void;
  toggleInvestTypeModal: (e: boolean) => void;
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

