package pak.capstone.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import pak.capstone.dto.LoginDTO;
import pak.capstone.model.Employee;
import pak.capstone.model.Widget;
import pak.capstone.service.EmployeeService;
import pak.capstone.service.WidgetService;

import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import java.util.IllegalFormatException;
import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/api")
public class MainController {

    WidgetService widgetService;
    EmployeeService employeeService;

    @Autowired
    public MainController(WidgetService widgetService, EmployeeService employeeService) {
        this.widgetService = widgetService;
        this.employeeService = employeeService;
    }

    @GetMapping("/widgets/all")
    public List<Widget> getWidgetAll() {
        return widgetService.getAll();
    }

    @GetMapping("/widgets/{id}")
    public Widget getWidgetById(@PathVariable("id") Long widgetId) {
        return widgetService.getById(widgetId);
    }

    @GetMapping("/widgets/top5")
    public List<Widget> getTop5() {
        return widgetService.getTop5();
    }

    @PutMapping("/widgets/save")
    public Widget saveWidget(@RequestBody Widget widget) {
        return widgetService.save(widget);
    }

    @PostMapping("/widgets/login")
    public ResponseEntity<Employee> login(@RequestBody LoginDTO login) {
        try {
            return ResponseEntity.ok(employeeService.login(login.username(), login.password()));
        } catch (NoSuchElementException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/widgets/newEmployee")
    public ResponseEntity<Employee> signUp(@RequestBody LoginDTO login) {
        try{
            return ResponseEntity.ok(employeeService.signUp(login.username(), login.password()));
        }catch(RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }


    @DeleteMapping("/widgets/delete/{id}")
    public void deleteWidget(@PathVariable("id") Long id) {
        widgetService.delete(id);
    }

    @PostMapping("/widgets/image/{id}")
    public ResponseEntity<Void> uploadImage(@RequestParam MultipartFile image, @PathVariable Long id) {
        try {
            widgetService.uploadImage(image, id);
            return ResponseEntity.ok().build();
        }catch(IOException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
