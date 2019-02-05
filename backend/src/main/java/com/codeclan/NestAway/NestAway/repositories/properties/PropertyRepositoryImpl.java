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
<<<<<<< HEAD
            cr.add(Restrictions.between("bookingAlias.startDate", startDate, endDate));
            cr.add(Restrictions.between("bookingAlias.endDate", startDate, endDate));
=======
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
    public List<Property> findAllPropertiesByCapacityAndPrice(int capacity, double price){
        List<Property> results = null;
        Session session = entityManager.unwrap(Session.class);

        try {
            Criteria cr = session.createCriteria(Property.class);
//            cr.createAlias("property", "propertyAlias");
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
    public List<Property> getAllPropertiesByDate(Date startDate, Date endDate){
        List<Property> properties = null;
        Session session = entityManager.unwrap(Session.class);
>>>>>>> 2d9c6be51a1cc06c14c13493e077a2709adcd956

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

<<<<<<< HEAD
            Criterion checkStartDateOfExistingBooking = Restrictions.not(Restrictions.between("bookingAlias.startDate", startDate, endDate));
            Criterion checkEndDateOfExistingBooking = Restrictions.not(Restrictions.between("bookingAlias.endDate", startDate, endDate));
            Criterion checkIfQueryBetweenExistingBookingDates =
                    Restrictions.not(Restrictions.and(Restrictions.gt("bookingAlias.startDate", startDate), Restrictions.lt("bookingAlias.endDate", endDate)));

            cr.add(checkStartDateOfExistingBooking);
            cr.add(checkEndDateOfExistingBooking);
            cr.add(checkIfQueryBetweenExistingBookingDates);
=======
//            Criterion checkStartDateOfExistingBooking = Restrictions.not(Restrictions.between("bookingAlias.startDate", startDate, endDate));
//            Criterion checkEndDateOfExistingBooking = Restrictions.not(Restrictions.between("bookingAlias.endDate", startDate, endDate));
            Criterion checkIfExistingBookingDatesBeforeQuery = Restrictions.not(Restrictions.and(Restrictions.lt("bookingAlias.startDate", startDate), Restrictions.lt("bookingAlias.endDate", startDate)));
            Criterion checkIfExistingBookingDatesAfterQuery = Restrictions.not(Restrictions.and(Restrictions.gt("bookingAlias.startDate", endDate), Restrictions.gt("bookingAlias.endDate", endDate)));
//            Criterion propertyHasNoBookings = Restrictions.isEmpty("bookings");
                    //cr.booking.size == 0

//            cr.add(checkStartDateOfExistingBooking);
//            cr.add(checkEndDateOfExistingBooking);
            cr.add(checkIfExistingBookingDatesBeforeQuery);
            cr.add(checkIfExistingBookingDatesAfterQuery);
<<<<<<< HEAD
//            cr.add(propertyHasNoBookings);
=======
>>>>>>> a591a725ae0d793827d7f0d3ea162bc2c801ed54
>>>>>>> 2d9c6be51a1cc06c14c13493e077a2709adcd956

            cr.setProjection(Projections.property("id"));

            if (!cr.list().isEmpty()){
                crB.add(Restrictions.in("id", cr.list()));
            }

            results = crB.list();
        }
        catch (HibernateException ex) {
            ex.printStackTrace();
        }

        return results;
    }


<<<<<<< HEAD
    @Transactional
    public List<Property>

    take results from above
            filter through all properties
            return the properties whos id do not = these properties id

    then filter by capacity, price
=======


>>>>>>> 2d9c6be51a1cc06c14c13493e077a2709adcd956


}
