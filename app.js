const dogs = document.querySelector('.dogimg');
const openbtn = document.querySelector('.open');
const closebtn = document.querySelector('.close');
const circle = document.querySelector('.circle');
const wrapper = document.querySelector('.wrap');
const navbar = document.querySelector('.navbar');
const headingshow = document.querySelector('.article-heading');
const textAuto = document.querySelector('.text-auto');

let text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore repellendus nostrum harum, quis cupiditate molestiae, voluptates quam beatae odit autem incidunt voluptatibus? Provident, suscipit. Iusto facere dolorum quis asperiores illo earum vel sit modi dicta nulla? Est, odio quibusdam quidem earum magni et placeat voluptate officia non inventore eaque optio dolores accusantium similique repudiandae alias temporibus quae sequi quam quia sapiente! Dignissimos esse possimus numquam laborum nemo minus, sequi doloribus porro quia, fugiat aperiam optio dolores? Nemo quia adipisci reiciendis provident? Architecto molestias qui a ut placeat, dolorum similique fuga facilis modi suscipit perferendis blanditiis temporibus iusto repudiandae ipsam officiis.'
let index = 1;

setInterval(writeText, 115)

function writeText(){
    textAuto.innerText = text.slice(0, index);
    index++;
    if(index > text.length){
        index=1;
    }
}

function slideIn(){
    const triggerBottom = (window.innerHeight / 4) * 3.6;
    const triggerTop = dogs.getBoundingClientRect().top;
    console.log(triggerBottom);
    console.log(triggerTop);
    if(triggerTop < triggerBottom) {
        dogs.classList.add('show');
        headingshow.classList.remove('article-heading-show');
    }   else {
        dogs.classList.remove('show');
        headingshow.classList.add('article-heading-show');
    }
}

function slideIn2(){
    headingshow.classList.add('article-heading-show');
}

window.addEventListener('load', function(){
    headingshow.classList.add('article-heading-show');
})
window.addEventListener('scroll', slideIn);

openbtn.addEventListener('click', function(){
    circle.classList.add('open-btn');
    wrapper.classList.add('wrap-nav');
    navbar.classList.add('navbar-show');
})

closebtn.addEventListener('click', function(){
    circle.classList.remove('open-btn');
    wrapper.classList.remove('wrap-nav');
    navbar.classList.remove('navbar-show');
    slideIn2() 
})

slideIn();
writeText();

