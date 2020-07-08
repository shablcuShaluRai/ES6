
 ## Nullish Coalescing Operator

 ES2020 has Introduce new concept called as Nullish Coalescing Operator,  which only allows the default when the value is null or undefined


      let person = {
        profile: {
          name: "",
          age: 0
        }
      }

      or 

      let person = {
        profile: {
          name,
          age: 0
        }
      };

we follow the below syntax

how it evaluate this: first it check for the path: whether person >>profile >> name has any value , if not then log the shablcuShaluRai
                   
      console.log('>>>name>>', person.profile.name || "shablcuShaluRai")
      console.log('>>>age>>', person.profile.age || 24)


  ### Output:

    >>>name>> shablcuShaluRai
 
    >>>age>> 24


  #### Nullish Coalescing Operator
 
 Instead of double pipes we can use the double question marks operator to be a bit more type strict, which only allows the default when the value is null or undefine

  console.log('>>>name>>>', person.profile.name ?? "shablcuShaluRai")


  ### Output:

    >>>name>> ""
 
    >>>age>>  0


Let's make small change in the object:


      let person = {
        profile: {
          name: null,  
          age: 0
        }
      }

      or 


      let person = {
        profile: {
          name: undefined,  
          age: 0
        }
      }
  ### Output:

 Nullish Coalescing Operator and OR Operator, both will return the same value/output

     >>>name>> shablcuShaluRai

     >>>age>>> 0


### Conclusion:

   OR Operator output:

    If key will be empty string, null and undefined , it will allows the default value.


  Nullish Coalescing Operator: 

    if key will be null or undefined then , it allows the dafault value.
    if key will be empty string or only key name is there then it returns the key value. like : empty string