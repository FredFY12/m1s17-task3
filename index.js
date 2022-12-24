const URL_ALB = 'https://jsonplaceholder.typicode.com/albums';
const dataContainer = document.querySelector('.data-container');


function createLiHtml (title) {
  liHtml = document.createElement('li');
    liHtml.textContent = title;
  return liHtml;
}

function tooggleLoader(){
  const loaderHtml = document.querySelector('#loader');
  const isHidden = loaderHtml.hasAttribute('hidden')
  if(isHidden){
    loaderHtml.removeAttribute('hidden');
  }else{
    loaderHtml.setAttribute('hidden','');
  }
}


async function renderAlbums() {
  try{
    tooggleLoader()
   const url = await fetch(URL_ALB);
   const requests = await url.json();
   requests.forEach(album => {
      dataContainer.append(createLiHtml(album.title))
   });
  }catch(error){
    dataContainer.append(createLiHtml('Произошла ошибка в получении данных об альбомах...'))
  }finally{
    tooggleLoader()
  }
  
}


renderAlbums()