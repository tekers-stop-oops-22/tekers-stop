package com.techrsstop.demo.service;

import com.techrsstop.demo.dao.UserDao;
import com.techrsstop.demo.model.CartItem;
import com.techrsstop.demo.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class UserService {
    public final UserDao userDao;

    @Autowired
    public UserService(@Qualifier("userDao") UserDao userDao) {
        this.userDao = userDao;
    }

    public boolean addUser(User user) {
        return  userDao.insertUser(user);
    }

    public List<User> getAllUsers() {
        return userDao.getAllUsers();
    }

    public Optional<User> getUserById(UUID id) {
        return userDao.getUserById(id);
    }

    public boolean deleteUser(UUID id) {
        return userDao.deleteUser(id);
    }

    public boolean updateUser(UUID id, User user) {
        return userDao.updateUser(id, user);
    }

    public boolean updateCartItem(UUID id, CartItem item) {
        return userDao.updateCartItem(id, item);
    }

    public boolean removeItemFromCart(UUID id, CartItem item) {
        return userDao.removeItemFromCart(id, item);
    }

    public List<CartItem> getCartItems(UUID id) {
        return userDao.getCartItems(id);
    }

    public Optional<CartItem> getCartItem(UUID userId, UUID productId) {
        return userDao.getCartItem(userId, productId);
    }
}
