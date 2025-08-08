// Utility functions
export const cn = (...classes: (string | undefined | null | false)[]) => {
  return classes.filter(Boolean).join(' ');
};

export const formatDate = (date: Date | string) => {
  return new Intl.DateTimeFormat('zh-TW').format(new Date(date));
};