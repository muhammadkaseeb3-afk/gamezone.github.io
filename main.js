const imageSets = [
    [
        "assets/img/gta1.jpg",
        "assets/img/gta2.jpg",
        "assets/img/gta3.jpg",
        "assets/img/gta4.jpg",
        "assets/img/gta5.jpg"
    ],
    [
        "assets/img/gta6.jpg",
        "assets/img/gta7.jpg",
        "assets/img/gta8.jpg",
        "assets/img/gta9.jpg",
        "assets/img/gta10.jpg"
    ]
];

const gallery = document.getElementById("gallery");
const dots = document.querySelectorAll(".dot");

function showSet(index){
    gallery.innerHTML = "";

    imageSets[index].forEach(src=>{
        const img = document.createElement("img");
        img.src = src;
        img.loading = "eager";   // 🔥 blur delay remove
        gallery.appendChild(img);
    });

    dots.forEach(d=>d.classList.remove("active"));
    dots[index].classList.add("active");
}

showSet(0);


<script>
document.addEventListener("DOMContentLoaded", function(){

  window.openCommentSlide = function(){
    document.getElementById("commentSlide").style.left = "0";
  }

  window.closeCommentSlide = function(){
    document.getElementById("commentSlide").style.left = "100%";
  }

});
</script>
