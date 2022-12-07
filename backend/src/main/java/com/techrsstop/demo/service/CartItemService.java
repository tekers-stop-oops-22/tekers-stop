package com.techrsstop.demo.service;

import com.techrsstop.demo.dao.CartItemRepository;
import com.techrsstop.demo.model.CartItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.UUID;

@Service
@Transactional
public class CartItemService {

    @Autowired
    CartItemRepository cartItemRepository;


    public void addCartItem(CartItem item) {
        updateCartItem(item, true);
    }

    public void deleteCartItem(long id) {
        cartItemRepository.deleteById(id);
    }

//    public void updateItem(UUID id, CartItem item) {
//        CartItem _exitItem = cartItemRepository.findById(id).orElse(null);
//        assert _exitItem != null;
//        _exitItem.setProduct(item.getProduct());
//        _exitItem.setQuantity(item.getQuantity());
//        _exitItem.setUser(item.getUser());
//    }

    public List<CartItem> getAllCartItems(long id) {
        if(cartItemRepository.findAll().size() == 0) return null;
        return cartItemRepository.findAllByUser(id);
    }

    public void increment(long id, long product) {
        CartItem _exItem = cartItemRepository.findByUserAndProduct(id, product);
        _exItem.setQuantity(_exItem.getQuantity() + 1);
        cartItemRepository.save(_exItem);
    }

    public void updateCartItem(CartItem item, boolean addQty) {
        CartItem _exItem = cartItemRepository.findByUserAndProduct(item.getUser(), item.getProduct());
        if(_exItem == null) {
            cartItemRepository.save(item);
            return;
        }
        if(addQty) {
            _exItem.setQuantity(_exItem.getQuantity() + item.getQuantity());
        } else {
            _exItem.setQuantity(item.getQuantity());
        }
        cartItemRepository.save(_exItem);
    }

    public void clearCart(long id) {
        cartItemRepository.deleteByUser(id);
    }
}
