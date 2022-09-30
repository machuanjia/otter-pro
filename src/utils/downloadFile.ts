export const downloadFile = (url: string) => {
  const down = document.createElement('a');
  down.href = url;
  down.click();
  down.remove();
};
