package com.pequeno.foodie.controller;

import com.pequeno.foodie.model.User;
import com.pequeno.foodie.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/users")
    public String listAll(User user) {
        List<User> userList = userRepository.findAll();
        //user.addAttribute("userList", userList);

        return "users";
    }
}
