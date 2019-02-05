package com.codeclan.NestAway.NestAway.repositories.properties;

import com.codeclan.NestAway.NestAway.models.Property;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.Date;
import java.util.List;

public class PropertyRepositoryImpl implements PropertyRepositoryCustom {

    @Autowired
    EntityManager entityManager;



    @Transactional
    public List<Property> findAllPropertiesByDate(Date startDate, Date endDate){
        List<Property> properties = null;
        Session session = entityManager.unwrap(Session.class);

        try {
            Criteria cr = session.createCriteria(Property.class);
            cr.createAlias("bookings", "bookingAlias");
            cr.add(Restrictions.between("bookingAlias.date", startDate, endDate));
            properties = cr.list();
        } catch (HibernateException e) {
            e.printStackTrace();
        } finally {
            session.close();
        }
        return properties;
    }



    @Transactional
    public List<Property> getAllPropertiesByDate(Date startDate, Date endDate){
        List<Property> properties = null;
        Session session = entityManager.unwrap(Session.class);

        try {
            Criteria cr = session.createCriteria(Property.class);
            cr.createAlias("bookings", "bookingAlias");
            cr.add(Restrictions.not(Restrictions.between("bookingAlias.date", startDate, endDate)));
            properties = cr.list();
        } catch (HibernateException e) {
            e.printStackTrace();
        } finally {
            session.close();
        }


        return properties;
    }



    @Transactional
    public List<Property> findAvailablePropertiesByDate(Date startDate, Date endDate){
        List<Property> results = null;
        Session session = entityManager.unwrap(Session.class);

        try {
            Criteria cr = session.createCriteria(Property.class);
            Criteria crB = session.createCriteria(Property.class);

            cr.createAlias("bookings", "bookingAlias");

            Criterion checkStartDateOfExistingBooking = Restrictions.not(Restrictions.between("bookingAlias.startDate", startDate, endDate));
            Criterion checkEndDateOfExistingBooking = Restrictions.not(Restrictions.between("bookingAlias.endDate", startDate, endDate));
            Criterion checkIfQueryBetweenExistingBookingDates = Restrictions.not(Restrictions.and(Restrictions.gt("bookingAlias.startDate", startDate), Restrictions.lt("bookingAlias.endDate", endDate)));

            cr.add(checkStartDateOfExistingBooking);
            cr.add(checkEndDateOfExistingBooking);
            cr.add(checkIfQueryBetweenExistingBookingDates);

            cr.setProjection(Projections.property("id"));

            if (!cr.list().isEmpty()){
                crB.add(Restrictions.not(Restrictions.in("id", cr.list())));
            }

            results = crB.list();
        }
        catch (HibernateException ex) {
            ex.printStackTrace();
        }
        return results;
    }

}
