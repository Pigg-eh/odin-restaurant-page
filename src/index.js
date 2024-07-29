import _, { forEach } from 'lodash';
import './styles.css';
import {insertHome} from './home.js'
import {insertMenu} from './menu.js'
import {insertAbout} from './about.js'

console.log(insertHome)

insertHome()




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

console.log('Hello god')
//$ npx webpack --watch