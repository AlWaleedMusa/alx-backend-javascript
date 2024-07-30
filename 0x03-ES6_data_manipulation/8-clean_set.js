export default function cleanSet(set, string) {
  if (typeof string !== 'string' || string.length === 0) {
    return '';
  }

  const newString = [];
  set.forEach((element) => {
    if (element.startsWith(string)) {
      newString.push(element.slice(string.length));
    }
  });
  return newString.join('-');
}
