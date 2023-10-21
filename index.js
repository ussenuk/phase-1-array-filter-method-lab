// Code your solution here
// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];
const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'bobby',
      hometown: 'Tampa Bay' }
  ];

function findMatching(drivers, st="name"){

    const newList = [];
    const newList2 =[];


    for (const driver of drivers){

        if (driver === st){

            newList.push(st);

        } else if (driver.toLowerCase() === st.toLowerCase()){


            newList.push(driver);
            
          }

        //   return newList;
        
    }

       return newList;      

};

// const input = "letter";
// const fuzzyMatch = drivers.filter(driver => driver.startsWith(input));

function fuzzyMatch (drivers, input="letter"){

    const newList = [];

    for (const driver of drivers){

        if (driver.startsWith(input)){
            newList.push(driver);
        }

    }
    return newList;
};



function matchName(drivers, st="name"){

    const newList = []

    for (const element of drivers){
        if (element.name === st){

            newList.push(element);

        }
    }
    return newList;

}

// const bobbyusers = matchName (drivers, function (element){
//     return element.name === "Bobby";
// });

