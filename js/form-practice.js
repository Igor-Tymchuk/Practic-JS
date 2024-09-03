const formData = {
    confirm_password:"",
    email:"",
    firstname:"",
    gender:"",
    lastname:"",
    password:"",
    phone:"",
};
const form = document.querySelector(".registration-form");

if (localStorage.data) {
    const reserved = JSON.parse(localStorage.data);
    for (const key in reserved) {
        formData[key] = reserved[key];
        form[key].value = reserved[key];
    }
    console.log("reserved:", reserved)
    
    console.log("formData:", formData)
    }


const saveData = (event) => {
    event.preventDefault();
    const value = event.target.value;
    const name = event.target.name;
    formData[name] = value;
    const convert = JSON.stringify(formData);
    localStorage.setItem("data", convert);
}
form.addEventListener("input", saveData);