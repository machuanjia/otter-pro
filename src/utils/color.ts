
export const getRandomColor = () => {
  let random = '#'
  for (let i = 0; i < 6; i++) {
    random += parseInt((Math.random() * 15) + '').toString(16)
  }
  return random
}

export const hexToRgba = (hex: string, opacity: number) => {
  return 'rgba(' + parseInt('0x' + hex.slice(1, 3)) + ',' + parseInt('0x' + hex.slice(3, 5)) + ','
    + parseInt('0x' + hex.slice(5, 7)) + ',' + opacity + ')';
}
