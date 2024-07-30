export default function getStudentIdsSum(list) {
  return list.reduce((sum, item) => sum + item.id, 0);
}
