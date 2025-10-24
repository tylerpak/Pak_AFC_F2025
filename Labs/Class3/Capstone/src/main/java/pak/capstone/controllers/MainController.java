package pak.capstone.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pak.capstone.model.Widget;
import pak.capstone.service.WidgetService;

import java.nio.file.Path;
import java.util.List;

@RestController
@RequestMapping("/api")
public class MainController {

    WidgetService widgetService;

    @Autowired
    public MainController(WidgetService widgetService) {
        this.widgetService = widgetService;
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


    @DeleteMapping("/widgets/delete/{id}")
    public void deleteWidget(@PathVariable("id") Long id) {
        widgetService.delete(id);
    }
}
