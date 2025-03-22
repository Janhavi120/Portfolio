document.addEventListener("DOMContentLoaded", function () {
    const typed = new Typed(".multiple-text", {
        strings: ["Python Developer", "Frontend Developer", "Backend Developer", "Web Designer"],
        typeSpeed: 90,
        backSpeed: 90,
        backDelay: 1200,
        loop: true
    });
});


    function downloadResume() {
        let link = document.createElement("a");
        link.href = "https://drive.google.com/uc?export=download&id=1nbBxw398-lnceyw6Hceaytold1Mlyl-_";
        link.download = "Janhavi Gupta Resume.pdf"; // Ensure correct filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }


    function sendEmail() {
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let subject = document.getElementById("subject").value;
        let message = document.getElementById("message").value;

        let mailtoLink = `mailto:janhavig1209@gmail.com?subject=${encodeURIComponent(subject)}&body=
        Name: ${encodeURIComponent(name)}
        Email: ${encodeURIComponent(email)}
        Phone: ${encodeURIComponent(phone)}
        
        Message: ${encodeURIComponent(message)}`;

        window.location.href = mailtoLink;
    }

function toggleContent(btn) {
    let hiddenContent = btn.previousElementSibling; 
    if (hiddenContent.style.display === "none" || hiddenContent.style.display === "") {
        hiddenContent.style.display = "block";
        btn.textContent = "Read Less";         
    } else {
        hiddenContent.style.display = "none";   
        btn.textContent = "Read More";        
    }
}