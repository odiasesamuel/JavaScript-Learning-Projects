// Insatiating Github
const github = new Github;

// Insatiating ui
const ui = new UI

// Search input
const searchUser = document.getElementById('searchUser')

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value

    if(userText !== ''){
        // Make http call
        github.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not Found') {
                // Show alert
                ui.showAlert('User not found', 'alert alert-danger')
            } else {
                // Show the profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        })
    } else {
        // clear the profile
        ui.clearProfile()
    }
})