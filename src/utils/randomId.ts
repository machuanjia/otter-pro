// 获取指定长度的随机字符串
export const getRandomId = (length: number) => {
  const id = []

  const getUpLetter = (): string => String.fromCharCode(Math.floor(Math.random() * 26) + 65)
  const getLowLetter = (): string => String.fromCharCode(Math.floor(Math.random() * 26) + 97)

  const idMethodArr = [getUpLetter, getLowLetter]

  const getIndex = (): number => Math.floor(Math.random() * 2)

  for (let i = 0; i < length; i += 1) {
    id.push(idMethodArr[getIndex()]())
  }

  return id.join('')
}
