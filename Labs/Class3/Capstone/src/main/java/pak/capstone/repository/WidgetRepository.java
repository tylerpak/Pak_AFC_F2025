package pak.capstone.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pak.capstone.model.Widget;

import java.util.List;

@Repository
public interface WidgetRepository extends JpaRepository<Widget, Long> {

   List<Widget> findTop5ByOrderByPurchasesDesc();

    boolean existsWidgetById(long id);

    Widget findWidgetById(long id);
}
