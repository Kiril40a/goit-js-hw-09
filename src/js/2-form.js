let formData = {
    email: "",
    message: ""
}
function initPage() {
    const storageData = window.localStorage.getItem("feedback-form-state");
    
    if (storageData) {
        formData = JSON.parse(storageData);
        if (formData.email != "") {
            document.querySelector("input[name='email']").value = formData.email;
        }
        if (formData.message != "") {
            document.querySelector("textarea[name='message']").value = formData.message;
        }
    }
}

window.onload = initPage;


document.querySelector(".feedback-form").addEventListener("input", (e) => {
    if (e.target.name === "email") {
        formData.email = e.target.value;
        window.localStorage.setItem("feedback-form-state", JSON.stringify(formData))
        
    } else if (e.target.name === "message") {
        formData.message = e.target.value;
        window.localStorage.setItem("feedback-form-state", JSON.stringify(formData))
    }
    
})

document.querySelector(".feedback-form").addEventListener("submit", (e) => {
    e.preventDefault();
    if (e.target.elements.email.value === "" || e.target.elements.message.value === "") {
        alert("Fill please all fields");
    } else {
        console.log(formData);
        localStorage.clear();
        
        formData.email = "";
        formData.message = "";
        e.target.elements.email.value = "";
        e.target.elements.message.value = "";
    }
})