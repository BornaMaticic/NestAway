package com.codeclan.NestAway.NestAway.repositories.properties;

import com.codeclan.NestAway.NestAway.models.Property;

import java.util.Date;
import java.util.List;

public interface PropertyRepositoryCustom {

//    List<Property> getAllProperties();
    List<Property> findAvailablePropertiesByDate(Date startDate, Date endDate);
    List<Property>findAllPropertiesByDate(Date startDate, Date endDate);
<<<<<<< HEAD

    List<Property> findAllPropertiesByDateAndCapacityAndPrice(Date startDate, Date endDate, int capacity, double price);

    List<Property>findAllPropertiesByCapacityAndPrice(int capacity, double price);
=======
    List<Property> getAllBookedPropertiesByDate(Date startDate, Date endDate);

//    List<Property> findAllPropertiesByDateAndCapacityAndPrice(Date startDate, Date endDate, int capacity, double price);
//
//    List<Property>findAllPropertiesByCapacityAndPrice(int capacity, double price);
>>>>>>> a32719390c2d1f2fba993bca1caffc2fa595f227

}
