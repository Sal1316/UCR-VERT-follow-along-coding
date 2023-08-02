// ✅ Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function (str) {
      var lowerCaseStr = str.toLowerCase();
      var splitStr = lowerCaseStr.split('');
      var splitStrJoined = splitStr.join('');//joined

      var reverseStr = splitStr.reverse();
      var revRevStr = reverseStr.join(''); // join and compare


      if (splitStrJoined === revRevStr) {
            return true;
      } else {
            return false;
      }

};

// palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.