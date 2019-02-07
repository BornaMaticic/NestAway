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

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.TimeZone;

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

    public void run(ApplicationArguments args) throws ParseException {

        SimpleDateFormat df = new SimpleDateFormat("dd-MM-yyyy");
        df.setTimeZone(TimeZone.getTimeZone("UTC"));

        String stringToParse = "12-02-2019";
        String stringToParse2 = "18-02-2019";

        Date date = df.parse(stringToParse);
        Date date2 = df.parse(stringToParse2);

        String stringToParse3 = "20-02-2019";
        String stringToParse4 = "25-02-2019";

        Date date3 = df.parse(stringToParse);
        Date date4 = df.parse(stringToParse2);

        Customer customer1 = new Customer("Rebekah", "Dixon");
        Customer customer2 = new Customer("Borna", "Maticic");
        customerRepository.save(customer1);
        customerRepository.save(customer2);


        Property property1 = new Property("Cottage", "12 Baker Street", 5, 150, RatingType.THREE, "https://images.adsttc.com/media/images/59a4/c624/b22e/389d/3e00/02a3/newsletter/MHA.JR_201708_038.jpg?1503970808");
        Property property2 = new Property("Apartment", "30a Barn Terrace", 2, 90, RatingType.FOUR, "https://images.adsttc.com/media/images/59a4/c624/b22e/389d/3e00/02a3/newsletter/MHA.JR_201708_038.jpg?1503970808");
        Property property3 = new Property("House", "50a Barn Terrace", 4, 80, RatingType.FOUR, "https://images.adsttc.com/media/images/59a4/c624/b22e/389d/3e00/02a3/newsletter/MHA.JR_201708_038.jpg?1503970808");
        propertyRepository.save(property1);
        propertyRepository.save(property2);
        propertyRepository.save(property3);

        Booking booking1 = new Booking(300, customer1, property1,date, date2);
        Booking booking2= new Booking(270, customer2, property2, date, date2);
        bookingRepository.save(booking1);
        bookingRepository.save(booking2);

    }


}
