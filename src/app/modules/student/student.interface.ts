import { Schema, model, connect } from "mongoose";

export type Gaurdian = {
  fatherName: string;
  fatherOccupcation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

export type UserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type LocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

export type Student = {
  id: string;
  name: UserName;
  gender: "Male" | "Female";
  dateOfBirth?: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup: "A+" | "A-" | "B+" | "B-" | "O+" | "O-";
  presentAddress: string;
  permanentAddress: string;
  guardian: Gaurdian;
  localGuardian: LocalGuardian;
  profileImage?: string;
  isActive: "active" | "blocked";
};
