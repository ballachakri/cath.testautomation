package utils;

import GlobalUtils.BaseUIPageObject;

import java.util.Random;

/**
 * Method for generating random number
 */
public class GenerateRandomNumber {
    public static int getRandomNumber(int maxValue) {
        Random random = new Random();
        int randomNumber=Math.abs(random.nextInt(maxValue));

         if(randomNumber<=0 && randomNumber>=maxValue) {
             return 1;
         }
         else
             return randomNumber;
    }
}
