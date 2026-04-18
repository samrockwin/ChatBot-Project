function handleClick(){
  const change =document.querySelector('.js-button').textContent
  if(change === 'click'){
    document.querySelector('.js-button').textContent = 'clicked'
  }else{
    document.querySelector('.js-button').textContent = 'click'
  }
}

// const butt = document.querySelector('.but');
// const text = document.querySelector('.js-button');


// butt.addEventListener('click', function(){
//   text.textContent = 
//   text.textContent === 'Click ' ? ' Clicked ' : 'Click ';
// })