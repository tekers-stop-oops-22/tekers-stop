package com.techrsstop.demo.dao;

import com.techrsstop.demo.model.Product;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface ProductDao {
    boolean insertProduct(UUID id, Product product);

    default boolean insertProduct(Product product) {
        UUID id = UUID.randomUUID();
        return insertProduct(id, product);
    }

    List<Product> getAllProducts();

    Optional<Product> getProductById(UUID id);

    boolean deleteProduct(UUID id);

    boolean updateProduct(UUID id, Product product);
}
