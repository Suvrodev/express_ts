import { Request, Response } from "express";
import { StudentServices } from "./student.service";

const createStudent = async (req: Request, res: Response) => {
  try {
    console.log("Student insertion");
    const { we: Suvro } = req.body;
    console.log("Check:::", req.body);
    //will call service function to send this data
    const result = await StudentServices.createStudentToDb(Suvro);
    res.status(200).json({
      sucess: true,
      message: "Student is created successfully",
      data: result,
    });
  } catch (error) {
    console.log("Student insert Error: ", error);
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    console.log("Get All Students");
    const result = await StudentServices.getAllStudentsFromDB();
    res.status(200).json({
      sucess: true,
      message: "Students are retrive successfully",
      data: result,
    });
  } catch (error) {}
};

const getSingleStudents = async (req: Request, res: Response) => {
  try {
    console.log("Get Single Students");
    const id = req.params.id;
    const result = await StudentServices.getSingleStudent(id);
    res.status(200).json({
      success: true,
      message: "Student retrive Successfully",
      data: result,
    });
  } catch (error) {}
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudents,
};
