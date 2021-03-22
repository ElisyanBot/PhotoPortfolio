const gridimageThree = document.querySelector('.grid-three');
const gridimageFive = document.querySelector('.grid-five');
const gridimageSeven = document.querySelector('.grid-seven');
const gridNavButtons = document.querySelectorAll('.grid-navButton');


//item three in the gallery grid (landing-page)
gridimageThree.addEventListener('mouseover', function(){
    //make the btn drop down
    gridNavButtons[0].style.height = '100%';

     //when leaving the img/button it goes back to 25% height
    gridimageThree.addEventListener('mouseout', function(){
        gridNavButtons[0].style.height = '25%';
    });
});

//item Five in the gallery grid (landing-page)
gridimageFive.addEventListener('mouseover', function(){
    //make the btn drop down
   gridNavButtons[1].style.height = '100%';

    //when leaving the img/button it goes back to 25% height
   gridimageFive.addEventListener('mouseout', function(){
       gridNavButtons[1].style.height = '25%';
   });
});

//item  seven in the gallery grid (landing-page)
gridimageSeven.addEventListener('mouseover', function(){
    //make the btn drop down
    gridNavButtons[2].style.height = '100%';

    //when leaving the img/button it goes back to 25% height
    gridimageSeven.addEventListener('mouseout', function(){
        gridNavButtons[2].style.height = '25%';
    });
});




