const response = await fetch(`https://api.github.com/users/${name}/repos`, {    });
const data = await response.json();

console.log(data);
 