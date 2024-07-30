export default function updateStudentGradeByCity(list, city, newGrades) {
  const newList = list.filter((item) => item.location === city);

  return newList.map((student) => {
    const gradeObject = newGrades.find((grade) => grade.studentId === student.id);

    return {
      ...student,
      grade: gradeObject ? gradeObject.grade : 'N/A',
    };
  });
}
