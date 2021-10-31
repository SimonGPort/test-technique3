const fetchBrew = async () => {
    try{
   let response = await fetch("https://api.punkapi.com/v2/beers");
   let body = await response.json();
   body.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));

   return body
    }
    catch(err){
        throw err
        console.log(err)
    }
}

export default fetchBrew