package com.codeclan.NestAway.NestAway.models;

import javax.persistence.*;
import java.io.Serializable;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

@Entity
@Table(name = "booking")

public class Booking implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "total_price")
    private double totalPrice;

    @Column(name="start_date")
    private Date startDate;

    @Column(name="end_date")
    private Date endDate;

    @ManyToOne
    @JoinColumn(name="customer_id", nullable = false)
    private Customer customer;

    @ManyToOne
    @JoinColumn(name="property_id", nullable = false)
    private Property property;

    public Booking(double totalPrice, Customer customer, Property property, Date startDate, Date endDate) {
        this.totalPrice = totalPrice;
        this.customer = customer;
        this.property = property;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    public Booking() {
    }

    public Long getId() {
        return id;
    }

    public String getStartDate() {
        DateFormat df = new SimpleDateFormat("dd-MM-yyyy");
        return df.format(startDate);

    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public String getEndDate() {
        DateFormat dfe = new SimpleDateFormat("dd-MM-yyyy");
        return dfe.format(endDate);
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Property getProperty() {
        return property;
    }

    public void setProperty(Property property) {
        this.property = property;
    }
}

