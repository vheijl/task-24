window.addEventListener("load", init);

async function init() {
    let json = await fetchData();
    createElements(json);
}

async function fetchData() {
    const response = await fetch('/data');
    const myJson = await response.json();
    return myJson;
}

function createElements(obj) {
    createPresentation(obj["presentation"]);
    createContactInfo(obj["contact-information"]);
    // createEducation(obj["education"]);
    // createWorkExp(obj["work-experience"]);
    // createSkills(obj["skills"]);
    // createExtra(obj["extra"]);
}

function createPresentation(presentation) {
    let imgEl = document.getElementById("pic");
    let nameEl = document.getElementById("name");
    let ageEl = document.getElementById("age");
    let titleEl = document.getElementById("title");
    let cityEl = document.getElementById("city");
    let languageEl = document.getElementById("lang");
    let summaryEl = document.getElementById("sum");

    imgEl.src = presentation["image"];
    nameEl.innerHTML += presentation["name"];
    ageEl.innerHTML  += presentation["age"] + " years old";
    titleEl.innerHTML += presentation["title"];
    cityEl.innerHTML += presentation["city"] + ", " + presentation["country"];
    languageEl.appendChild(createLanguageList(presentation["language"]));
    summaryEl.innerHTML += presentation["summary"];

}

function createLanguageList(arr) {
    let ul = document.createElement("ul");
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement("li");
        let em = document.createElement("em");
        li.innerHTML = arr[i]["language"] + " - ";
        em.innerHTML = arr[i]["language-level"];
        li.appendChild(em);
        ul.appendChild(li);
    }
    return ul;
}

function createContactInfo(contactInfo) {
    let emailEl =  document.getElementById("mail");
    let phoneEl =  document.getElementById("phone");
    let linksEl =  document.getElementById("links");

    emailEl.innerHTML = contactInfo["email"];
    phoneEl.innerHTML = contactInfo["phone"];
    linksEl.appendChild(createLinksList(contactInfo["links"]));
}

function createLinksList(arr) {
    let div = document.createElement("div");
    for (let i = 0; i < arr.length; i++) {
        let link = document.createElement("a");
        let icon = document.createElement("i");
        link.href = arr[i]["url"];
        link.classList.add("btn", "btn-outline-warning");
        icon.classList.add(...arr[i]["icon-class"].split(" "));
        link.appendChild(icon);
        div.appendChild(link);
    }
    return div;
}

// function createEducation(education) {
//     let educationList = document.getElementById("");
// }

// function createWorkExp(workExp) {
//     let workplaceList = document.getElementById("");
// }

// function createSkills(skills) {
//     let skills = document.getElementById("");
// }

// function createExtra(extra) {
//     let extraList = document.getElementById("");
// }
