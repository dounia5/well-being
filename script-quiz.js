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
					        document.getElementById("quizz").innerHTML=('<div class="aba"><div class="container"><span class="title"> your result : </span> <br> <br>'+"<b> your score is : </b>" + total + " <br> <br> <p> you are not depressed, have fun enjoy your life </p><br><br>"+'<br><a href="mental_disorder.html" align="right">learn more ...</a>'+'<p align="right"><font color="#eb6a56">thanks for doing our test :)</font> <br></p></div></div>');
					return true;}
					else{
						if(avg<2){
							document.getElementById("quizz").innerHTML=('<div class="aba"><div class="container"><span class="title"> your result : </span> <br> <br>'+"<b> your score is : </b>" + total +"<br><br> you have <br>MDD</b>: Major Depression Disorder, fom more infomation you can see our article about deprission and consult a therapist<br><br>"+'<br><a href="mental_disorder.html" align="right">learn more ...</a>'+'<p align="right"><font color="#eb6a56">thanks for doing our test :)</font> <br></p></div></div>');
					        return true;	
						}
						else{
							document.getElementById("quizz").innerHTML=('<div class="aba"><div class="container"><span class="title"> your result : </span> <br> <br>'+"<b> your score is : </b>" + total +"<br><br> you have <b>PDD </b> : Persistent Depression Disorder, fom more infomation you can see our article about deprission and consult a therapist<br><br>"+'<br><a href="mental_disorder.html" align="right">learn more ...</a>'+'<p align="right"><font color="#eb6a56">thanks for doing our test :)</font> <br></p></div></div>');
					        return true;
						}
					}
				}
				else{
					alert('you should answer all questions');
					return false
				}
			}
			 