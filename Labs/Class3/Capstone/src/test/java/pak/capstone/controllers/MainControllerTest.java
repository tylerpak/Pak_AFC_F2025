
package pak.capstone.controllers;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.*;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import pak.capstone.model.Widget;
import pak.capstone.service.WidgetService;

import java.util.Arrays;
import java.util.List;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import com.fasterxml.jackson.databind.ObjectMapper;

class MainControllerTest {

    @Mock
    private WidgetService widgetService;

    @InjectMocks
    private MainController mainController;

    private MockMvc mockMvc;
    private ObjectMapper objectMapper;

    private Widget widget1;
    private Widget widget2;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(mainController).build();
        objectMapper = new ObjectMapper();

        widget1 = new Widget();
        widget1.setId(1L);
        widget1.setName("Widget 1");
        widget1.setCost(10.0);

        widget2 = new Widget();
        widget2.setId(2L);
        widget2.setName("Widget 2");
        widget2.setCost(20.0);
    }

    @Test
    void testGetAllWidgets() throws Exception {
        List<Widget> widgets = Arrays.asList(widget1, widget2);
        when(widgetService.getAll()).thenReturn(widgets);

        mockMvc.perform(get("/api/widgets/all"))
                .andExpect(status().isOk())
                .andExpect(content().json(objectMapper.writeValueAsString(widgets)));

        verify(widgetService, times(1)).getAll();
    }

    @Test
    void testGetWidgetById() throws Exception {
        when(widgetService.getById(1L)).thenReturn(widget1);

        mockMvc.perform(get("/api/widgets/{id}", 1L))
                .andExpect(status().isOk())
                .andExpect(content().json(objectMapper.writeValueAsString(widget1)));

        verify(widgetService, times(1)).getById(1L);
    }

    @Test
    void testGetTop5Widgets() throws Exception {
        List<Widget> top5 = Arrays.asList(widget1, widget2);
        when(widgetService.getTop5()).thenReturn(top5);

        mockMvc.perform(get("/api/widgets/top5"))
                .andExpect(status().isOk())
                .andExpect(content().json(objectMapper.writeValueAsString(top5)));

        verify(widgetService, times(1)).getTop5();
    }

    @Test
    void testSaveWidget() throws Exception {
        when(widgetService.save(any(Widget.class))).thenReturn(widget1);

        mockMvc.perform(put("/api/widgets/save")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(widget1)))
                .andExpect(status().isOk())
                .andExpect(content().json(objectMapper.writeValueAsString(widget1)));

        verify(widgetService, times(1)).save(any(Widget.class));
    }

    @Test
    void testDeleteWidget() throws Exception {
        doNothing().when(widgetService).delete(1L);

        mockMvc.perform(delete("/api/widgets/delete/{id}", 1L))
                .andExpect(status().isOk());

        verify(widgetService, times(1)).delete(1L);
    }
}
