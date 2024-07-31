import _, { forEach } from 'lodash';
import './styles.css';
import {insertHome} from './home.js'
import {insertMenu} from './menu.js'
import {insertAbout} from './about.js'


console.log(insertHome)

insertHome()


export function openPage(evt, pageName) {
    // Declare all variables
    var i, tabcontent, tablinks;
    
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    evt.currentTarget.className += " active";
  }


function addTabListeners(){
     
    function switchTab(){
        let contentChildren = document.querySelectorAll('div#content *')
        
        contentChildren.forEach(node => {
            node.remove()
            
        })
    }

    let buttons = document.querySelectorAll('nav button')
    buttons.forEach(button => {

        button.addEventListener('click', (e) =>{
            switchTab()

            let pulledStr = e.target.getAttribute('data-function')
            
            switch(pulledStr) {
                case 'insertHome':
                    insertHome()
                    break;
                case 'insertMenu':
                    insertMenu()
                    break;
                case 'insertAbout':
                    insertAbout()
                    break;
            }
           
        }) 
    });
}

addTabListeners()

//$ npx webpack --watch