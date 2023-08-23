// exercicio 1

$(document).ready(function(){
    $("#texto").hide();
    $("#exc1").click(function(){
      $("#texto").show();
    });
});

// exercicio 2

$(document).ready(function(){
    $("#exc2").click(function(){
      $(".nome").toggle();
    });
});

//exercicio 3

$(document).ready(function(){
    $(".sublista").hide();
    $(".lista").click(function(){
      $(".sublista").slideToggle();
    });
});

// exercicio 4

$(document).ready(function(){
    $("#exc4").click(function(){
        var name = $("#name").val();
        var address = $("#address").val();

        var errorname = "";
        var erroraddress = "";

        if(name.length < 5) {
            errorname += "O nome deve conter mais de 4 caracteres.";
        } else if(name.length > 40) {
            errorname += "O nome deve conter menos de 41 caracteres.";
        } else if (name.split(" ") >= 0) {
            errorname += "O nome não pode estar vazio."
        }

        if(address.split(" ").length < 2) {
            erroraddress += "O endereço não pode estar vazio e deve conter duas palavras";
        }

        $("#errorname").text(errorname).show("slow");
        $("#erroraddress").text(erroraddress).show("slow");

    })
})

//exercicio 5

$(document).ready(function() {
    var currentSlide = 0;
    var totalSlides = $('.carousel-container img').length;
    
    $('.btnNext').click(function() {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateSlide();
    });
    
    $('.btnPrev').click(function() {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      updateSlide();
    });
    
    function updateSlide() {
      $('.carousel-container img').hide();
      $('.carousel-container img:eq(' + currentSlide + ')').show();
    }
  });