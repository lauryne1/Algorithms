

function isPalindrome(char) {
   
    let debut = 0;
    let fin = char.length - 1;

    while (debut < fin) {
        if (!char[debut].match(/[a-z]/i)) {
            debut++;
            continue;
        }
        if (!char[fin].match(/[a-z]/i)) {
            fin--;
            continue;
        }
        if (char[debut] !== char[fin]) {
            return false;
        }
        debut++;
        fin--;
    }

    return true;
}
console.log(isPalindrome('My age is 0, 0 si ega ym'))