var questions = $('.gender-title').length;
var total=0;
var avg=0;
var cpt=0;
$('.answer').on('click',function(){
    if($(this).parent().find('.selected').length > 0){
        total -=$(this).parent().find('.selected').data('value');
        $(this).parent().find('.selected').removeClass('selected');
        cpt -= 1
    }
    $(this).addClass('selected');
    total += $(this).data('value');
    cpt += 1

    console.log(total);

})
function Submit() {
    avg=total/7;
    if(cpt >= 7){
        if(avg< 1.2){
        document.getElementById("quizz").innerHTML=('<div class="aba"><div class="container"><span class="title"> your result : </span> <br> <br>'+"<b> your score is : </b>" + total + " <br> <br> <p> you are not jumpy, search our articles and contact us to get more informations about your actual situation  </p><br><br>"+'<p align="right"><font color="#eb6a56">thanks for doing our test :)</font> <br></p></div></div>');
        return true;}
        else{
            if(avg<2){
                document.getElementById("quizz").innerHTML=('<div class="aba"><div class="container"><span class="title"> your result : </span> <br> <br>'+"<b> your score is : </b>" + total +"you have GAD: Generalized Anxiety Disorder, for more infomations you can see our article about types of anxiety <br><br>"+'<p align="right"><font color="#eb6a56">thanks for doing our test :)</font><br></p></div></div>');
                return true;	
            }
            else{
                document.getElementById("quizz").innerHTML=('<div class="aba"><div class="container"><span class="title"> your result : </span> <br> <br>'+"<b> your score is : </b>" + total +"<br><br> you have <b>OCD </b> : Obsessive Compulsive Disorder, for more infomations you can see our article about types of anxiety<br><br>"+'<p align="right"><font color="#eb6a56">thanks for doing our test :)</font> <br></p></div></div>');
                return true;
            }
        }
    }
    else{
        alert('you should answer all questions');
        return false
    }
}
 