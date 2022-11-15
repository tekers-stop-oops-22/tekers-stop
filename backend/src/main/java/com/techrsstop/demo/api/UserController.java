package com.techrsstop.demo.api;

import com.techrsstop.demo.model.CartItem;
import com.techrsstop.demo.model.User;
import com.techrsstop.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RequestMapping("api/v1/user")
@RestController
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @PostMapping
    public void addUser(@RequestBody User user) {
        userService.addUser(user);
    }

    @GetMapping(path = "{id}")
    public User getUserById(@PathVariable("id") UUID id) {
        return userService.getUserById(id).orElse(null);
    }

    @DeleteMapping(path = "{id}")
    public void deleteUser(@PathVariable("id") UUID id) {
        userService.deleteUser(id);
    }

    @PutMapping(path = "{id}")
    public void updateUser(@PathVariable("id") UUID id, @RequestBody User user) {
        userService.updateUser(id, user);
    }

    @PostMapping(path = "{id}/cart")
    public void addCartItem(@PathVariable("id") UUID id, @RequestBody CartItem cartItem) {
        userService.updateCartItem(id, cartItem);
    }

    @GetMapping(path = "{id}/cart")
    public List<CartItem> getAllCartItems(@PathVariable("id") UUID id) {
        return userService.getCartItems(id);
    }

    @PutMapping(path = "{id}/cart")
    public void updateCartItem(@PathVariable("id") UUID id, @RequestBody CartItem cartItem) {
        userService.updateCartItem(id, cartItem);
    }

    @DeleteMapping(path = "{id}/cart")
    public void deleteCartItem(@PathVariable("id") UUID id, @RequestBody CartItem cartItem) {
        userService.removeItemFromCart(id, cartItem);
    }

    @GetMapping(path = "{userId}/cart/{itemId}")
    public CartItem getCartItem(@PathVariable("userId") UUID userId, @PathVariable("itemId") UUID itemId) {
        return userService.getCartItem(userId, itemId).orElse(null);
    }
}
