package com.codeclan.NestAway.NestAway.repositories.bookings;

import com.codeclan.NestAway.NestAway.models.Booking;
import com.codeclan.NestAway.NestAway.projections.EmbedCustomer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;


import java.util.Date;
import java.util.List;

@RepositoryRestResource(excerptProjection = EmbedCustomer.class)
public interface BookingRepository extends JpaRepository <Booking, Long> {

    List<Booking> findAllBookingsByCustomerId(Long customer_id);
    List<Booking> findAllBookingsByPropertyId(Long property_id);



}
