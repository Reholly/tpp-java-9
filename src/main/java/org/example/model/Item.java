package org.example.model;

public class Item {
    private int id;
    private boolean bought = false;
    private String title;

    public Item(int newId, String newTitle) {
        id = newId;
        title = newTitle;
    }

    public int getId() {
        return id  ;
    }

    public boolean getBought() {
        return bought;
    }

    public String getTitle() {
        return title;
    }

    public void setBought(boolean newBought) {
        bought = newBought;
    }
}
