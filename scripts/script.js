let emailCollectorForm = document.getElementById("Email-Collector")

emailCollectorForm.addEventListener('submit', event => {
    
    event.preventDefault()

    let ourFormData = new FormData(event.target)
                
    let userFirstName = ourFormData.get("firstName")
    let userMail = ourFormData.get("emailAddress")
    
    let updatedHtmlContent = `
        <h2>Congratulations, ${userFirstName}!</h2>

        <p>You're on your way to becoming a BBQ Master!</p>
        
        <p class="fine-print">You will get weekly BBQ tips sent to: <span>${userMail}</span></p>
    `
    let ourMainContent = document.getElementById("Main-Content")
    ourMainContent.innerHTML = updatedHtmlContent
    
})

