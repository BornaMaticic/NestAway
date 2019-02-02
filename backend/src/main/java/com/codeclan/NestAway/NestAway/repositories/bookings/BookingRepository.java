package com.codeclan.NestAway.NestAway.repositories.bookings;

import com.codeclan.NestAway.NestAway.models.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepository extends JpaRepository <Booking, Long> {
}
