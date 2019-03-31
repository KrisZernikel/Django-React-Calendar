window.addEventListener('load', function () {
    let username = '';
    let password = '';

    function test_input(data) {
        let value = data.trim();
        value = encodeURIComponent(value);
        return value;
    }

    function login_submit() {
        let login = document.getElementById('login-form');
        login.method = 'post';
        login.action = '';
        login.submit();
    }

    document.getElementById('login-btn').addEventListener('click', function () {
        username = test_input(document.forms['login-form']['username'].value);
        password = test_input(document.forms['login-form']['password'].value);
        if (username !== '' && password !== '') {
            login_submit();
        }
    });
});
