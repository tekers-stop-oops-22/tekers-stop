package com.techrsstop.demo.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;
import java.util.UUID;

public class User {
    private final UUID id;
    private final String name;
    private final String avatarUrl;
    private final Cart cart;

    public User(@JsonProperty("id") UUID id,
                @JsonProperty("name") String name,
                @JsonProperty("avatarUrl") String avatarUrl,
                @JsonProperty("cart") List<CartItem> cartItems) {
        this.id = id;
        this.name = name;
        this.avatarUrl = avatarUrl;
        this.cart = new Cart(cartItems);
    }

    public void updateCartItem(CartItem item) {
        cart.updateItem(item.getProductId(), item.getQuantity());
    }

    public void removeItemFromCart(CartItem item) {
        cart.deleteItem(item.getProductId());
//        cart.addItem(item.getProductId(), item.getQuantity());
    }

    public UUID getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getAvatarUrl() {
        return avatarUrl;
    }

    public Cart getCart() {
        return cart;
    }
}
