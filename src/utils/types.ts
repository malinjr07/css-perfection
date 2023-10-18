import { ReactNode } from 'react';

export type selectOptionType = { title: string; value: string };

export type tableDataType = {
  [key: string]: { title: string; size: string };
};

export type selectBoxProps = {
  dataArr: selectOptionType[];
  onChangeOptionCb?: () => void;
};
export type modalProps = {
  isOpen: boolean;
  closeModal: () => void;
  checkAction: () => void;
  bodyContent: string;
  cancelAction?: () => void;
  type?: 'success' | 'warn';
};

export type buttonProps = {
  isLarge?: true;
  actionCb: () => void;
  title: string;
};

