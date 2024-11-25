// save as pdf methode
let btn = document.querySelector(".sub")
console.log(btn)

let inputs = document.querySelectorAll(".i")

btn.addEventListener("click", (e) => {
    let array = []
    let check = true
    inputs.forEach(function(input){
    return array.push(input.value)
})
  for(let i = 0; i < array.length; i++){
    if(array[i] === ""){
      check = false
    }
  }
  if(!check){
    alert("you have to fill all the inputs")
    console.log(array)
    e.preventDefault();
  }else{
    console.log("we did it its dorsnt count the img no more")
    localStorage.setItem("cv" ,)
  }
})

window.onload = () => {
  let inputs = document.querySelectorAll(".i");
  inputs.forEach((input) => {
    input.value = ""; 
  });
};




function addField(containerId, inputHtml) {
  const container = document.getElementById(containerId);
  // const currentFields = container.querySelectorAll("input").length;


  const newField = document.createElement("div");
  newField.innerHTML = inputHtml;
  container.appendChild(newField);
}

document.getElementById("addSchool").addEventListener("click", () => {
  addField(
    "schools-container",
    `
    <div class="school-fields">
          <input type="text" name="degree" class="degree i" placeholder="Degree" required>
          <input type="text" name="schoolName" class="schoolName i" placeholder="School Name" required>
          <input type="date" name="startDate" class="startDate i" placeholder="Start Date" required>
          <input type="date" name="endDate" class="endDate i" placeholder="End Date" required>
          <button class="remove">delete</button>
    </div>
    `,
  );
});

document.getElementById("addExperience").addEventListener("click", () => {
  addField(
    "experience-container",
    `
    <div class="experience-fields">
      <input type="text" name="jobTitle" class="jobTitle i" placeholder="Job Title" required>
      <input type="text" name="companyName" class="companyName i" placeholder="Company Name" required>
      <input type="date" name="jobStartDate" class="jobStartDate i" placeholder="Start Date" required>
      <input type="date" name="jobEndDate" class="jobEndDate i" placeholder="End Date" required>
      <button class="remove">delete</button>
    </div>
    `,
  );
});

document.getElementById("addSkill").addEventListener("click", () => {
  addField(
    "skills-container",
    `<input type="text" name="skills" class="skills i" placeholder="Skill" required>
    <button class="remove">delete</button>
    `
  );
});

document.getElementById("addLanguage").addEventListener("click", () => {
  addField(
    "languages-container",
    `<input type="text" name="languages" class="languages i" placeholder="Language" required>
    <button class="remove">delete</button>
    `,
  );
});

document.getElementById("addHobby").addEventListener("click", () => {
  addField(
    "hobbies-container",
    `<input type="text" name="hobbies" class="hobbies i" placeholder="Hobby" required>
    <button class="remove">delete</button>`,
    "You can only add up to 4 hobbies."
  );
});
let addButtons = document.querySelectorAll(".add")
console.log(addButtons);
addButtons.forEach((button) => {
  button.addEventListener("click", function(e){
   let deteltBtn = document.querySelectorAll(".remove")
   console.log(deteltBtn)
        deteltBtn.forEach((button) => {
        button.addEventListener("click", function(e){
          e.preventDefault();
          button.closest("div").remove()
        console.log("cklicked")
      })
    })
  })
})




//cv code start here
let btnsub = document.querySelector(".sub")
btnsub.onclick = function(){
  //exprince stuff
  let jobTitle = []
  let companyName = []
  let jobStartDate = []
  let jobEndDate = []

  //end exprince stuff
  let skills = []
  //schoole stuff
  let schoolesDegree = []
  let schoolesName = []
  let schoolesStartDate = []
  let schoolesEndDate = []
  //end of schoole stuff
  let languages = []
  let hobbies = []
  let fName = document.querySelector("#fullName").value
  let address = document.querySelector("#address").value
  let phone = document.querySelector("#phone").value
  let age = document.querySelector("#age").value
  let intro = document.querySelector("#introduction").value
  let email = document.querySelector("#email").value
  //geting schoole inputs
  document.querySelectorAll(".school-fields .degree").forEach((degree) => {
    return schoolesDegree.push(degree.value)
  })
  document.querySelectorAll(".school-fields .schoolName").forEach((name) => {
    return schoolesName.push(name.value)
  })
  document.querySelectorAll(".school-fields .startDate").forEach((start) => {
    return schoolesStartDate.push(start.value)
  })
  document.querySelectorAll(".school-fields .degree").forEach((end) => {
    return schoolesEndDate.push(end.value)
  })
 
 //geting exprience input
  document.querySelectorAll("#experience-container .jobTitle").forEach((title) =>{
    return jobTitle.push(title.value) 
  })

  document.querySelectorAll("#experience-container .companyName").forEach((company) =>{
    return companyName.push(company.value) 
  })

  document.querySelectorAll("#experience-container .jobStartDate").forEach((jstart) =>{
    console.log(jstart.value)
    return jobStartDate.push(jstart.value) 
  })

  document.querySelectorAll("#experience-container .jobEndDate").forEach((jend) =>{
    console.log(jend.value)
    return jobEndDate.push(jend.value) 
  })
 console.log(jobStartDate)
 console.log(jobEndDate)

  

  
  //geting skills inputs
  
  document.querySelectorAll(".skills").forEach((skill) =>{
    return skills.push(skill.value) 
  })
  //get languages inputs
  document.querySelectorAll(".languages").forEach((language) => {
    return languages.push(language.value)
  })
  //getting hobbies in an unput
  document.querySelectorAll(".hobbies").forEach((hobby) =>{
    return hobbies.push(hobby.value)
  }) 

  let cv = new CV(fName, address, phone, age, intro, schoolesDegree,schoolesName,schoolesStartDate,schoolesEndDate,jobTitle,companyName,jobStartDate,jobEndDate, skills, languages, hobbies, email)
  localStorage.setItem("cv", JSON.stringify(cv))
}
document.querySelector("#photo").addEventListener("change", function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.addEventListener("load", function() {
            localStorage.setItem("imageData", reader.result);
        });
        reader.readAsDataURL(file);
    }
});

class CV{
  constructor(name, address, phone, age, intro, schoolesDegree,schoolesName,schoolesStartDate,schoolesEndDate,jobTitle,companyName,jobStartDate,jobEndDate, skills, languages, hobbies, email){
    this.fname = name;
    this.address = address;
    this.phone = phone;
    this.age = age;
    this.intro = intro;
    this.schoolesDegree = schoolesDegree;
    this.schoolesName = schoolesName;
    this.schoolesStartDate = schoolesStartDate;
    this.schoolesEndDate = schoolesEndDate;
    this.jobTitle = jobTitle;
    this.companyName = companyName;
    this.jobStartDate = jobStartDate;
    this.jobEndDate = jobEndDate;
    this.skills = skills;
    this.languages = languages;
    this.hobbies = hobbies;
    this.email = email;
  }

}

