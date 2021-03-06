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


    @GetMapping("/findproperties/{capacity}/{price}")
    public List<Property> findAllPropertiesByCapacityAndPrice (@PathVariable int capacity, @PathVariable double price){
        return propertyRepository.findAllPropertiesByCapacityAndPrice(capacity, price);
    }


    @GetMapping("/getallbookedproperties/{startDate}/{endDate}")
    public List<Property> getAllBookedPropertiesByDate
            (@PathVariable @DateTimeFormat(pattern="ddMMyyyy") Date startDate,
             @PathVariable @DateTimeFormat(pattern="ddMMyyyy") Date endDate){
        return propertyRepository.getAllBookedPropertiesByDate(startDate, endDate);
    }


    @GetMapping("/findavailableproperties/{startDate}/{endDate}")
    public List<Property> findAvailablePropertiesByDate
            (@PathVariable @DateTimeFormat(pattern="ddMMyyyy") Date startDate,
             @PathVariable @DateTimeFormat(pattern="ddMMyyyy") Date endDate){
        return propertyRepository.findAvailablePropertiesByDate(startDate, endDate);
    }


    @GetMapping("/findproperties/{startDate}/{endDate}/{capacity}/{price}")
    public List<Property> findAllPropertiesByDateAndCapacityAndPrice
            (@PathVariable @DateTimeFormat(pattern="ddMMyyyy") Date startDate, @PathVariable @DateTimeFormat(pattern="ddMMyyyy") Date endDate, @PathVariable int capacity, @PathVariable double price){
        return propertyRepository.findAllPropertiesByDateAndCapacityAndPrice(startDate, endDate, capacity, price);
    }

}