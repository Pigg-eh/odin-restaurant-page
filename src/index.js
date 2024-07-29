import _, { forEach } from 'lodash';
import './styles.css';
import {insertHome} from './home.js'

console.log(insertHome)

insertHome()



addTabListeners()
function addTabListeners(){

    function clearContent(){
        let contentChildren = document.querySelectorAll('div#content *')

        contentChildren.forEach(node => {
            node.remove()
        })
    }

    let buttons = document.querySelectorAll('nav button')

    buttons.forEach(button => {
        button.addEventListener('click', () =>{
            clearContent()
        }) 
    });
}


console.log('Hello god')
//$ npx webpack --watch