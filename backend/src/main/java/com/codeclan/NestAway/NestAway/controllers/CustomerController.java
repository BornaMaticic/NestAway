package com.codeclan.NestAway.NestAway.controllers;

import com.codeclan.NestAway.NestAway.models.Customer;
import com.codeclan.NestAway.NestAway.repositories.customers.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;


import java.util.List;

@RestController
@RequestMapping(value = "/api/customers")

public class CustomerController {


    @Autowired
    CustomerRepository customerRepository;

//    @GetMapping("/customers")
//    public List<Customer> getAllCustomers(){
//        return customerRepository.findAll();
//    }

}
