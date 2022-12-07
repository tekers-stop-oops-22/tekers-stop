package com.techrsstop.demo.dao;

import com.techrsstop.demo.model.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {
    CartItem findByUserAndProduct(long user, long product);

    List<CartItem> findAllByUser(long user);

    void deleteByUser(long id);
}
