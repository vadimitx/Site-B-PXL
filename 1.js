// right side timeouthell
            document.querySelector('.triangle2').style.right = "0%";
            //document.querySelector('.triangle2').style.transform = "rotate(360deg)";
            document.querySelector('.triangle2').style.opacity = 1;
          //  setTimeout(function(){
              //  getElStyle('.triangle2 h2').opacity = 1;
               // setTimeout(function(){
                    var line1Style = getElStyle('.line1');
                    line1Style.width = "555px";
                    line1Style.left = "5%";
                    setTimeout(function(){
                        getElStyle('.line2').height = "355px";
                        setTimeout(function(){
                            //var dot1Style = getElStyle('.dot1');
                            dot1Style.width = "10px";
                            dot1Style.height = "10px";
                            dot1Style.marginLeft = "-5px";
                            dot1Style.marginTop = "-5px";
                            setTimeout(function(){
                                getElStyle('.dot1 a').opacity = 1;
                            },1000);
                            
                        },1000);
                    },1000);
               // },1000);/*after h2 apperance*/
           // },1000); /*after tri1 apperance*/