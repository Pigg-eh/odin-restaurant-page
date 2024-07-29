import _, { forEach } from 'lodash';
import './styles.css';
import {insertHome} from './home.js'

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
                    console.log('mune')
                    break;
                case 'insertAbout':
                    console.log('about')
                    break;
            }
           
        }) 
    });

    
}

addTabListeners()

console.log('Hello god')
//$ npx webpack --watch