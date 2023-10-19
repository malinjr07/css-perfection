import { computed, signal } from '@preact/signals-react';
import { createContext } from 'react';
import { modalContext, tableDataType } from './types';
import { viewLimitOptions } from './statics';
import tableData from './tableData';

export const ModalToggleStates = createContext<modalContext>({
  alertToggleState: false,
  documentToggleState: false,
  investmentTypeToggleState: false,
  rejectionModalState: false,
  toggleRejectionModal: () => {},
  toggleAlert: () => {},
  toggleDocumentModal: () => {},
  toggleInvestTypeModal: () => {},
});

export const activePage = signal(1);
export const dataLimitState = signal(
  parseInt(viewLimitOptions[0].value.toString())
);
export const investmentFormDocument = signal<File[]>([]);
export const selectedDataState = signal<string[]>([]);
export const noApplicantModalState = signal(false);
export const rejectionModalState = signal(false);
export const documentModalState = signal(false);
export const investmentTypeModalState = signal(false);
export const alertModalState = signal({
  text: '',
  type: '',
  cancellable: false,
});
export const filterOptionsState = signal({});
export const renderDataState = computed(() => {
  const tempNestedArr: tableDataType[][] = [];

  for (let i = 0; i < tableData.length; i += dataLimitState.value) {
    const chunk = tableData.slice(i, i + dataLimitState.value);
    tempNestedArr.push(chunk);
  }
  return tempNestedArr;
});

