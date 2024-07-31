import { forEach } from 'lodash';
import Icon from './media/aboutImg.png';

    const myImage = new Image();
    myImage.src = Icon;

    const insertAbout = function(){
        const element = document.querySelector('div#content');

        element.classList.add("tabcontent");

        const title = document.createElement('h2')
        const headline = document.createElement('h3')
        const paragraph = document.createElement('div')

        title.textContent = 'Langheim'
        title.classList.add('title')

        headline.textContent = 'Contact Number: 123478901234732'
        headline.classList.add('headline')

        paragraph.textContent = 'We are Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sed dolorem ex consequuntur, maiores ratione nesciunt rerum aliquam provident deserunt illum, ipsum quisquam, fuga inventore iusto vel perspiciatis! Quia, pariatur.'
        paragraph.classList.add('paragraph')

        let domArray = [title,myImage, headline, paragraph]

        domArray.forEach((item) => {
            element.appendChild(item)
        })
        
        return domArray
    }



export {
    insertAbout
}

//$ npx webpack --watch