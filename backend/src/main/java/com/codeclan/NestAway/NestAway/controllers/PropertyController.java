package com.codeclan.NestAway.NestAway.controllers;
import com.codeclan.NestAway.NestAway.models.Property;
import com.codeclan.NestAway.NestAway.repositories.properties.PropertyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping(value = "/api/properties")

public class PropertyController {
    @Autowired
    PropertyRepository propertyRepository;


    @GetMapping("/bookingdate/{date}")
    public List<Property> findAllPropertiesByDate(@PathVariable @DateTimeFormat(pattern="dd-MM-yyyy") Date startDate, Date endDate){
        return propertyRepository.findAllPropertiesByDate(startDate, endDate);
    }

    @GetMapping("/findavailableproperties/{startDate}/{endDate}")
    public List<Property> findAvailablePropertiesByDate
            (@PathVariable @DateTimeFormat(pattern="ddMMyyyy") Date startDate,
             @PathVariable @DateTimeFormat(pattern="ddMMyyyy") Date endDate){
        return propertyRepository.findAvailablePropertiesByDate(startDate, endDate);
    }


    @GetMapping("/")
    public List<Property> getAllProperties(){
        return propertyRepository.findAll();
    }

    @GetMapping("/findproperties/{capacity}/{price}")
    public List<Property> findAllPropertiesByCapacityAndPrice (@PathVariable int capacity, @PathVariable double price){
        return propertyRepository.findAllPropertiesByCapacityAndPrice(capacity, price);
    }

}