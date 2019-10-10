window.addEventListener("load", init);
let $ = document.getElementById;

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
    createEducation(obj["education"]);
    createWorkExp(obj["work-experience"]);
    createSkills(obj["skills"]);
    createExtra(obj["extra"]);
}

function createPresentation(presentation) {
    let imgEl = $("");
    let nameEl = $("");
    let ageEl = $("");
    let titleEl = $("");
    let cityEl = $("");
    let countryEl = $("");
    let languageEl = $("");
    let summaryEl = $("");

    imgEl.src = presentation["image"];
    nameEl.textContent = presentation["name"];

}

function createContactInfo() {
    let emailEl =  $("");
    let phoneEl =  $("");
    let linksEl =  $("");
}

function createEducation() {
    let educationList = $("");
}

function createWorkExp() {
    let workplaceList = $("");
}

function createSkills() {
    let skills = $("");
}

function createExtra() {
    let extraList = $("");
}