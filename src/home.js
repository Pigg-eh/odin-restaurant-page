import { forEach } from 'lodash';
import Icon from './media/outside.png';

    const myImage = new Image();
    myImage.src = Icon;

    const insertHome = function(){
        const element = document.querySelector('div#content');

        const title = document.createElement('h2')
        const headline = document.createElement('h3')
        const paragraph = document.createElement('div')

        title.textContent = 'Langheim'
        title.classList.add('title')

        headline.textContent = 'Skal!'
        headline.classList.add('headline')

        paragraph.textContent = 'GOOD DRINK! GOOD COMPANY! LONGINGLY GAZE AT THE SEA! WHAT MORE?!?!'
        paragraph.classList.add('paragraph')

        let domArray = [title,myImage, headline, paragraph]

        domArray.forEach((item) => {
            element.appendChild(item)
        })
        
        return domArray
    }



export {
    insertHome
}

//$ npx webpack --watch