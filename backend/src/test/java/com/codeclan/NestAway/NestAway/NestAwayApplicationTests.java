package com.codeclan.NestAway.NestAway;

import com.codeclan.NestAway.NestAway.models.Booking;
import com.codeclan.NestAway.NestAway.models.Customer;
import com.codeclan.NestAway.NestAway.models.Property;
import com.codeclan.NestAway.NestAway.models.RatingType;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.format.DateTimeParseException;
import java.util.Date;
import java.util.TimeZone;

import static org.junit.Assert.assertThat;
import static org.junit.matchers.JUnitMatchers.containsString;

@RunWith(SpringRunner.class)
@SpringBootTest
public class NestAwayApplicationTests {

	@Test
	public void contextLoads() {
	}

	@Test
	public void whenSerializingDateWithJackson_thenSerializedToTimestamp()
			throws JsonProcessingException, DateTimeParseException, ParseException {

		SimpleDateFormat df = new SimpleDateFormat("dd-MM-yyyy");
		df.setTimeZone(TimeZone.getTimeZone("UTC"));

		String stringToParse = "01-02-2019";
		String stringToParse2 = "01-02-2019";

		Date date = df.parse(stringToParse);
		Date date2 = df.parse(stringToParse2);

		Customer customer2 = new Customer("Borna", "Maticic");
		Property property3 = new Property("House", "50a Barn Terrace", 4, 80, RatingType.FOUR, "https://images.adsttc.com/media/images/59a4/c624/b22e/389d/3e00/02a3/newsletter/MHA.JR_201708_038.jpg?1503970808");

		Booking event = new Booking(300, customer2, property3, date, date2);

		ObjectMapper mapper = new ObjectMapper();
		String result = mapper.writeValueAsString(event);

		assertThat(result, containsString(stringToParse));

	}

}

