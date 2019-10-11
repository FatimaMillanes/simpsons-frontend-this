const simpsonsname= document.getElementById('firstname');
const simpsonslastname =document.getElementById('lastname');
const simpsonsimage =document.getElementById('image');

const apiUrl="https://localhost:5001/simpsons/character/";

const apiResponse=async ()=>{
    const response=await fetch(apiUrl);
    const data= await response.json();
    console.log(data);

    simpsonsname.innerText=data[0].firstName;
    simpsonslastname.innerText=data[0].lastName;
    simpsonsimage.src=data[0].photo}

apiResponse();
