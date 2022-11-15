package com.techrsstop.demo.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.UUID;

public class CartItem {
    private final UUID productId;
    private int quantity;

    public CartItem(@JsonProperty("id") UUID productId, @JsonProperty("quantity") int quantity) {
        this.productId = productId;
        this.quantity = quantity;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public UUID getProductId() {
        return productId;
    }
}
