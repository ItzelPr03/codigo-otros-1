const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');//agregamos .
const $l = document.querySelector('.location');

async function displayUser(username) {//agregamos async porque se usa await
  $n.textContent = 'cargando...';
  try{
    const  response = await fetch(`${usersEndpoint}/${username}`).json;//agregamos try catch
    console.log(data);
    $n.textContent = '${data.name}';
    $b.textContent = '${data.blog}';
    $l.textContent = '${data.location}';
  }catch (err){
    handleError(err)
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);