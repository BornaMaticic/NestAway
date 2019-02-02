package com.codeclan.NestAway.NestAway.models;

public enum RatingType {

    ONE(1),
    TWO(2),
    THREE(3),
    FOUR(4),
    FIVE(5);


    private final int rating;

    RatingType(int rating) {
        this.rating = rating;
    }

    public int getRating() {
        return rating;
    }
}
