const $ = (id) => document.getElementById(id)
userID          = $('id')
userName        = $('name')
userExt         = $('ext')
userEmail       = $('email')
userDepartment  = $('department')
submitForm      = $('submit')
submitForm.addEventListener('click', (e) => {
    e.preventDefault()
    userID          = userID.value
    userName        = userName.value
    userExt         = userExt.value
    userEmail       = userEmail.value
    userDepartment  = userDepartment.value
    console.log(`ID: ${userID}\nName: ${userName}\nExtension: ${userExt}\nEmail: ${userEmail}\nDepartment: ${userDepartment}`)
});