package org.example.service;

import org.example.model.Item;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class ItemService {
    private ArrayList<Item> items = new ArrayList<>();
    private int counter;

    public void create(String title) {
        Item newProduct = new Item(counter++, title);
        items.add(newProduct);
    }

    public ArrayList<Item> getAll() {
        return items;
    }

    public void buyById(int id) {
        getProductById(id).setBought(true);
    }

    public void removeById(int id) {
        items.remove(getProductById(id));
    }

    public Item getProductById(int id){
        for (Item item : items) {
            if (id == item.getId()) {
                return item;
            }
        }
        return  null;
    }
}
