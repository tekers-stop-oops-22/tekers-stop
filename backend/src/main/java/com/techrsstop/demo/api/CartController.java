package com.techrsstop.demo.api;


import com.techrsstop.demo.model.CartItem;
import com.techrsstop.demo.service.CartItemService;
import com.techrsstop.demo.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RequestMapping("api/v1/cart")
@RestController
@CrossOrigin("http://localhost:3000")
public class CartController {

    @Autowired
    CartItemService cartService;

    @Autowired
    ProductService productService;

    @GetMapping("{userId}")
    public List<CartItem> getCartItems(@PathVariable("userId") long userId) {
        return cartService.getAllCartItems(userId);
    }

    @PutMapping
    public void updateCartItem(@RequestBody CartItem item) {
        cartService.updateCartItem(item);
    }

    @PutMapping("{user}/{product}")
    public void increment(@PathVariable("user") long userId, @PathVariable("product") long product) {
        cartService.increment(userId, product);
    }

    @PostMapping
    public void addCartItem(@RequestBody CartItem item) {
        cartService.addCartItem(item);
    }
}
