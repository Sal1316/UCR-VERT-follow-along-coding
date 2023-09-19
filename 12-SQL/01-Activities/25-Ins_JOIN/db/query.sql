SELECT course_names.id AS courseID, course_names.name AS courseName, department.id AS departmentID, department.name AS departmentName
FROM course_names
JOIN department ON course_names.department = department.id; -- join table on coursename.deparmtne
