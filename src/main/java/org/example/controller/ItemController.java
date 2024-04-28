package org.example.controller;

import org.example.model.Item;
import org.example.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
public class ItemController {
    @Autowired
    private ItemService itemService;


    @PostMapping("/item")
    public HttpStatus create(@RequestBody String title ) {
        itemService.create(title);
        return HttpStatus.OK;
    }

    @ResponseBody
    @GetMapping("/item")
    public Iterable<Item> getAll() {
        return itemService.getAll();
    }

    @PutMapping("/item/{id}")
    public HttpStatus buyItem(@PathVariable int id) {
        itemService.buyById(id);
        return HttpStatus.OK;
    }

    @DeleteMapping("/item/{id}")
    public HttpStatus deleteItem(@PathVariable int id) {
        itemService.removeById(id);
        return HttpStatus.OK;
    }
}
