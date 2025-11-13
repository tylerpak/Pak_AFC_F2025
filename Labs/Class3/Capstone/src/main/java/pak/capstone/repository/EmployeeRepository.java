package pak.capstone.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pak.capstone.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    Employee findEmployeeByUsername(String username);

    boolean existsEmployeeByUsername(String username);
}
