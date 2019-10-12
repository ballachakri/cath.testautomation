package utils;

import GlobalUtils.BaseUIPageObject;

import java.util.Random;

/**
 * Method for generating random number
 */
public class GenerateRandomNumber {
    public static int getRandomNumber(int maxValue) {
        Random random = new Random();
        int randomNumber=random.nextInt(maxValue);

        System.out.println("Random Number : "+ randomNumber);
         if(randomNumber<=0 && randomNumber>=maxValue) {
             return 1;
         }
         else
             return randomNumber;
    }
}
