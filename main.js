function loadJSON(file){
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok){
        resolve(response.json());
      }else{
        reject(new Error('error'));
      }
    })
  })
}


var newFile=loadJSON("main.json");
newFile.then(data=>{
  console.log(data);
  career(data.career);
  education(data.education);
  skills(data.skills)
})

var childtwo=document.querySelector(".childtwo");

function career(careerObj){
  var careerHeading=document.createElement("h2");
  careerHeading.textContent="Career Objective";
  childtwo.appendChild(careerHeading);
  var hr=document.createElement("hr");
  careerHeading.appendChild(hr);
  var careerP=document.createElement("p");
  careerP.textContent=careerObj.info;
  childtwo.appendChild(careerP);
}

function education(edu){
  var careerHeading=document.createElement("h2");
  careerHeading.textContent="Education Qualifictions";
  childtwo.appendChild(careerHeading);
  var hr=document.createElement("hr");
  childtwo.appendChild(hr);
  for(var i=0; i<edu.length; i++){
    var eduH3=document.createElement("h3");
    eduH3.textContent=edu[i].degree;
    childtwo.appendChild(eduH3);
    var eduUl=document.createElement("ul");
    var eduLi=document.createElement("li");
    eduLi.textContent=edu[i].institute;
    eduUl.appendChild(eduLi);
    childtwo.appendChild(eduUl);
  }
}

function skills(skillInfo){
  var careerHeading=document.createElement("h2");
  careerHeading.textContent="Technical Skills";
  childtwo.appendChild(careerHeading);
  var hr=document.createElement("hr");
  careerHeading.appendChild(hr);
  var skillTable=document.createElement("table");
  skillTable.border="1";
  childtwo.appendChild(skillTable);
  var tableData="";
  for(var i=0;i<skillInfo.length;i++){
    tableData+="<tr><td>"+skillInfo[i].title+"</td><td>"+skillInfo[i].info+"</td></tr>";
    }    skillTable.innerHTML=tableData;
  }

