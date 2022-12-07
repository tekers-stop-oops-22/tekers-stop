package com.techrsstop.demo.api;

import com.techrsstop.demo.model.CartItem;
import com.techrsstop.demo.model.User;
import com.techrsstop.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RequestMapping("api/v1/user")
@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {
    private final UserService userService;

    @PostMapping(path = "log")
    public long login(@RequestBody User user) {
        Optional<User> _user = userService.getUserByName(user.getName());
        if(_user.isEmpty()) {
            return 0;
        }
        User storedUser = _user.get();
        if(user.getPassword().equals(storedUser.getPassword())) {
            if(storedUser.isAdminUser()) {
                return 1000 + storedUser.getId();
            }
            return storedUser.getId();
        }
        return 0;
    }

    @PostMapping(path = "sign")
    public long signup(@RequestBody User user) {
        return userService.addUser(user);
    }

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
    public User getUserById(@PathVariable("id") long id) {
        return userService.getUserById(id).orElse(null);
    }

    @DeleteMapping(path = "{id}")
    public void deleteUser(@PathVariable("id") long id) {
        userService.deleteUser(id);
    }

    @PutMapping(path = "{id}")
    public void updateUser(@PathVariable("id") long id, @RequestBody User user) {
        userService.updateUser(id, user);
    }
}
