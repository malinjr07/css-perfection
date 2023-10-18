import { signal } from '@preact/signals-react';

export const selectedApplicants = signal([]);
export const noApplicantModal = signal(false);
export const modalContent = signal({ text: '', type: '' });
export const filterOptions = signal({});

