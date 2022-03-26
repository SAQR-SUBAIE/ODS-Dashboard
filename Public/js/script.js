function closeNav() {
    document.getElementById("menu-slide").style.width = "0%";
}
async function user_1() {
            let user = await DiscordFetcher("929091583679283283", {
                dynamic: true,
                size: 1024,
                format: "gif",
                format: "png",
                log: false,
            });
            document.getElementById("avatar-1").src = user.avatar.url;
            document.getElementById("username-1").innerHTML = user.username
        }
user_1();

async function user_2() {
    let user = await DiscordFetcher("929091583679283283", {
        dynamic: true,
        size: 1024,
        format: "gif",
        format: "png",
        log: false,
    });
    document.getElementById("avatar-2").src = user.avatar.url;
    document.getElementById("username-2").innerHTML = user.username
}
user_2();

async function user_3() {
    let user = await DiscordFetcher("929091583679283283", {
        dynamic: true,
        size: 1024,
        format: "gif",
        format: "png",
        log: false,
    });
    document.getElementById("avatar-3").src = user.avatar.url;
    document.getElementById("username-3").innerHTML = user.username
}
user_3();

var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
})
}


window.addEventListener('load', (event) => {
    var preloader = document.getElementById("loading");
    preloader.style.display = "none";
});