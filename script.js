
// left side timeouthell
        window.onload = function(){
            //document.querySelector('.dot1').style.background = "red";

           document.querySelector('.triangle1').style.left = "5%";
           console.log('.style.left');
          document.querySelector('.triangle1').style.opacity = 1;
            setTimeout(function(){
                document.querySelector('.triangle2').style.right = "0%";
            //document.querySelector('.triangle2').style.transform = "rotate(360deg)";
            document.querySelector('.triangle2').style.opacity = 1;
            setTimeout(function(){
                getElStyle('.indigo-fone').opacity = 1;
                setTimeout(function(){
                   // getElStyle('.triangle2').opacity = 1;
                   // setTimeout(function(){
                        var line1Style = getElStyle('.line1');
                        line1Style.width = "555px";
                        line1Style.left = "5%";
                        line1Style.opacity = 0;
                        setTimeout(function(){
                            getElStyle('.line2').height = "555px";
                            getElStyle('.line2').opacity = "0";
                            setTimeout(function(){
                                var dot1Style = getElStyle('.dot-portfolio', '.dot-price');
                                dot1Style.width = "10px";
                                dot1Style.height = "10px";
                                //dot1Style.marginLeft = "-5px";
                                //dot1Style.marginTop = "-5px";
                                setTimeout(function(){
                                    getElStyle('.dot-portfolio a').opacity = 1;
                                },2000);
                           },2000); 
                        },1000);
                    },1000);
                },1000);/*after h2 apperance*/
          },1000); /*after tri1 apperance*/


            
        }
        function getElStyle(el){
            return document.querySelector(el).style;
        }