package com.techrsstop.demo.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.UUID;

public class Product {
    private final UUID id;

    @NotNull
    private final double price;
    @NotBlank
    private final String imageUrl;
    @NotBlank
    private final String name;
    @NotBlank
    private final String description;

    public Product(@JsonProperty("id") UUID id,
                   @JsonProperty("price") double price,
                   @JsonProperty("imageUrl") String imageUrl,
                   @JsonProperty("name") String name,
                   @JsonProperty("description") String description) {
        this.id = id;
        this.price = price;
        this.imageUrl = imageUrl;
        this.name = name;
        this.description = description;
    }

    public double getPrice() {
        return price;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public UUID getId() {
        return id;
    }
}
