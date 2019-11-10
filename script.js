// left side timeouthell========================================
window.onload = function(){
document.querySelector('.triangle1').style.left = "100%";
document.querySelector('.triangle1').style.opacity = 1;                
setTimeout(function(){
    document.querySelector('.triangle1').style.left = "7%";
    setTimeout(function(){
        var line1Style = getElStyle('.line1');
        // line1Style.width = "560px";
        line1Style.width = "43%";
        line1Style.top = "222px";
        line1Style.left = "8%";
        line1Style.opacity = "1";
        
        var line3Style = getElStyle('.line3');
        // line3Style.width = "555px";
        line3Style.width = "42%";
        line3Style.top = "220px";
        line3Style.right = "10%";
        line3Style.opacity = "1";
        console.log(1);
        setTimeout(function(){
            getElStyle('.line2').height = "500px";
            getElStyle('.line4').height = "500px";
            console.log(2);
            setTimeout(addDotsStyles2,1000);
        },2000);

        // setTimeout(function(){
        //     setTimeout(function(){
        //         getElStyle('.line2').height = "48%";
        //         getElStyle('.line4').height = "48%";
        //         setTimeout(addDotsStyles2,1000);
        //     },1000);
        // },1000);
    },1000);
},1000);

// right side timeouthell============================================
document.querySelector('.triangle2').style.right = "0%";   
document.querySelector('.triangle2').style.opacity = 1;
setTimeout(function(){
    getElStyle('.triangle2').right = "0%";
    setTimeout(function(){
        getElStyle('.indigo-fone').opacity = 1;
        setTimeout(function(){
            getElStyle('.one-block').opacity = 1;
            setTimeout(function(){
                getElStyle('.two-block').opacity = 1;
                setTimeout(function(){
                    getElStyle('.btn-line').opacity = 1;
                    // var line3Style = getElStyle('.line3');
                    // // line3Style.width = "555px";
                    // line3Style.width = "45%";
                    // line3Style.top = "180px";
                    // line3Style.right = "6%";
                    // line3Style.opacity = "1";
                    // setTimeout(function(){
                    //     getElStyle('.line4').height = "300px";
                    //     setTimeout(function(){
                    //         getElStyle('.dot-reviews').width = "10px";
                    //         getElStyle('.dot-reviews').height = "10px";                                                            
                    //         getElStyle('.dot-reviews a').opacity = 1;
                    //     },1000);
                    // },1000); 
                },1000);
            },1000);
        },1000);
    },1000);
},1000);

//pentagon========================================================
document.querySelector('.pentagon img').style.transform = "rotate(360deg)";
document.querySelector('.pentagon img').style.opacity = 0;
setTimeout(function(){        
    document.querySelector('.pentagon').style.bottom = "5%";
    document.querySelector('.pentagon img').style.opacity = 1;
    document.querySelector('.pentagon img').style.transform = "rotate(1000deg)";

    var currentDeg = 0;
    setInterval(function(){
        currentDeg = currentDeg + 2; // currentDeg += 100;
        // document.querySelector('.pentagon').style.bottom = "10%";
        // document.querySelector('.pentagon img').style.opacity = 1;
        document.querySelector('.pentagon img').style.transform = "rotate("+currentDeg+"deg)";
    },50);
},1000);
    // var currentDeg = 0;
    // setInterval(function(){
    //     currentDeg = currentDeg + 1; // currentDeg += 100;
    //     document.querySelector('.pentagon').style.bottom = "10%";
    //     document.querySelector('.pentagon img').style.opacity = 1;
    //     document.querySelector('.pentagon img').style.transform = "rotate("+currentDeg+"deg)";
    // },10);


}
 
//document.querySelector('img').addEventListener('click', openImageWindow, false);
function getElStyle(el){
    return document.querySelector(el).style;
}

function addLineStyles(){
    getElStyle('.dot-portfolio').width = "20px";
    getElStyle('.dot-portfolio').height = "20px";                                                            
    getElStyle('.dot-portfolio a').opacity = 1;
    getElStyle('.dot-reviews').width = "20px";
    getElStyle('.dot-reviews').height = "20px";                                                            
    getElStyle('.dot-reviews a').opacity = 1;
}

function addDotsStyles(){
    var dotPrsStyle = getElStyle('.dot-price');
    dotPrsStyle.width = "20px";
    dotPrsStyle.height = "20px"; 
    getElStyle('.dot-price a').opacity = 1;
    setTimeout(addLineStyles,100);
}

function addDotsStyles2(){
    var dotPortStyle = getElStyle('.dot-contacts');//portfolio
    dotPortStyle.width = "20px";
    dotPortStyle.height = "20px"; 
    getElStyle('.dot-contacts a').opacity = 1;
    console.log(3);
    setTimeout(addDotsStyles,100); 
}

//resizeImg=====================================================

 // function resizeImg (img)
 //      {
 //        var resize = 150; // resize amount in percentage
 //        var origH  = 61;  // original image height
 //        var origW  = 250; // original image width
 //        var mouseX = event.x;
 //        var mouseY = event.y;
 //        var newH   = origH * (resize / 100);
 //        var newW   = origW * (resize / 100);

 //        // Set the new width and height
 //        img.style.height = newH;
 //        img.style.width  = newW;

 //        var c = img.parentNode;

 //        // Work out the new center
 //        c.scrollLeft = (mouseX * (resize / 100)) - (newW / 2) / 2;
 //        c.scrollTop  = (mouseY * (resize / 100)) - (newH / 2) / 2;
 //      }

// function expression============================================
// var expressionFunc = function(param) {
//     console.log(param);
//     return 'returned string';
// }

// console.log(expressionFunc('param string'));

// var ret = declarativeFunc(555);
// console.log(ret);

// function declarativeFunc(param) {
//     console.log(param);
//     return 'returned string';
// }

// sss = 2222;
// var badString = "Кот плохой";

// var cleared = clearStr(badString);
// console.log(cleared.toUpperCase());

// function clearStr(str) {
//     www = 4444;
//     var badPosition = str.indexOf('плохой');
//     var beforeBad = str.substr(0, badPosition);
//     var badLength = 'плохой'.length;
//     var afterBad = str.substr(badPosition + badLength);
//     return beforeBad + '&&&' + afterBad;

//     // return str.replace(/плохой/,'***');
// }



