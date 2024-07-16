package com.example.api.service;

import com.example.api.model.User;
import com.google.gson.Gson;
import org.springframework.stereotype.Service;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    private List<User> userList;

    public UserService() {
        userList = new ArrayList<>();

        // User user = new User("simo@gmail.com", "12341234");

        try {
            Gson gson = new Gson();
            FileReader reader = new FileReader("db.json");

            User user = gson.fromJson(reader, User.class);
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
    }

    public Optional<User> getUser(Integer id) {
        Optional optional = Optional.empty();
        for (User user: userList) {
            if(id == user.getId()){
                optional = Optional.of(user);
                return optional;
            }
        }

        return optional;
    }
}
