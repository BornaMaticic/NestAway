package com.codeclan.NestAway.NestAway.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;


@Entity
@Table(name = "properties")

public class Property implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Column(name = "name")
    private String name;

    @Column(name = "address")
    private String address;

    @Column(name = "capacity")
    protected int capacity;

    @Column(name = "image_url")
    private String imageUrl;

    @Column(name = "price")
    protected double price;

    @Column(name = "rating")
    private RatingType rating;

    @JsonIgnore
    @OneToMany(mappedBy = "property")
    private List<Booking> bookings;

    public Property(String name, String address, int capacity, double price, RatingType rating, String imageUrl) {
        this.name = name;
        this.address = address;
        this.capacity = capacity;
        this.price = price;
        this.rating = rating;
        this.imageUrl = imageUrl;
        this.bookings = new ArrayList<Booking>();
    }

    public Property() {
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long Id) {
        this.Id = Id;
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

    public void addBookings(Booking booking){
        this.bookings.add(booking);
    }
}
