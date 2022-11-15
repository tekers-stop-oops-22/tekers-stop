package com.techrsstop.demo.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

public class Cart {
    private final List<CartItem> cart;

    public Cart() {
        this.cart = new ArrayList<>();
    }

    public Cart(List<CartItem> items) {
        this.cart = items;
    }

    public boolean updateItem(UUID productId, int qty) {
        Optional<CartItem> item =  this.cart.stream().filter(i -> i.getProductId().equals(productId)).findFirst();
        if(item.isEmpty()) {
            this.cart.add(new CartItem(productId, qty));
        } else {
            int index = this.cart.indexOf(item.get());
            this.cart.set(index, new CartItem(productId, item.get().getQuantity() + qty));
        }
        return true;
    }

    public Optional<CartItem> getItem(UUID id) {
        return cart.stream().filter(p -> p.getProductId().equals(id)).findFirst();
    }

    public boolean deleteItem(UUID productId) {
        Optional<CartItem> item = getItem(productId);
        if(item.isEmpty()) return false;
        cart.remove(item.get());
        return true;
    }

    public List<UUID> getProducts() {
        return cart.stream().map(CartItem::getProductId).toList();
    }

    public List<CartItem> getCartItems() {
        return cart;
    }
}
