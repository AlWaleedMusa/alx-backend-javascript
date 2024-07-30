export default function cleanSet(set, string) {
  const newString = [];
  set.forEach((element) => {
    if (element.startsWith(string)) {
      newString.push(element.slice(string.length));
    }
  });
  return newString.join('-');
}
