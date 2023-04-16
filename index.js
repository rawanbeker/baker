import express from "express";
const app = express();

const students =[
    {
        "id" :1 ,
        "name" :"rawan",
        "city" : "Egypt"
    },
    {
        "id" :2 ,
        "name" :"salah",
        "city" : "tanta"
    },
    {
        "id" :3 ,
        "name" :"mohamed",
        "city" : "Egypt"
    }
   , {
        "id" :4 ,
        "name" :"yaya",
        "city" : "shibeen"
    }
    , {
        "id" :5 ,
        "name" :"raw",
        "city" : "albania"
    }
    , {
        "id" :4 ,
        "name" :"bery",
        "city" : "vienna"
    }
    , {
        "id" :4 ,
        "name" :"ahmed",
        "city" : "Belize"
    }
];
const studentFunction = (req,res) =>{
   
let output= "<ul style='list-style-type:square;text-align: center;width:100%'>";
output+="<h1 style='color:gray ;text-align: center'>" +"student_name"+"</h1>";

for(let i=0; i<students.length; i++){

    const student=students[i];
   
    output+="<li style= 'color:blue;text-align: center'>"+student.name +"</li>";
   
}

output +="</ui>";

    res.send(output);

}
app.get("/student",studentFunction);
app.listen(1404);