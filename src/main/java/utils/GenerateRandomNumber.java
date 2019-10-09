package utils;

import GlobalUtils.BaseUIPageObject;

import java.util.Random;

/**
 * Method for generating random number
 */
public class GenerateRandomNumber {
    public static int getRandomNumber(int maxValue) {
        Random random = new Random();
        return Math.abs(random.nextInt(maxValue));
    }
}
