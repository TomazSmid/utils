export const UrlSafe64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';

/** Converts a base10 integer to base64 (any decimals are cut) */
export function toString64(int: number, chars = UrlSafe64): string {
    let str = chars[int & 63]; // 63 = Math.pow(2,6)-1 = binary'111111'

    if (int > 63) {
        str = toString64(int / 64) + str;  // Next 6 bits
    }

    return str;
}

/**
 *  Takes current millisecond and a randum number to create a unique ID
 * 
 *  @param randomChars Number of characters made randomly
 */
export function myGuid(randomChars = 4)
{
    return toString64(new Date().getTime()) // Current millisecond
        + toString64(Math.floor(Math.random() * Math.pow(64, randomChars))) // Random characters
        ;
}
