let thbin = document.getElementById("thbin");
let butSerch = document.getElementById("butserch");
let subbtn;
$(document).ready(() => {
    serchofname("").then(() => {
        $(".sworts").fadeOut(500)
        $("body").css("overflow", "visible")

    })
})

function openNav() {
    $(".navesM").animate({
        left: 0
    }, 500)
    $(".header-icon").removeClass("fa-align-justify");
    $(".header-icon").addClass("fa-x");
    for (let i = 0; i < 5; i++) {
        $(".links li").eq(i).animate({
            top: 0
        }, (i + 5) * 100)
    }
}

function closeNav() {
    let boxWidth = $(".navesM .colnav").outerWidth()
    $(".navesM").animate({
        left: -boxWidth
    }, 400)

    $(".header-icon").addClass("fa-align-justify");
    $(".header-icon").removeClass("fa-x");


    $(".links li").animate({
        top: 300
    }, 400)
}
closeNav()
$(".navesM i.header-icon").click(() => {
    if ($(".navesM").css("left") == "0px") {
        closeNav()
    } else if($(".navesM").css("left") != "0px") {
        openNav()
    }
})
function mealout(vol) {
    let cartoona = "";
    for (let i = 0; i < vol.length; i++) {
        cartoona += `
        <div class="col-md-3">
                <div onclick="sornmof('${vol[i].idMeal}')" class="meal position-relative overflow-hidden rounded-2 pointer-click">
                    <img class="w-100" src="${vol[i].strMealThumb}" alt="" srcset="">
                    <div class="the-meal position-absolute d-flex align-items-center justify-content-center  text-black p-3">
                        <h3>${vol[i].strMeal}</h3>
                    </div>
                </div>
        </div>
        `
    }
    thbin.innerHTML = cartoona
}
async function Categoriesbob() {
    thbin.innerHTML = ""
    $(".swortsoflayer").fadeIn(200)
    butSerch.innerHTML = "";
    let colabi = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    colabi = await colabi.json()
    Categoriesout(colabi.categories)
    $(".swortsoflayer").fadeOut(200)
}
function Categoriesout(vol1) {
    let cartoona = "";
    for (let i = 0; i < vol1.length; i++) {
        cartoona += `
        <div class="col-md-3">
                <div onclick="cocmeal('${vol1[i].strCategory}')" class="meal  position-relative overflow-hidden rounded-2 pointer-click">
                    <img class="w-100" src="${vol1[i].strCategoryThumb}" alt="" srcset="">
                    <div class="the-meal position-absolute text-center text-black p-3">
                        <h3>${vol1[i].strCategory}</h3>
                        <p>${vol1[i].strCategoryDescription.split(" ").slice(0,20).join(" ")}</p>
                    </div>
                </div>
        </div>
        `
    }

    thbin.innerHTML = cartoona
}
async function magmoha() {
    thbin.innerHTML = ""
    $(".swortsoflayer").fadeIn(200)
    butSerch.innerHTML = "";
    let respone = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    respone = await respone.json()
    magmohaout(respone.meals)
    $(".swortsoflayer").fadeOut(200)

}
function magmohaout(vol2) {
    let cartoona = "";
    for (let i = 0; i < vol2.length; i++) {
        cartoona += `
        <div class="col-md-3">
                <div onclick="magmohaof('${vol2[i].strArea}')" class="rounded-2 text-center pointer-click">
                        <i class="fa-solid fa-house-laptop fa-4x"></i>
                        <h3>${vol2[i].strArea}</h3>
                </div>
        </div>
        `
    }
    thbin.innerHTML = cartoona
}
async function blolb(Ingredients) {
    thbin.innerHTML = ""
    $(".swortsoflayer").fadeIn(200)
    butSerch.innerHTML = "";
    let respone = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list${Ingredients}`)
    respone = await respone.json()
    blolbout(respone.meals.slice(0, 20))
    $(".swortsoflayer").fadeOut(200)
}
function blolbout(vol3) {
    let cartoona = "";
    for (let i = 0; i < vol3.length; i++) {
        cartoona += `
        <div class="col-md-3">
                <div onclick="blolbof('${vol3[i].strIngredient}')" class="rounded-2 text-center pointer-click">
                        <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                        <h3>${vol3[i].strIngredient}</h3>
                        <p>${vol3[i].strDescription.split(" ").slice(0,20).join(" ")}</p>
                </div>
        </div>
        `
    }
    thbin.innerHTML = cartoona
}
async function cocmeal(v1) {
    thbin.innerHTML = ""
    $(".swortsoflayer").fadeIn(200)
    let colabi = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${v1}`)
    colabi = await colabi.json()
    mealout(colabi.meals.slice(0, 20))
    $(".swortsoflayer").fadeOut(200)
}
async function magmohaof(v2) {
    thbin.innerHTML = ""
    $(".swortsoflayer").fadeIn(200)
    let colabi = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${v2}`)
    colabi = await colabi.json()
    mealout(colabi.meals.slice(0, 20))
    $(".swortsoflayer").fadeOut(200)
}
async function blolbof(v3) {
    thbin.innerHTML = ""
    $(".swortsoflayer").fadeIn(200)
    let colabi = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${v3}`)
    colabi = await colabi.json()
    mealout(colabi.meals.slice(0, 20))
    $(".swortsoflayer").fadeOut(200)
}
async function sornmof(v4) {
    closeNav()
    thbin.innerHTML = ""
    $(".swortsoflayer").fadeIn(300)

    butSerch.innerHTML = "";
    let respone = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${v4}`);
    respone = await respone.json();

    Detailsmeal(respone.meals[0])
    $(".swortsoflayer").fadeOut(300)

}
function Detailsmeal(v5) {
    butSerch.innerHTML = "";
    let ingredients = ``
    for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
            ingredients += `<li class="alert alert-info m-2 p-1">${v5[`strMeasure${i}`]} ${v5[`strIngredient${i}`]}</li>`
        }
    }
    let tags = meal.strTags?.split(",")
    if (!tags) tags = []
    let tagsStr = ''
    for (let i = 0; i < tags.length; i++) {
        tagsStr += `
        <li class="alert alert-danger m-2 p-1">${tags[i]}</li>`
    }
    let cartoona = `
    <div class="col-md-4">
                <img class="w-100 rounded-3" src="${meal.strMealThumb}"
                    alt="">
                    <h2>${meal.strMeal}</h2>
            </div>
            <div class="col-md-8">
                <h2>Instructions</h2>
                <p>${meal.strInstructions}</p>
                <h3><span class="fw-bolder">Area : </span>${meal.strArea}</h3>
                <h3><span class="fw-bolder">Category : </span>${meal.strCategory}</h3>
                <h3>Recipes :</h3>
                <ul class="list-unstyled d-flex g-3 flex-wrap">
                    ${ingredients}
                </ul>

                <h3>Tags :</h3>
                <ul class="list-unstyled d-flex g-3 flex-wrap">
                    ${tagsStr}
                </ul>

                <a target="_blank" href="${meal.strSource}" class="btn btn-success">Source</a>
                <a target="_blank" href="${meal.strYoutube}" class="btn btn-danger">Youtube</a>
            </div>`

            thbin.innerHTML = cartoona
}
function Searchoff() {
    butSerch.innerHTML = `
    <div class="row py-4 ">
        <div class="col-md-6 ">
            <input onkeyup="serchofname(this.value)" class="form-control bg-white text-dark " type="text" placeholder="Search By Name">
        </div>
        <div class="col-md-6">
            <input onkeyup="searchlet1(this.value)" maxlength="1" class="form-control bg-white  text-dark"    type="text" placeholder="Search By First Letter">
        </div>
    </div>`

    thbin.innerHTML = ""
}
async function serchofname(term) {
    closeNav()
    thbin.innerHTML = ""
    $(".swortsoflayer").fadeIn(200)
    let colabi = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
    colabi = await colabi.json()
    colabi.meals ? mealout(colabi.meals) : mealout([])
    $(".swortsoflayer").fadeOut(200)
}
async function searchlet1(term) {
    closeNav()
    thbin.innerHTML = ""
    $(".swortsoflayer").fadeIn(300)
    term == "" ? term = "a" : "";
    let colabi = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${term}`)
    colabi = await colabi.json()
    colabi.meals ? mealout(colabi.meals) : mealout([])
    $(".swortsoflayer").fadeOut(300)
}
function discont() {
    thbin.innerHTML = `<div class="contact sojkkkd-flex justify-content-center align-items-center">
    <div class="container w-75 text-center">
        <div class="row g-4">
            <div class="col-md-6">
                <input id="namees11" onkeyup="invalid()" type="text" class="form-control" placeholder="Enter Your Name">
                <div id="nameAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Special characters and numbers not allowed
                </div>
            </div>
            <div class="col-md-6">
                <input id="emailaco" onkeyup="invalid()" type="email" class="form-control " placeholder="Enter Your Email">
                <div id="emailAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Email not valid *exemple@yyy.zzz
                </div>
            </div>
            <div class="col-md-6">
                <input id="phonenum" onkeyup="invalid()" type="text" class="form-control " placeholder="Enter Your Phone">
                <div id="phoneAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid Phone Number
                </div>
            </div>
            <div class="col-md-6">
                <input id="agees" onkeyup="invalid()" type="number" class="form-control " placeholder="Enter Your Age">
                <div id="ageAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid age
                </div>
            </div>
            <div class="col-md-6">
                <input  id="passworddd" onkeyup="invalid()" type="password" class="form-control " placeholder="Enter Your Password">
                <div id="passwordAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid password *Minimum eight characters, at least one letter and one number:*
                </div>
            </div>
            <div class="col-md-6">
                <input  id="rrepasswordd" onkeyup="invalid()" type="password" class="form-control " placeholder="Repassword">
                <div id="repasswordAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid repassword 
                </div>
            </div>
        </div>
        <button id="subbtn" disabled class="btn btn-outline-danger px-2 mt-3">Submit</button>
    </div>
</div> `
    subbtn = document.getElementById("subbtn")

    document.getElementById("namees11").addEventListener("focus", () => {
        namees11nop = true
    })

    document.getElementById("emailaco").addEventListener("focus", () => {
        emailaconop = true
    })

    document.getElementById("phonenum").addEventListener("focus", () => {
        phonenumnop = true
    })

    document.getElementById("agees").addEventListener("focus", () => {
        ageesnop = true
    })

    document.getElementById("passworddd").addEventListener("focus", () => {
        passwordddnop = true
    })

    document.getElementById("rrepasswordd").addEventListener("focus", () => {
        rrepassworddnop = true
    })
}
let namees11nop = false;
let emailaconop = false;
let phonenumnop = false;
let ageesnop = false;
let passwordddnop = false;
let repassworddnop = false;
function invalid() {
    if (namees11nop) {
        if (namevalid()) {
            document.getElementById("nameAlert").classList.replace("d-block", "d-none")

        } else {
            document.getElementById("nameAlert").classList.replace("d-none", "d-block")

        }
    }
    if (emailaconop) {

        if (emailvalid()) {
            document.getElementById("emailAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("emailAlert").classList.replace("d-none", "d-block")

        }
    }

    if (phonenumnop) {
        if (phonevalid()) {
            document.getElementById("phoneAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("phoneAlert").classList.replace("d-none", "d-block")

        }
    }

    if (ageesnop) {
        if (agevalid()) {
            document.getElementById("ageAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("ageAlert").classList.replace("d-none", "d-block")

        }
    }

    if (passwordddnop) {
        if (passwordvalid()) {
            document.getElementById("passwordAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("passwordAlert").classList.replace("d-none", "d-block")

        }
    }
    if (repassworddnop) {
        if (repasswordvalid()) {
            document.getElementById("repasswordAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("repasswordAlert").classList.replace("d-none", "d-block")

        }
    }
    if (namevalid() && 
       emailvalid() &&
        phonevalid() &&
        agevalid() &&
        passwordvalid() &&
        repasswordvalid()) {
            subbtn.removeAttribute("disabled")
    } else {
        subbtn.setAttribute("disabled", true)
    }
}
// هنا انا خد الفلديشن زي الموقع بالظبط
function namevalid() {
    return (/^[a-zA-Z ]+$/.test(document.getElementById("namees11").value))
}
function emailvalid() {
    return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.getElementById("emailaco").value))
}
function phonevalid() {
    return (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(document.getElementById("phonenum").value))
}
function agevalid() {
    return (/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(document.getElementById("agees").value))
}
function passwordvalid() {
    return (/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(document.getElementById("passworddd").value))
}
function repasswordvalid() {
    return document.getElementById("rrepasswordd").value == document.getElementById("passworddd").value
}