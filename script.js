 // left side timeouthell========================================
        window.onload = function(){
            document.querySelector('.triangle1').style.left = "100%";
                  document.querySelector('.triangle1').style.opacity = 1;                
                    setTimeout(function(){
                        document.querySelector('.triangle1').style.left = "5%";
                        setTimeout(function(){
                        var line1Style = getElStyle('.line1');
                        line1Style.width = "555px";
                        line1Style.left = "5%";
                        line1Style.opacity = "0";
                        setTimeout(function(){
                            getElStyle('.line2').height = "555px";
                            //getElStyle('.line2').opacity = "0";
                            setTimeout(function(){
                                var dotPortStyle = getElStyle('.dot-portfolio');
                                dotPortStyle.width = "10px";
                                dotPortStyle.height = "10px"; 
                                    getElStyle('.dot-portfolio a').opacity = 1;
                                    setTimeout(function(){
                                    var dotPrsStyle = getElStyle('.dot-price');
                                        dotPrsStyle.width = "10px";
                                        dotPrsStyle.height = "10px"; 
                                                getElStyle('.dot-price a').opacity = 1;
                                                    setTimeout(function(){
                                                        getElStyle('.dot-contacts').width = "10px";
                                                        getElStyle('.dot-contacts').height = "10px";                                                            
                                                            getElStyle('.dot-contacts a').opacity = 1;
                                },1000);
                           },1000); 
                        },1000);
                    },100);
                },100);/*after h2 apperance*/
          },1000); /*after tri1 apperance*/
        //},1000);
    //},1000);


// right side timeouthell============================================
 document.querySelector('.triangle2').style.right = "0%";   
    document.querySelector('.triangle2').style.opacity = 1;
           setTimeout(function(){
                getElStyle('.triangle2').right = "0%";
                setTimeout(function(){
                getElStyle('.indigo-fone').opacity = 1;
                setTimeout(function(){
                var line3Style = getElStyle('.line3');
                    line3Style.width = "555px";
                    line3Style.right = "5%";
                    line3Style.opacity = "0";
                    setTimeout(function(){
                        getElStyle('.line4').height = "355px";
                        setTimeout(function(){
                             getElStyle('.dot-reviews').width = "10px";
                              getElStyle('.dot-reviews').height = "10px";                                                            
                                 getElStyle('.dot-reviews a').opacity = 1;
                   },1000);
                },1000); 
            },1000);
        },1000);
     },1000);
//},1000);

//pentagon========================================================
document.querySelector('.pentagon img').style.transform = "rotate(720deg)";
document.querySelector('.pentagon img').style.opacity = 0;
    setTimeout(function(){        
        document.querySelector('.pentagon').style.bottom = "10%";
        document.querySelector('.pentagon img').style.opacity = 1;
        document.querySelector('.pentagon img').style.transform = "rotate(7200deg)";
        },1000);
}
 
document.querySelector('img').addEventListener('click', openImageWindow, false);

        function getElStyle(el){
            return document.querySelector(el).style;
        }