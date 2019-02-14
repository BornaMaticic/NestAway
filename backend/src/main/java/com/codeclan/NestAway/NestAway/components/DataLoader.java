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


        Property property1 = new Property(
                "Coconut Cottage",
                "12 Grand Cayman Lane, Grand Cayman",
                6,
                150, RatingType.THREE,
                "https://s3.amazonaws.com/vrp2/vrpimages/5/2316/384/5ac78c50da99e_CB-WEB-FrontofHouse.jpg");
        Property property2 = new Property(
                "Aspen Glow",
                "415 East Hyman Avenue, Aspen",
                4,
                90, RatingType.FOUR,
                "http://aspen.realpropertyluxurygroup.com/wp-content/uploads/sites/30/2014/01/Eagle-Pines.jpg");
        Property property3 = new Property(
                "Lake Daze",
                "17750 Caldera Springs Drive, Oregon",
                5,
                120, RatingType.FIVE,
                "https://www.calderasprings.com/assets/images/masthead/lake-house.jpg");
        Property property4 = new Property(
                "Casa Del Sol",
                "29649 Mijas Costa, Málaga, Spain",
                8,
                180, RatingType.FIVE,
                "https://www.bluevillascollection.com/media/k2/items/cache/e208d5104268085aecc7ece94f6f710e_XL.jpg");

        propertyRepository.save(property1);
        propertyRepository.save(property2);
        propertyRepository.save(property3);
        propertyRepository.save(property4);

        Booking booking1 = new Booking(300, customer1, property1,date, date2);
        Booking booking2= new Booking(270, customer2, property2, date, date2);
        bookingRepository.save(booking1);
        bookingRepository.save(booking2);

    }


}
