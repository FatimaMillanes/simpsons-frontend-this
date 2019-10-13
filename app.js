const simpsonsname= document.getElementById('firstname');
const simpsonslastname =document.getElementById('lastname');
const simpsonsage =document.getElementById('age');


const simpsonsname2= document.getElementById('firstname2');
const simpsonslastname2 =document.getElementById('lastname2');
const simpsonsage2 =document.getElementById('age2');


const simpsonsname3= document.getElementById('firstname3');
const simpsonslastname3 =document.getElementById('lastname3');
const simpsonsage3 =document.getElementById('age3');

const simpsonsname4= document.getElementById('firstname4');
const simpsonslastname4 =document.getElementById('lastname4');
const simpsonsage4 =document.getElementById('age4');

const simpsonsname5= document.getElementById('firstname5');
const simpsonslastname5 =document.getElementById('lastname5');
const simpsonsage5 =document.getElementById('age5');

const simpsonsname6= document.getElementById('firstname6');
const simpsonslastname6 =document.getElementById('lastname6');
const simpsonsage6 =document.getElementById('age6');

const apiUrl="https://localhost:5001/simpsons/character";
const apiResponse=async ()=>{
    const response=await fetch(apiUrl);
    const data= await response.json();
    console.log(data);
  
    simpsonsname.innerText=data[0].firstName;
    simpsonslastname.innerText=data[0].lastName; 
    simpsonsage.innerText=data[0].age; 

    simpsonsname2.innerText=data[1].firstName;
    simpsonslastname2.innerText=data[1].lastName; 
    simpsonsage2.innerText=data[1].age; 

    simpsonsname3.innerText=data[2].firstName;
    simpsonslastname3.innerText=data[2].lastName; 
    simpsonsage3.innerText=data[2].age; 

    simpsonsname4.innerText=data[3].firstName;
    simpsonslastname4.innerText=data[3].lastName; 
    simpsonsage4.innerText=data[3].age; 

    simpsonsname5.innerText=data[4].firstName;
    simpsonslastname5.innerText=data[4].lastName; 
    simpsonsage5.innerText=data[4].age; 
    
    simpsonsname6.innerText=data[5].firstName;
    simpsonslastname6.innerText=data[5].lastName; 
    simpsonsage6.innerText=data[5].age; 
    
  
    
    

   
}

apiResponse();


/*
const simpsonsHTML = {
    firstName : document.getElementById('firstname'),
    lastName : document.getElementById('lastname'),
    age: document.getElementById('age')
}
*/
/*
let getSimpsonsData = async url =>{
    const response = await fetch(url);
    const simpsonsData = await response.json();
    return simpsonsData;
};

let getotherSimpsonsData = async ()=>{
    const response = await fetch(`${apiUrl}/0`);
    const simpsonsData = await response.json();
    const {firstname, lastname, age} = simpsonsData;
  
    simpsonsHTML.firstName.innerText = firstname;
    simpsonsHTML.lastName.innerText = lastname;
    simpsonsHTML.age.innerText = age;
    
    
};


getotherSimpsonsData();

*/











/*

var array1 = ['a', 'b', 'c'];

array1.forEach(function(element) {
  console.log(element);
});

let flag = 0;
    console.log(data);
    data.some(element =>{
        const simpsonsname = data.firstName;
        simpspnsname.innertext += `<h1 id ${theImg}></h1>`
        flag++;
        if(flag === 20){
            return element === element;
           
        }         
    });



*/







/*const simpsonsname2= document.getElementById('firstname2');
const simpsonslastname2 =document.getElementById('lastname2');
const simpsonsage2 =document.getElementById('age2');*/