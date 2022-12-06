package com.techrsstop.demo.service;

import com.techrsstop.demo.dao.UserRepository;
import com.techrsstop.demo.model.CartItem;
import com.techrsstop.demo.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class UserService {
    public final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public long addUser(User user) {
        return userRepository.save(user).getId();
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<User> getUserById(long id) {
        return userRepository.findById(id);
    }

    public Optional<User> getUserByName(String name) {
        return userRepository.findByName(name);
    }

    public void deleteUser(long id) {
        User user = userRepository.findById(id).orElse(null);
        if(user == null) return;
        userRepository.delete(user);
    }

    public void updateUser(long id, User user) {
        User _existing = userRepository.findById(id).orElse(null);
        assert _existing != null;
        _existing.setBalance(user.getBalance());
        _existing.setAvatarUrl(user.getAvatarUrl());
        _existing.setName(user.getName());
        _existing.setPassword(user.getPassword());
        userRepository.save(_existing);
    }

//    public void updateCartItem(UUID id, CartItem item) {
//        User _existing = userRepository.findById(id).orElse(null);
//        assert _existing != null;
//        _existing.getCart().updateItem(id, item.getQuantity());
//        userRepository.save(_existing);
//    }

//    public void addCartItem(UUID id, CartItem item) {
//        User _existing = userRepository.findById(id).orElse(null);
//        assert _existing != null;
//        _existing.getCart().cart.add(item);
//        userRepository.save(_existing);
//    }
//
//    public void removeItemFromCart(UUID id, CartItem item) {
//        User _existing = userRepository.findById(id).orElse(null);
//        assert _existing != null;
//        _existing.getCart().cart.remove(item);
//        userRepository.save(_existing);
//    }
//
//    public List<CartItem> getCartItems(UUID id) {
//        User _existing = userRepository.findById(id).orElse(null);
//        if(_existing == null) return null;
//        return _existing.getCart().cart;
//    }
//
//    public Optional<CartItem> getCartItem(UUID userId, UUID productId) {
//        User _existing = userRepository.findById(userId).orElse(null);
//        if(_existing == null) return Optional.empty();
//        return _existing.getCart().cart.stream().filter(p -> p.getProductId().equals(productId)).findFirst();
//    }
}
