const form = document.getElementById('formCountry')

form.addEventListener('submit',(e)=>{
    e.preventDefault()

    const country = document.getElementById('country')
    validateInput(country.value,country)
})

const validateInput = (text,country)=>{
    const textError = document.getElementById('error')
    if(text == (null || undefined || "")){
        textError.textContent = 'Please enter a valid value'
        country.classList.add('border','border-danger')
    }else{
        textError.textContent = ""
        country.classList.remove('border','border-danger')

        form.submit()
    }
}