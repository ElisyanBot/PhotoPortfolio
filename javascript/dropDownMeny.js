const DropDownMeny = document.querySelector('.dropDownMeny');
const ProjectBtn = document.querySelector('#Projeckts-Btn');
console.log(DropDownMeny, ProjectBtn);


/*makes the drop down meny show up*/
ProjectBtn.addEventListener('mouseover', function(){

   DropDownMeny.style.display = 'flex';

    ProjectBtn.addEventListener('mouseout', function(){
        DropDownMeny.style.display = 'none';
    });
});


/* makes the nav drop meny stay out when hovering over it */
DropDownMeny.addEventListener('mouseover', function(){
    DropDownMeny.style.display = 'flex';

     DropDownMeny.addEventListener('mouseout', function(){
         DropDownMeny.style.display = 'none';
     });
 });