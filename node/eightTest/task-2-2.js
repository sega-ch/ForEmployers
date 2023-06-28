async function getgithub(name)
{
  
  try {
    
    const response = await fetch(`https://api.github.com/users/${name}/repos`, {    });
    const data = await response.json();
 

    if (data.message === "Not Found") {
      alert("We think this user dosen't exist");
    } else {
    
      const repos = document.querySelector(".repos");
      repos.setAttribute("style","display: flex; flex-direction: column");
      const repos1 = document.createElement("div");
      repos1.setAttribute("style","display: flex; flex-direction: column");
      repos1.setAttribute("class","repos1");
      repos.append(repos1);

      for ( let i = 0; i < data.length; i++)
      {
        
          const link = document.createElement("a");
          link.textContent = data[i].name;
          link.setAttribute("href", `${data[i].html_url}`);

          repos1.append(link);
      }     

    }

   } catch (error) {
      console.log("Error this"+error);
   }

}

function getList()
{
  const name = document.querySelector("#nameInp").value;
  let childCount = document.querySelector(".repos").children.length;
    

  if (name !== "") {
    
    if (childCount > 0) {

       const repos1 = document.querySelector(".repos1").remove();
       getgithub(name);
    } else {
      getgithub(name);
    }

  } else {
    alert("Введите имя пользователя");
  }   
    


}

