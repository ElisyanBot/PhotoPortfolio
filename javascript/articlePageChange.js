/*this is for the about me section on the contact/about me page*/

//Gets the border header on the about me page
    const Header = document.getElementsByClassName('article-header')[0];
    console.log(Header);

//gets all the diffrent articles
    const AboutSection = document.getElementById('AboutMe-Article');
    const WorkSection = document.getElementById('Work-Article');
    const EducationSection = document.getElementById('Education-Article');
    console.log(AboutSection, WorkSection, EducationSection);

//gets all the a tag/btns
    const AboutMeBtn = document.getElementById('AboutBtn');
    const WorkBtn = document.getElementById('WorkBtn');
    const EducationBtn = document.getElementById('EducationBtn');
    console.log(AboutMeBtn, WorkBtn, EducationBtn);

/* ------------------- about me btn functions ---------------*/

    //showing Education article text on click
    AboutMeBtn.addEventListener('click', function(){
        //changes the header
        Header.innerText = 'ABOUT ME';

            //Article text change
            if(AboutSection.style.display === 'none'){
                //makes about text visible
                AboutSection.style.display = 'flex';
                //hides the rest
                EducationSection.style.display = 'none';
                WorkSection.style.display = 'none';

            }
            else{
                //makes the text stay if clicked again
                AboutSection.style.display = 'flex';
            }
    });

/* ----------------------  Work btn functions -----------------*/

    //showing Work article text on click
        WorkBtn.addEventListener('click', function(){

            //changes the header
            Header.innerText = 'WORK';

                //Article text change
                if(WorkSection.style.display === 'none'){
                    WorkSection.style.display = 'flex'
                    AboutSection.style.display = 'none'
                    EducationSection.style.display = 'none';

                }
                else{
                    //makes the text stay if clicked again
                    WorkSection.style.display = 'flex'
                }
        });

/* ----------------------  eductaion btn functions -----------------*/

    //showing Education article text on click
        EducationBtn.addEventListener('click', function(){

            //changes the header
            Header.innerText = 'EDUCATION';
            //Article text change
            if(EducationSection.style.display === 'none'){
                //makes education text visible
                EducationSection.style.display = 'flex';
                //hides the rest
                AboutSection.style.display = 'none';
                WorkSection.style.display = 'none';

            }
            else{
                //makes the text stay if clicked again
                EducationSection.style.display = 'flex';
            }
        });