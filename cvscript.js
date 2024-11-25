
window.onload = function(){
    var cvobject
    console.log("yahya this is loaded")
    this.document.querySelector("#preview").setAttribute("src",this.localStorage.getItem("imageData"));
    console.log("there is the error 1")
    cvobject = JSON.parse(localStorage.getItem("cv"))
    console.log("this is the error 2")
    console.log( JSON.parse(localStorage.getItem("cv")))
    console.log(cvobject)


    addExperience(cvobject.jobTitle.length);
    addSchooles(cvobject.schoolesDegree.length);
    addSkills(cvobject.skills.length);
    addLanguage(cvobject.languages.length);
    addHobby(cvobject.hobbies.length);
function addExperience(length){
    console.log(length)

    for(let i = 0; i < length; i++){
        let cont = `
           <p class="job_name">${cvobject.jobTitle[i]}</p>
            <div class="company">
                <p class="company_name">company: ${cvobject.companyName[i]}</p>
                <p class="job_start_year">from&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${cvobject.jobStartDate[i]}</p>
                <p class="job_end_year">to&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${cvobject.jobEndDate[i]}</p>
            </div>`
        document.querySelector(".experince").innerHTML +=(cont)
    }
}

function addSchooles(length){
    for(let i = 0; i <length; i++){
        let cont = `
          <p class="schoole_degree">${cvobject.schoolesDegree[i]}</p>
            <div class="schoole">
                <p class="schoole_name">schoole: ${cvobject.schoolesName[i]}</p>
                <p class="start_year">from&nbsp;${cvobject.schoolesStartDate[i]}</p>
                <p class="end_year">to&nbsp;${cvobject.schoolesEndDate[i]}</p>
            </div>
        `
        document.querySelector(".formation").innerHTML += (cont)
    }
}

function addSkills(length){
    for(let i = 0; i < length; i++){
        let cont = `
        <li>${cvobject.skills[i]}</li>
        `
        document.querySelector(".skillUl").innerHTML += (cont)
    }
}

function addLanguage(length){
    for(let i = 0; i < length; i++){
        let cont = `
        <li>${cvobject.languages[i]}</li>
        `
        document.querySelector(".languageUl").innerHTML += (cont)
    }
}

function addHobby(length){
    for(let i = 0; i < length; i++){
        let cont = `
        <li>${cvobject.hobbies[i]}</li>
        `
        document.querySelector(".hobbyUl").innerHTML += (cont)
    }
}
document.querySelector(".intro").innerHTML = cvobject.intro
document.querySelector(".AGE").innerHTML =  `${cvobject.age} years old`
document.querySelector(".ADDRESS").innerHTML = cvobject.address
document.querySelector(".PHONE").innerHTML = cvobject.phone
document.querySelector(".EMAIL").innerHTML = cvobject.email
document.querySelector(".name").innerHTML =  cvobject.fname

document.querySelector(".gg").addEventListener("click", function(){
    var elemnt = document.querySelector(".cont");
    console.log(elemnt)
    
    html2pdf().from(elemnt).save()     
})
}
document.querySelector(".did").onclick = function(){
    localStorage.clear()  
    history.back()
}


