import { Student } from "./student.interface";
import { studentModel } from "./student.model";

const createStudentToDb = async (student: Student) => {
  const result = await studentModel.create(student);
  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await studentModel.find();
  return result;
};

const getSingleStudent = async (id: string) => {
  const result = await studentModel.findOne({ id });
  return result;
};
export const StudentServices = {
  createStudentToDb,
  getAllStudentsFromDB,
  getSingleStudent,
};
