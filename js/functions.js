var user_list = ["a", "b", "c"];
var password_list = ["a", "b", "c"];

function links_page() {
    window.addEventListener('click', function () {
        document.getElementById('active').innerHTML = "The page is currently active" +
            "<br>You already clicked on this page at least" +
            "<br>1 time";
        document.getElementById('img').style.visibility = 'hidden';
    });

    let users = '';

    let i = 0;
    while (i < user_list.length) {
        users += '<h2>'+user_list[i]+'</h2><br>';
        i++;
    }

    document.getElementById('list_user').innerHTML = users;
}

function login() {
    let arr = window.location.pathname.split("/");
    // arr.pop();
    let tmp = "";
    let i = 0;
    do {
        if (i < arr.length - 1)
            tmp += arr[i] + "/";
        i++;
    }
    while (i < arr.length);
    // alert(arr);
    let resultString = tmp;
    alert(resultString);
    document.getElementById('submit').addEventListener('click', function () {
        let check = document.getElementById('check').value;

        if (!(parseFloat(check)<6 && parseFloat(check)>5)){
            alert("enter right float number in the input field");
            return;
        }

        let email = document.getElementById('email').value;
        alert("email = " + email);
        let password = document.getElementById('password').value;
        alert("password = " + password);

        let success = false;

        for (i = 0; i < user_list.length; j++) {
            if (email === user_list[i]) {
                if (password === password_list[i]) {
                    success = true;
                    break;
                }
            }
        }


        if (success) {
            window.open(window.location.origin + resultString + "comments.html", "_top");
        } else {
            let i = Math.floor((Math.random() * 3) + 1);
            switch (i) {
                case 1:
                    alert("The password is incorrect.");
                    break;
                case 2:
                    alert("Your account is in ban");
                    break;
                default:
                    window.open(window.location.origin + resultString + "postregistration.html", "_top");
            }
        }
    });


}
function statistics() {
    let name = window.prompt("What's your name?", "User");
    // let element = document.getElementById('name');
    // element.innerText = "Hello, " +name;
    document.writeln("<h1>"+"Hello, "+name+", that is the admin page"+"</h1>");
}