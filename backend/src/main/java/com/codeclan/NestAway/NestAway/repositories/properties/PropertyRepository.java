package com.codeclan.NestAway.NestAway.repositories.properties;

import com.codeclan.NestAway.NestAway.models.Property;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PropertyRepository extends JpaRepository<Property, Long>, PropertyRepositoryCustom {
}
