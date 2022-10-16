package com.javaApplicationFullStack.backend.service;

import com.javaApplicationFullStack.backend.model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudents();
}
