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

getDatas()
