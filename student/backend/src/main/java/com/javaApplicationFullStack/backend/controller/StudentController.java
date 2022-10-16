package com.javaApplicationFullStack.backend.controller;

import com.javaApplicationFullStack.backend.model.Student;
import com.javaApplicationFullStack.backend.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
@CrossOrigin
public class StudentController {
    @Autowired
    private StudentService studentService;
    @PostMapping("/add")
    public String add(@RequestBody Student student){
        studentService.saveStudent(student);
        return  "New Student is added";
    }
    @GetMapping("/getAll")
    public List<Student> getStudentService() {
        return studentService.getAllStudents();
    }
}
