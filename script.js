let tg = window.Telegram.WebApp;

function sendData() {
    let data = {
        name: tg.initDataUnsafe.user.first_name
    };

    fetch("https://your-python-server.com/api", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => alert(data.message));
}
