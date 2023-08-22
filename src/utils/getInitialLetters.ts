export default function formatName(name: string) {
  const splitedName = name.split(" ")
  
  function getInitialLettersName() {
    const letters = `${splitedName[0][0].toUpperCase()}${splitedName[1][0].toUpperCase()}`
    return letters
  }

  function getFirstName() {
    return splitedName[0]
  }

  return {
    getInitialLettersName,
    getFirstName
  }
}