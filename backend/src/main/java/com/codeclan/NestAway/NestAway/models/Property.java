package com.codeclan.NestAway.NestAway.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "properties")

public class Property {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "address")
    private String address;

    @Column(name = "capacity")
    private int capacity;

//TODO:add image column


    @Column(name = "price")
    private double price;

    @Column(name = "rating")
    private RatingType rating;

    @JsonIgnore
    @OneToMany(mappedBy = "property")
    private List<Booking> bookings;

    public Property(String name, String address, int capacity, double price, RatingType rating, List<Booking> bookings) {
        this.name = name;
        this.address = address;
        this.capacity = capacity;
        this.price = price;
        this.rating = rating;
        this.bookings = bookings;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public RatingType getRating() {
        return rating;
    }

    public void setRating(RatingType rating) {
        this.rating = rating;
    }

    public List<Booking> getBookings() {
        return bookings;
    }

    public void setBookings(List<Booking> bookings) {
        this.bookings = bookings;
    }
}
