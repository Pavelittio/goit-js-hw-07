import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const makeImgGalaryRender = ({preview, original, description}) => {
return `
<div class="gallery__item">
<a class="gallery__link" href"${original}">
<img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</div>`
};
const imgGalary = galleryItems.map(makeImgGalaryRender).join(``);
const divGalaryRef = document.querySelector(`.gallery`);
divGalaryRef.innerHTML = imgGalary;


divGalaryRef.addEventListener(`click`, onTagContainerClick);

function onTagContainerClick (event){
  event.preventDefault();
  if (event.target.nodeName !== `IMG`)
  return;
  const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600">`)
instance.show()
document.addEventListener("keydown", (event)=>{
  if (event.key === "Escape"){
    instance.close();
  }
})
console.log(divGalaryRef);
};

