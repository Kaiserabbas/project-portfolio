
// getting data from local storage
const jsonObject = localStorage.getItem("form");
// converting data from json to javascript object
const object = JSON.parse(jsonObject);

// iterrating through javascript object using a for in loop and adding markup in the check.html
for (key in object) {
  const markupHtml = (
    <div>
      <p>Hello There</p>
      <p>
        ${key}: ${object[key]}
      </p>
    </div>
);
document.getElementById("form-data").innerHTML += markupHtml;
}

