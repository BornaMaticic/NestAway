package com.codeclan.NestAway.NestAway.repositories.properties;

import com.codeclan.NestAway.NestAway.models.Property;

import java.util.Date;
import java.util.List;

public interface PropertyRepositoryCustom {


    List<Property> findAvailablePropertiesByDate(Date startDate, Date endDate);

    List<Property> findAllPropertiesByDateAndCapacityAndPrice(Date startDate, Date endDate, int capacity, double price);

    List<Property>findAllPropertiesByCapacityAndPrice(int capacity, double price);

    List<Property> getAllBookedPropertiesByDate(Date startDate, Date endDate);


}
