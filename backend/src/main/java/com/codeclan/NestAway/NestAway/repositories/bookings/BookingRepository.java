package com.codeclan.NestAway.NestAway.repositories.bookings;

import com.codeclan.NestAway.NestAway.models.Booking;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.List;

public interface BookingRepository extends JpaRepository <Booking, Long> {

    List<Booking> findAllBookingsByCustomerId(Long customer_id);
    List<Booking> findAllBookingsByPropertyId(Long property_id);

}
