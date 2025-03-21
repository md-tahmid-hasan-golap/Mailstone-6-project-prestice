//   display none this id
document.getElementById("navbar_section").style.display = "none";
document.getElementById("button_section").style.display = "none";
document.getElementById("child_text").style.display = "none";
document.getElementById("card_section").style.display = "none";
document.getElementById("question_section").style.display = "none";

// login id eventHandlar set

document.getElementById("login_button").addEventListener("click", function () {
  const userPassword = document.getElementById("user_password").value;

  const userName = document.getElementById("user_name").value;

  if (userName == "") {
    alert("nogin not successfull");
    return;
  }

  if (userPassword == "123456") {
    alert("goling successfull");
    document.getElementById("navbar_section").style.display = "flex";
    document.getElementById("button_section").style.display = "block";
    document.getElementById("child_text").style.display = "block";
    document.getElementById("question_section").style.display = "block";
    document.getElementById("Banner_section").style.display = "none";
    document.getElementById("card_section").style.display = "grid";
    return;
  }
});

// locout function


document.getElementById("logout").addEventListener("click", function () {
  document.getElementById("navbar_section").style.display = "none";
document.getElementById("button_section").style.display = "none";
document.getElementById("child_text").style.display = "none";
document.getElementById("card_section").style.display = "none";
document.getElementById("question_section").style.display = "none";
document.getElementById("Banner_section").style.display = "flex";
 
})


document.getElementById("Fau_button").addEventListener("click", function () {
    document.getElementById("question_section").scrollIntoView({behavior : "smooth"})
})

document.getElementById("Learn_Button").addEventListener("click", function () {
  document.getElementById("child_text").scrollIntoView({behavior : "smooth"})
})
// load catagori Selection

function loadCatagori() {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((data) => displayCatagori(data.data));
}

function displayCatagori(catagori) {
  // console.log(catagori)

  const buttonDainamic = document.getElementById("button_dianamic");

  for (let item of catagori) {
    // console.log(item)
    const p = document.createElement("p");
    p.innerHTML = `
        <button class = "btn text-blue-500 hover:text-white hover:bg-blue-500 bg-white"> <i class="fas fa-book-open"></i>Lesson - ${item.level_no}</button>
        `;
    buttonDainamic.appendChild(p);
  }
}

// load words function
function loadWords() {
  fetch("https://openapi.programming-hero.com/api/level/5")
    .then((res) => res.json())
    .then((data) => displayWords(data.data));
}

function displayWords(words) {
  // console.log(words)
  const cardSection = document.getElementById("card_section");

  for (let word of words) {
    // console.log(word)

    const div = document.createElement("div");
    div.innerHTML = `
         <div class=" bg-base-100  shadow-sm">

  <div class="p-5 hover:bg-blue-50 text-center">
    <h2 class="">${word.word}</h2>
    <p>Meaning /Pronounciation</p>
    <p>${word.meaning} /${word.pronunciation}</p>

    <div class="flex justify-between pt-5">
      
<button onclick="details()" class = "btn hover:bg-blue-100 bg-white">click</button>
<button class = "btn hover:bg-blue-100 bg-white">no click</button>
    </div>
  </div>
</div>
        `;
    cardSection.appendChild(div);
  }
}

function details (id) {
    fetch("https://openapi.programming-hero.com/api/word/${id}")
    .then((res) => res.json())
    .then((data) => displayDetails(data.data))
}

function displayDetails (detail){
    // console.log(detail)
    const modalSection = document.getElementById("detail_container").showModal()

}
details()
loadWords();
loadCatagori();

