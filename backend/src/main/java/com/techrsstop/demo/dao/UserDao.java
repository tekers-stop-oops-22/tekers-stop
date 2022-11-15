package com.techrsstop.demo.dao;

import com.techrsstop.demo.model.CartItem;
import com.techrsstop.demo.model.User;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface UserDao {
    boolean insertUser(UUID id, User user);

    default boolean insertUser(User user) {
        UUID id = UUID.randomUUID();
        return insertUser(id, user);
    }

    List<User> getAllUsers();

    Optional<User> getUserById(UUID id);

    boolean deleteUser(UUID id);

    boolean updateUser(UUID id, User user);

    boolean updateCartItem(UUID id, CartItem item);

    boolean removeItemFromCart(UUID id, CartItem item);

    List<CartItem> getCartItems(UUID id);

    Optional<CartItem> getCartItem(UUID userId, UUID itemId);
}
