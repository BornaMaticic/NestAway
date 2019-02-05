package com.codeclan.NestAway.NestAway.components;

import com.codeclan.NestAway.NestAway.models.Booking;
import com.codeclan.NestAway.NestAway.models.Customer;
import com.codeclan.NestAway.NestAway.models.Property;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;
import org.springframework.stereotype.Component;


@Component
class ConfigureAdapter extends RepositoryRestConfigurerAdapter {

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        config.exposeIdsFor(Booking.class);
        config.exposeIdsFor(Customer.class);
        config.exposeIdsFor(Property.class);
    }
}