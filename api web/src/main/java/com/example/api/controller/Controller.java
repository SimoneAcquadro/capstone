package com.example.api.controller;

import com.example.api.model.Response;
import com.example.api.model.User;
import com.example.api.service.UserService;

import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

@RestController
@CrossOrigin
public class Controller {
    private UserService userService;
    private ObjectMapper objectMapper = new ObjectMapper();

    @Autowired
    public Controller(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/signin")
    public Response signin(@RequestBody User user) {
        try {
            BufferedReader br = new BufferedReader(new FileReader("db.json"));
            String line = br.readLine();

            if (line.contains(user.getName())) {
                if (line.contains(user.getPass())) {
                    return new Response(user.getToken());
                } else {
                    return new Response(null);
                }
            } else {
                return new Response(null);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        return null;
    }

    @PostMapping("/signup")
    public Response signup(@RequestBody User user) {
        try {
            FileWriter writer = new FileWriter("db.json");
            Gson gson = new Gson();
            String json = gson.toJson(user);
            System.out.println(json);
            writer.write(json);
            writer.close();

            Response res = new Response(user.setToken(""));
            System.out.println(res.getToken());

            return res;
        } catch (IOException e) {
            e.printStackTrace();
        }

        return null;
    }
}
