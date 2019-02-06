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
import java.util.ArrayList;
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
            cr.add(Restrictions.between("bookingAlias.startDate", startDate, endDate));
            cr.add(Restrictions.between("bookingAlias.endDate", startDate, endDate));


            properties = cr.list();
        } catch (HibernateException e) {
            e.printStackTrace();
        } finally {
            session.close();
        }
        return properties;
    }


    @Transactional
    public List<Property> findAllPropertiesByCapacityAndPrice(int capacity, double price){
        List<Property> results = null;
        Session session = entityManager.unwrap(Session.class);

        try {
            Criteria cr = session.createCriteria(Property.class);
            cr.add(Restrictions.lt("price", price));
            cr.add(Restrictions.ge("capacity", capacity));
            results = cr.list();
        }

        catch (HibernateException e){
            e.printStackTrace();
        }
        finally {
            session.close();
        }
        return results;
    }



    @Transactional
    public List<Property> getAllBookedPropertiesByDate(Date startDate, Date endDate){
        List<Property> properties = null;
        Session session = entityManager.unwrap(Session.class);

        try {
            Criteria cr = session.createCriteria(Property.class);
            Criteria crB = session.createCriteria(Property.class);

            cr.createAlias("bookings", "bookingAlias");

            Criterion checkIfExistingBookingDatesBeforeQuery = Restrictions.not(Restrictions.and(Restrictions.lt("bookingAlias.startDate", startDate), Restrictions.lt("bookingAlias.endDate", startDate)));
            Criterion checkIfExistingBookingDatesAfterQuery = Restrictions.not(Restrictions.and(Restrictions.gt("bookingAlias.startDate", endDate), Restrictions.gt("bookingAlias.endDate", endDate)));

            cr.add(checkIfExistingBookingDatesBeforeQuery);
            cr.add(checkIfExistingBookingDatesAfterQuery);

            cr.setProjection(Projections.property("id"));

            if (!cr.list().isEmpty()){
                crB.add(Restrictions.in("id", cr.list()));
            }

            properties = crB.list();
        }
        catch (HibernateException ex) {
            ex.printStackTrace();
        }

        return  properties;
    }


    @Transactional
    public List<Property> findAvailablePropertiesByDate(Date startDate, Date endDate){
        List<Property> results = null;
        Session session = entityManager.unwrap(Session.class);

        try {
            Criteria cr = session.createCriteria(Property.class);
            Criteria crB = session.createCriteria(Property.class);

            cr.createAlias("bookings", "bookingAlias");

            Criterion checkIfExistingBookingDatesBeforeQuery = Restrictions.not(Restrictions.and(Restrictions.lt("bookingAlias.startDate", startDate), Restrictions.lt("bookingAlias.endDate", startDate)));
            Criterion checkIfExistingBookingDatesAfterQuery = Restrictions.not(Restrictions.and(Restrictions.gt("bookingAlias.startDate", endDate), Restrictions.gt("bookingAlias.endDate", endDate)));

            cr.add(checkIfExistingBookingDatesBeforeQuery);
            cr.add(checkIfExistingBookingDatesAfterQuery);

            cr.setProjection(Projections.property("id"));

            if (!cr.list().isEmpty()){
                crB.add(Restrictions.not(Restrictions.in("id", cr.list())));
            }

            results = crB.list();
        }
        catch (HibernateException ex) {
            ex.printStackTrace();
        }

        return  results;
    }




    @Transactional
    public List<Property> findAllPropertiesByDateAndCapacityAndPrice(Date startDate, Date endDate, int capacity, double price){
        List<Property> freeOnDates = findAvailablePropertiesByDate(startDate, endDate);
        List<Property> canBook = new ArrayList<Property>();

        for (Property property : freeOnDates) {
            if (property.getPrice() <= price) {
                canBook.add(property);
            }
        }
      
         for (Property property1 : canBook) {
            if (property1.getCapacity() < capacity) {
                canBook.remove(property1);
            }

        }

        return canBook;
    }

}
