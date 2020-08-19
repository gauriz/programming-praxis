/** A sentence S is given, composed of words separated by spaces. Each word consists of lowercase and uppercase letters only.

We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.)

The rules of Goat Latin are as follows:

If a word begins with a vowel (a, e, i, o, or u), append "ma" to the end of the word.
For example, the word 'apple' becomes 'applema'.
 
If a word begins with a consonant (i.e. not a vowel), remove the first letter and append it to the end, then add "ma".
For example, the word "goat" becomes "oatgma".
 
Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
For example, the first word gets "a" added to the end, the second word gets "aa" added to the end and so on.
Return the final sentence representing the conversion from S to Goat Latin. 

 

Example 1:

Input: "I speak Goat Latin"
Output: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
Example 2:

Input: "The quick brown fox jumped over the lazy dog"
Output: "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa" 


Find running code at : https://stackblitz.com/edit/gauriz-typescript-qf5e2x?file=index.ts

**/


const vowels = {
    'a' : 1,
    'e' : 1,
    'i' : 1,
    'o' : 1,
    'u' : 1
  };
  
  function checkVowel(letter) {
    if(letter.toLowerCase() in vowels) return true;
    else return false;
  }
  
  function translate() {
    let words = sentence.split(' ');
    let finalSentence = '';
    words.forEach((word,index) => {
      if(checkVowel(word[0])) {
       finalSentence += `${word}ma${'a'.repeat(index + 1)} `;
      } else {
        finalSentence += `${word.substring(1)}${word[0]}ma${'a'.repeat(index + 1)} `
      }
    });
    return finalSentence;
  }
  
  const sentence = 'I speak Goat Latin';
  console.log(translate());