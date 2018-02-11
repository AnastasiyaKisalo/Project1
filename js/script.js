'use strict';

(function() {
    var body = document.body;
    var burgerMenu = document.getElementsByClassName('b-menu')[0];
    var burgerContain = document.getElementsByClassName('b-container')[0];
    var burgerNav = document.getElementsByClassName('b-nav')[0];

    burgerMenu.addEventListener('click', function toggleClasses() {
        [body, burgerContain, burgerNav].forEach(function(el) {
            el.classList.toggle('open');
        });
    }, false);
})();


$(document).ready(function() {
            $(".my-input").keyup(function() {
                    var font = Number($(".my-input").val());
                   
                    $('#my-btn').click(function() {
                    	 console.log(font);
                    	 $('p').css({'font-size': font + 'px'});
                    });
		});
            $(".my-input2").keyup(function() {
                    var color = $(".my-input2").val();
                   
                    $('#my-btn2').click(function() {
                    	 console.log(color);
                    	 $('body').css({'background-color': color});
                    });
		});
     $('#my-btn3').click(function() {
     										var style = $("#myselect option:selected").text();
                    	 console.log(style);
                    	 $('p').css({'font-family': style});
                    });       
      $('#my-btn4').click(function() {
                    	 $('p:last-child').remove();
                    }); 
       $('.btn-header').click(function() {
                        console.log('hello');
                         $('.modal-backdrop').css("display","none");
                    }); 
});