const endpoint = "https://zrivv1.sse.codesandbox.io/"

async function getDatas(){
  try {
    const response = await fetch(endpoint)
    return response.json()
  }catch(e){
    console.log(e);
    return false;
  }
}

async function render(){
  try{
    const data = await getDatas();
    console.log(data);
    document.querySelector('#app').innerHTML = Template(data);
  }catch(e){
    document.querySelector('#app').innerHTML = ErrorTemplate();
  }
}
render()

function Template({message, time, random}){
    return `
         <table border = "1">
         <tr>
            <td>Server message</td>
            <td>${message}</td>
         </tr>
         <tr>
            <td>Server time</td>
            <td>${time}</td>
         </tr>
         <tr>
            <td>Server random</td>
            <td>${random}</td>
         </tr>
      </table>
    `
}

function ErrorTemplate(){
  return `
    The server are sleeping! <a href="${endpoint} tagget="_blank">Wake it up!</a>
  `
}
