package com.techrsstop.demo.dao;

import com.techrsstop.demo.model.Product;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository("productDao")
public class ProductDataAccessService implements ProductDao {

    private static List<Product> DB = new ArrayList<>();

    @Override
    public boolean insertProduct(UUID id, Product product) {
        DB.add(new Product(id,
                product.getPrice(),
                product.getImageUrl(),
                product.getName(),
                product.getDescription())
        );
        return true;
    }

    @Override
    public List<Product> getAllProducts() {
        return DB;
    }

    @Override
    public Optional<Product> getProductById(UUID id) {
        return DB.stream().filter(p -> id.equals(p.getId())).findFirst();
    }

    @Override
    public boolean deleteProduct(UUID id) {
        Optional<Product> product = getProductById(id);
        if(product.isEmpty()) return false;

        DB.remove(product.get());
        return true;
    }

    @Override
    public boolean updateProduct(UUID id, Product product) {
        return getProductById(id).map(p -> {
            int index = DB.indexOf(p);
            if(index >= 0) {
                DB.set(index, new Product(
                        id,
                        product.getPrice(),
                        product.getImageUrl(),
                        product.getName(),
                        product.getDescription()
                ));
                return true;
            }
            return false;
        }).orElse(false);
    }
}
