class StringsAndTings {

    //@return string with identical contents, with each word individually in reverse order
    reverseString(str){
           let newString = "";
 
     
      for (let i = str.length - 1; i >= 0; i--) { 
          newString += str[i];
      }
      
      // Return the reversed string
      return newString; // "olleh"
    }
    
    // @return string with identical content, and the first character capitalized
    camelCase(str){
    return str.replace(/\W+(.)/g, function(match, chracter)
    {
            return chracter.toUpperCase();
    });
    }
    
    // @return string with identical contents, in reverse order, with first character capitalized
    reverseThenCamelCase(str){
      
        return this.camelCase(this.reverseString(str))
    }
    
   
   
   
    // @return string with identical contents excluding first and last character
    removeFirstAndLastCharacter(str){
        let newString = "";


        for(let i = 0; i< str.length; i++){ 
            if(i != 0 && i != str.length - 1){
               
                newString += str[i]; 
            }
        }
    
        return newString;
    }
    
   
   
    // @return string with identical characters, each with opposite casing
    invertCasing(str){
        let UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let LOWER = 'abcdefghijklmnopqrstuvwxyz';
        let result = [];
        
        for(let i=0; i<str.length; i++)
        {
            if(UPPER.indexOf(str[i]) !== -1)
            {
                result.push(str[i].toLowerCase());
            }

            else if(LOWER.indexOf(str[i]) !== -1)
            {
                result.push(str[i].toUpperCase());
            }

            else 
            {
                result.push(str[i]);
            }
        }

       
        return result.join('');    
    }
        
    }

    module.exports = StringsAndTings;
