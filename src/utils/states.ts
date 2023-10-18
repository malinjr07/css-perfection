import { signal } from '@preact/signals-react';
import { createContext } from 'react';
import { modalContext } from './types';

export const ModalToggleStates = createContext<modalContext>({
  alertToggleState: false,
  documentToggleState: false,
  investmentTypeToggleState: false,
  toggleAlert: () => {},
  toggleDocumentModal: () => {},
  toggleInvestTypeModal: () => {},
});

export const selectedApplicantsState = signal([]);
export const investmentFormDocument = signal<File[]>([]);
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

