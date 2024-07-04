import _ from 'lodash';
import './styles.css';
import Icon from './media/inside-cook.png';

const myImage = new Image();
myImage.src = Icon;

function insertHeader(){

}

function insertImage() {
    const element = document.createElement('div');
 
    
    element.appendChild(myImage);
    

return element
}

function insertText(){
    const paragraph = document.createElement('div')
    paragraph.classList.add('.hello')
    paragraph.textContent = 'This restaurant is where Thorfinn from vinland saga would eat'
   return paragraph
}

document.body.appendChild(insertImage());
document.body.appendChild(insertText());

console.log('Hello god')
//$ npx webpack --watch