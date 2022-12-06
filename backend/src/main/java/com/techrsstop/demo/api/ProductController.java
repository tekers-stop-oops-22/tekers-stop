package com.techrsstop.demo.api;

import com.techrsstop.demo.model.Product;
import com.techrsstop.demo.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.util.List;
import java.util.UUID;

@RequestMapping("api/v1/product")
@RestController
@CrossOrigin("http://localhost:3000")
public class ProductController {
    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @PostMapping
    public void addProduct(@Valid @NotNull @RequestBody Product product) {
        productService.addProduct(product);
    }

    @GetMapping
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    @GetMapping(path = "{id}")
    public Product getProduct(@PathVariable("id") long id) {
        return productService.getProductById(id).orElse(null);
    }

    @DeleteMapping(path = "{id}")
    public void deleteProduct(@PathVariable("id") long id) {
        productService.deleteProduct(id);
    }

    @PutMapping(path = "{id}")
    public void updateProduct(@PathVariable("id") long id, @Valid @NotNull @RequestBody Product product) {
        productService.updateProduct(id, product);
    }
}
