package com.codeclan.NestAway.NestAway.repositories.properties;

import com.codeclan.NestAway.NestAway.models.Property;

import java.util.Date;
import java.util.List;

public interface PropertyRepositoryCustom {

    List<Property> getAllProperties();
    List<Property> findAvailablePropertiesByDate(Date startDate, Date endDate);
    List<Property>findAllPropertiesByDate(Date startDate, Date endDate);
<<<<<<< HEAD
    List<Property> findAllPropertiesByDateAndCapacityAndPrice(Date startDate, Date endDate, int capacity, double price);
=======
    List<Property>findAllPropertiesByCapacityAndPrice(int capacity, double price);
>>>>>>> 2d9c6be51a1cc06c14c13493e077a2709adcd956
}
