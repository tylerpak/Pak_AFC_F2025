package pak.capstone.service;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.*;
import pak.capstone.model.Widget;
import pak.capstone.repository.WidgetRepository;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class WidgetServiceTest {

    @Mock
    private WidgetRepository widgetRepository;

    @InjectMocks
    private WidgetService widgetService;

    private Widget widget1;
    private Widget widget2;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);

        widget1 = new Widget();
        widget1.setId(1L);
        widget1.setName("Widget 1");
        widget1.setCost(10.0);
        widget1.setPurchases(5);

        widget2 = new Widget();
        widget2.setId(2L);
        widget2.setName("Widget 2");
        widget2.setCost(20.0);
        widget2.setPurchases(10);
    }

    @Test
    void testGetTop5() {
        List<Widget> topWidgets = Arrays.asList(widget2, widget1);
        when(widgetRepository.findTop5ByOrderByPurchasesDesc()).thenReturn(topWidgets);

        List<Widget> result = widgetService.getTop5();

        assertEquals(2, result.size());
        assertEquals(widget2, result.get(0));
        verify(widgetRepository, times(1)).findTop5ByOrderByPurchasesDesc();
    }

    @Test
    void testGetById() {
        when(widgetRepository.getById(1L)).thenReturn(widget1);

        Widget result = widgetService.getById(1L);

        assertNotNull(result);
        assertEquals("Widget 1", result.getName());
        verify(widgetRepository, times(1)).getById(1L);
    }

    @Test
    void testSave() {
        when(widgetRepository.save(widget1)).thenReturn(widget1);

        Widget result = widgetService.save(widget1);

        assertEquals(widget1, result);
        verify(widgetRepository, times(1)).save(widget1);
    }

    @Test
    void testDelete() {
        doNothing().when(widgetRepository).deleteById(1L);

        widgetService.delete(1L);

        verify(widgetRepository, times(1)).deleteById(1L);
    }

    @Test
    void testGetAll() {
        List<Widget> allWidgets = Arrays.asList(widget1, widget2);
        when(widgetRepository.findAll()).thenReturn(allWidgets);

        List<Widget> result = widgetService.getAll();

        assertEquals(2, result.size());
        verify(widgetRepository, times(1)).findAll();
    }
}
