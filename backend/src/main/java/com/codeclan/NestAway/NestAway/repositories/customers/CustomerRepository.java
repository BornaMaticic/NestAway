package com.codeclan.NestAway.NestAway.repositories.customers;

import com.codeclan.NestAway.NestAway.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository <Customer, Long> {
}
