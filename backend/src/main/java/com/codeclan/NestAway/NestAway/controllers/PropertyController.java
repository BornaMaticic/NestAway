package com.codeclan.NestAway.NestAway.controllers;
import com.codeclan.NestAway.NestAway.models.Property;
import com.codeclan.NestAway.NestAway.repositories.properties.PropertyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/api/properties")

public class PropertyController {


    @Autowired
    PropertyRepository propertyRepository;

//    @GetMapping("/properties")
//    public List<Property> getAllProperties(){
//        return propertyRepository.findAll();
//    }


}