import { forEach } from 'lodash';
import Icon from './media/menuImg.png';

    const myImage = new Image();
    myImage.src = Icon;

    const insertMenu = function(){
        const element = document.querySelector('div#content');

        const title = document.createElement('h2')
        const headline = document.createElement('h3')
        const list = document.createElement('ul')
        const listItem1 = document.createElement('ul')
        const listItem2 = document.createElement('ul')
        const listItem3 = document.createElement('ul')
        const listItem4 = document.createElement('ul')

       
        
        title.textContent = 'Menu'
        title.classList.add('title')

        headline.textContent = 'Skal!'
        headline.classList.add('headline')

        listItem1.textContent = 'Mead ....................$1'
        listItem1.classList.add('list')

        listItem2.textContent = 'Meat ....................$2'
        listItem2.classList.add('list')

        listItem3.textContent = 'Meals ....................$3'
        listItem3.classList.add('list')

        listItem4.textContent = 'Malarky ....................$0'
        listItem4.classList.add('list')

        let domArray = [title, myImage, headline, list]

        domArray.forEach((item) => {
            element.appendChild(item)
        })

        const listNode = document.querySelector('div#content > ul')

        let listArray = [listItem1, listItem2, listItem3, listItem4]

        

        listArray.forEach((item) => {
            listNode.appendChild(item)
        })
        
        return domArray
    }



export {
    insertMenu
}

//$ npx webpack --watch