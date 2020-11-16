const searchURL = 'https://api.github.com/users/{username}/repos';



function displayResults(responseJson) {
    console.log(responseJson);
    $('.results-list').empty();
    for (let i = 0; i < responseJson.length; i++) {
        $('.results-list').append(
            `<li>
                <h3>` + responseJson[i].name + `</h3>
                <p><a href="` + responseJson[i].html_url + `"> repo link</a><p>
            </li>`
        )};
    $('.results').removeAttr('hidden');
}

function getUserRepos() {
    fetch('https://api.github.com/users/' + username + '/repos')
    .then(response => {
        if (response.ok) {
            return response.json()};
        throw new Error(response.statusText);
    })
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Something went wrong. Please try again!'));
}

function handleSubmitInput() {
    $('.form').submit(event => {
        event.preventDefault();
        username = $('.search').val();
        console.log(username);
        getUserRepos(username);
    })
}

$(handleSubmitInput());