// ✅ Write code to return the the number of vowels in `str`

var vowelCount = function (str) {
      var lowerCaseStr = str.toLowerCase();

      var splitStr = lowerCaseStr.split('');
     
      var vowels = 'aeiou';
      var vowelCountArr = 0;

      for (var i = 0; i < splitStr.length; i++) {
            if (vowels.includes(splitStr[i])) { // checks the vowel str agains each letter in the splitStr array.
                  vowelCountArr++;
            }
      }
      console.log(vowelCountArr);
      return vowelCountArr;
};
