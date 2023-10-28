// დაწერე ფუნქცია expo, რომელიც იქნება
// რეკურსიული ფუნქცია და მიიღებს
// არგუმენტად:

// ა) ციფრს ბ) ხარისხს და გ) callback - ს და
// დააბრუნებს მიღებული ციფრის ხარისხს
// მაგალითად: 5 ხარისხად 3 - არის 125 (5 * 5 *5)

//callback is not necessary
const expo = (num, exp) => {
  if (exp === 0) {
    return 1;
  }
  return num * expo(num, exp - 1);
};

console.log(expo(4, 5)); //1024
console.log(expo(5, 5)); //3125
console.log(expo(5, 3)); //125
