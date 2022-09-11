package com.shopassist.shopassitapi.controllers;

import com.shopassist.shopassitapi.data.ListItemRepository;
import com.shopassist.shopassitapi.models.Ingredient;
import com.shopassist.shopassitapi.models.ListItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class ListItemController {

    @Autowired
    private ListItemRepository listItemRepository;

    @GetMapping("listitems")
    public List<ListItem> getListItems() {
        return listItemRepository.findAll();
    }

    @PostMapping("listitems/addnew")
    public void addListItem(@RequestBody ListItem listItem) {
        listItemRepository.save(listItem);
    }

    @PutMapping("listitems/{id}/edit")
    public void editListItem(@PathVariable("id") Integer id, @RequestBody ListItem listItem) {
        listItemRepository.save(listItem);
    }

    @DeleteMapping("listitems/{id}/delete")
    public void deleteListItem(@PathVariable("id") Integer id) {
        listItemRepository.deleteById(id);
    }

}
