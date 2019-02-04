package com.codeclan.NestAway.NestAway.components;

import com.codeclan.NestAway.NestAway.models.Booking;
import com.codeclan.NestAway.NestAway.models.Customer;
import com.codeclan.NestAway.NestAway.models.Property;
import com.codeclan.NestAway.NestAway.models.RatingType;
import com.codeclan.NestAway.NestAway.repositories.bookings.BookingRepository;
import com.codeclan.NestAway.NestAway.repositories.customers.CustomerRepository;
import com.codeclan.NestAway.NestAway.repositories.properties.PropertyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component

public class DataLoader implements ApplicationRunner {


    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    PropertyRepository propertyRepository;

    @Autowired
    BookingRepository bookingRepository;



    public DataLoader(){
    }

    public void run(ApplicationArguments args) {
        Customer customer1 = new Customer("Rebekah");
        Customer customer2 = new Customer("Borna");
        customerRepository.save(customer1);
        customerRepository.save(customer2);


        Property property1 = new Property("Cottage", "12 Baker Street", 5, 150, RatingType.THREE);
        Property property2 = new Property("Apartment", "30a Barn Terrace", 2, 90, RatingType.FOUR);
        propertyRepository.save(property1);
        propertyRepository.save(property2);

        Booking booking1 = new Booking(300, customer1, property1);
        Booking booking2= new Booking(270, customer2, property2);
        bookingRepository.save(booking1);
        bookingRepository.save(booking2);

    }



}
