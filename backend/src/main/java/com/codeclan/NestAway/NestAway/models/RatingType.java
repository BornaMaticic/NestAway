package com.codeclan.NestAway.NestAway.models;

public enum RatingType {

    ZERO(1),
    ONE(2),
    TWO(3),
    THREE(4),
    FOUR(5),
    FIVE(6);


    private final int rating;

    RatingType(int rating) {
        this.rating = rating;
    }

    public int getRating() {
        return rating;
    }
}
