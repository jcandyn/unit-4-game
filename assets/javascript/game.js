// var characters  = {
//      spongebob = {
//         name : "spongebob",
//         picture : "spongebobs.jpg",
//         hp : 120
//     },
//      sandy = {
//         name : "sandy",
//         picture : "sandy.jpg",
//         hp: 180

//     },
//      plankton = {
//         name : "plankton",
//         picture : "plankton.jpg",
//         hp : 160
//     },
//      patrick = {
//         name : "patrick",
//         picture : "patrick.jpeg",
//         hp: 100
//     }
// }



attack = 8
defense = 25
$(document).ready(function(event) {
$(".pic").on("click", function() {
    alert($(this).attr('hp')) 
  $('#first-row').remove();
});

if ($('#spongebob').data('clicked')) {
    alert("hi")
//     $('#enemies').html("<img src='../images/" +
//    $('#sandy').attr('name') + "jpg" +
//     "'>")

}

});

function enemiesMove () {
    {
       
}

// function attack() {
// for (i=0; i<20; i++) {
// attack+=8}
// console.log(attack)
// }
// attack();
}
