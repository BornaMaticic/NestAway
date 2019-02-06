package com.codeclan.NestAway.NestAway.projections;

import com.codeclan.NestAway.NestAway.models.Booking;
import com.codeclan.NestAway.NestAway.models.Customer;
import com.codeclan.NestAway.NestAway.models.Property;
import org.springframework.data.rest.core.config.Projection;

@Projection(name = "embedCustomer", types = Booking.class)

public interface EmbedCustomer {
    Long getId();
    String getStartDate();
    String getEndDate();
    Customer getCustomer();
    Property getProperty();
    double getTotalPrice();



}
