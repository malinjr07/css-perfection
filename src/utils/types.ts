export type selectOptionType = { title: string; value: string };

export type selectBoxProps = {
  dataArr: selectOptionType[];
};

export type buttonProps = {
  isLarge?: true;
  actionCb: () => void;
  title: string;
};

