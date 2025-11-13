package pak.capstone.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pak.capstone.model.Employee;
import pak.capstone.repository.EmployeeRepository;

import java.util.IllegalFormatConversionException;
import java.util.NoSuchElementException;

@Service
public class EmployeeService {

    EmployeeRepository employeeRepository;

    @Autowired
    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }


    public Employee login(String username, String password) throws NoSuchElementException{
        Employee employee = employeeRepository.findEmployeeByUsername(username);
        if(employee.getPassword().equals(password)) {
            return employee;
        }
        else {
            throw new NoSuchElementException("Login failed");
        }
    }

    public Employee signUp(String username, String password) throws RuntimeException{
        if(username.isEmpty() || password.isEmpty()) {
            throw new RuntimeException("Sign up failed");
        }
        if(employeeRepository.existsEmployeeByUsername(username)) {
            throw new RuntimeException("Sign up failed");
        }
        return employeeRepository.save(new Employee(username, password));
    }
}
