package com.techrsstop.demo.service;

import com.techrsstop.demo.dao.ProductDao;
import com.techrsstop.demo.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ProductService {
    public final ProductDao productDao;

    @Autowired
    public ProductService(@Qualifier("productDao") ProductDao productDao) {
        this.productDao = productDao;
    }

    public void addProduct(Product product) {
        productDao.insertProduct(product);
    }

    public List<Product> getAllProducts() {
        return productDao.getAllProducts();
    }

    public Optional<Product> getProductById(UUID id) {
        return productDao.getProductById(id);
    }

    public void deleteProduct(UUID id) {
        productDao.deleteProduct(id);
    }

    public void updateProduct(UUID id, Product product) {
        productDao.updateProduct(id, product);
    }
}
