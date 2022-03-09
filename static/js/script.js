// link
//   function openinvite() {
//   window.open('https://discord.com/oauth2/authorize?client_id=782642248416231436&scope=bot%20applications.commands&permissions=2151140424','_blank')
//   }
//   function opensupport() {
//     window.open('https://discord.gg/qDdkxyJvFp','_blank')
//     }
// loading

//     var preloader = document.getElementById("loading");

//     function myFunction(){
//         preloader.style.display = "none";
//     }

// $(document).ready(function(){

//     $('.counter').each(function(){

//         $(this).prop('counter',0).animate({

//             counter : $(this).text()

//         },{
//             duration : 3500,
//             easing : 'swing',
//             step : function (now){
//                 $(this).text(Math.ceil(now) + '+')
//             }

//         });

//     });
// });

// /
// function closeNav() {
//     document.getElementById("menu-slide").style.width = "0%";
// }
// async function user_1() {
//             let user = await DiscordFetcher("929091583679283283", {
//                 dynamic: true,
//                 size: 1024,
//                 format: "gif",
//                 format: "png",
//                 log: false,
//             });
//             document.getElementById("avatar-bot").src = user.avatar.url;
//             document.getElementById("username-bot").innerHTML = user.username
//         }
// user_1();

// google.charts.load('current', {'packages':['corechart']});
// google.charts.setOnLoadCallback(drawChart);

// function drawChart() {
//     var data = google.visualization.arrayToDataTable([
//     ['Year', 'Sales', 'Expenses'],
//     ['2013',  1000,      400],
//     ['2014',  1170,      460],
//     ['2015',  660,       1120],
//     ['2016',  1030,      540]
//     ]);

//     var options = {
//     title: 'Company Performance',
//     hAxis: {title: 'Year',  titleTextStyle: {color: 'rgb(39, 41, 52)'}},
//     vAxis: {minValue: 0}
//     };

//     var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
//     chart.draw(data, options);
// }

var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
})
}