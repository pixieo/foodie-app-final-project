package com.pequeno.foodie.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String username;
    private String emailAddress;

    public User() {

    }

    public User(String username, String emailAddress) {
        this.username = username;
        this.emailAddress = emailAddress;
    }

    @Override
    public String toString() {
        return String.format(
                "Customer[id=%d, username='%s', emailAddress='%s']",
                id, username, emailAddress);
    }

    public Long getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmailAddress() {
        return emailAddress;
    }

    public void setEmailAddress(String address) {
        this.emailAddress = address;
    }
}
