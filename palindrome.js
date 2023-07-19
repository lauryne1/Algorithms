

function isPalindrome(char) {
   
    let debut = 0;
    let fin = char.length - 1;
    

    while (debut < fin) {
        // if (!char[debut].match(/[a-z0-9]/i)) {
        //     debut++;
        //     continue;
        // }
        // if (!char[fin].match(/[a-z0-9]/i)) {
        //     fin--;
        //     continue;
        // }
        if (char[debut] !== char[fin]) {
            return false;
        }
        debut++;
        fin--;
    }

    return true;
}
console.log(isPalindrome('My age is 0, 0 si ega ym'))


console.log(isPalindrome("eye")) // should return true.
console.log(isPalindrome("_eye")) // should return true.
console.log(isPalindrome("race car")) // should return true.
console.log(isPalindrome("not a isPalindrome")) // should return false.
console.log(isPalindrome("A man, a plan, a canal. Panama") )// should return true.
console.log(isPalindrome("never odd or even")) // should return true.
console.log(isPalindrome("nope")) // should return false.
console.log(isPalindrome("almostomla")) // should return false.
console.log(isPalindrome("My age is 0, 0 si ega ym.")) // should return true.
console.log(isPalindrome("1 eye for of 1 eye.") )// should return false.
console.log(isPalindrome("0_0 (: /-\ :) 0-0")) // should return true.
console.log(isPalindrome("five|\_/|four")) // should return false.