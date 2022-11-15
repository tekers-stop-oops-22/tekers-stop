package com.techrsstop.demo.dao;

import com.techrsstop.demo.model.CartItem;
import com.techrsstop.demo.model.User;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository("userDao")
public class UserDataAccessService implements UserDao {

    private static List<User> DB = new ArrayList<>();

    @Override
    public boolean insertUser(UUID id, User user) {
        DB.add(new User(id, user.getName(), user.getAvatarUrl(), user.getCart().getCartItems()));
        return true;
    }

    @Override
    public List<User> getAllUsers() {
        return DB;
    }

    @Override
    public Optional<User> getUserById(UUID id) {
        return DB.stream().filter(u -> u.getId().equals(id)).findFirst();
    }

    @Override
    public boolean deleteUser(UUID id) {
        Optional<User> user = getUserById(id);
        if(user.isEmpty()) return false;
        DB.remove(user.get());
        return true;
    }

    @Override
    public boolean updateUser(UUID id, User user) {
        return getUserById(id).map(u -> {
            int index = DB.indexOf(u);
            if(index >= 0) {
                DB.set(index, new User(id, user.getName(), user.getAvatarUrl(), user.getCart().getCartItems()));
                return true;
            }
            return false;
        }).orElse(false);
    }

    @Override
    public boolean updateCartItem(UUID id, CartItem item) {
        return getUserById(id).map(u -> {
            int index = DB.indexOf(u);
            if(index >= 0) {
                u.updateCartItem(item);
                return true;
            }
            return false;
        }).orElse(false);
    }

    @Override
    public boolean removeItemFromCart(UUID id, CartItem item) {
        return getUserById(id).map(u -> {
            int index = DB.indexOf(u);
            if(index >= 0) {
                u.removeItemFromCart(item);
                return true;
            }
            return false;
        }).orElse(false);
    }

    @Override
    public List<CartItem> getCartItems(UUID id) {
        Optional<User> user = getUserById(id);
        if(user.isEmpty()) return null;
        return user.get().getCart().getCartItems();
    }

    @Override
    public Optional<CartItem> getCartItem(UUID userId, UUID itemId) {
        Optional<User> user = getUserById(userId);
        if(user.isEmpty()) return Optional.empty();
        return user.get().getCart().getItem(itemId);
    }
}
