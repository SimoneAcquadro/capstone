package com.example.api.model;

import java.util.Date;
import java.util.concurrent.ThreadLocalRandom;

public class User {

    private int id;
    private String name;
    private String pass;
    private String token;

    public User(String name, String pass) {
        // this.id = (int) (new Date().getTime());
        this.id = ThreadLocalRandom.current().nextInt(0, 1000000000);
        this.name = name;
        this.pass = pass;
        this.token = this.setToken("");
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getPass() {
        return pass;
    }

    public String getToken() {
        return token;
    }

    public String setToken(String token) {
        if (token == "") {
            System.out.println("AAAAAA");
            // this.token = new Date().toInstant().toString();
            this.token = String.valueOf(ThreadLocalRandom.current().nextInt(0, 1000000000));
        } else {
            this.token = token;
        }

        System.out.println(this.token);

        return this.token;
    }
}
