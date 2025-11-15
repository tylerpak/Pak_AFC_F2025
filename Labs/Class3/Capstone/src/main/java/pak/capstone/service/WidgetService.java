package pak.capstone.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import pak.capstone.model.Widget;
import pak.capstone.repository.WidgetRepository;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.ArrayList;
import java.util.List;

@Service
public class WidgetService {
    private final WidgetRepository widgetRepository;

    @Autowired
    public WidgetService(WidgetRepository widgetRepository) {
        this.widgetRepository = widgetRepository;
    }

    public List<Widget> getTop5() {
//        List<Widget> widgets = widgetRepository.getAll();
//        List<Widget> top5 = new ArrayList<Widget>();
//        for(int i = 0; i < 4; i++) {
//            if(widgets.isEmpty()) {
//                break;
//            }
//            int max = widgets.getFirst().getPurchases();
//            Widget maxWidget = widgets.getFirst();
//            for (Widget w : widgets) {
//                if(w.getCost() > max) {
//                    max = w.getPurchases();
//                    maxWidget = w;
//                }
//            }
//            top5.add(maxWidget);
//            widgets.remove(maxWidget);
//        }
        return widgetRepository.findTop5ByOrderByPurchasesDesc();
    }

    public Widget getById(Long id) {
        return widgetRepository.getById(id);
    }

    public Widget save(Widget widget) {
        return widgetRepository.save(widget);
    }

    public void delete(Long id) {
        widgetRepository.deleteById(id);
    }

    public List<Widget> getAll() {
        return widgetRepository.findAll();
    }

    public void uploadImage(MultipartFile image, Long id) throws IOException {
        if(!widgetRepository.existsWidgetById(id)) {
            throw new IOException();
        }
        String filename = "widget-" + id + ".png";
        Path uploadPath = Paths.get("uploads").resolve(filename);
        Files.copy(image.getInputStream(), uploadPath, StandardCopyOption.REPLACE_EXISTING);
        Widget widget = widgetRepository.findWidgetById(id);
        widget.setImage("http://localhost:8080/images/" + filename);
        widgetRepository.save(widget);
    }

}
