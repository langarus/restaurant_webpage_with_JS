function createProjects(){
    const mainDiv = document.querySelector("#content")
    let title = document.createElement("h1");
    title.textContent = "All my Projects";
    
    let mainText = document.createElement("p")
    mainText.textContent = "Some Bla Bla text, consectetur adipiscing elit. Vivamus hendrerit sem vitae neque eleifend, vel interdum ligula congue. Suspendisse commodo metus eu lacus sagittis, eu viverra libero faucibus. Cras bibendum sed est vitae laoreet. Suspendisse sit amet interdum metus. Proin eleifend augue vel placerat tincidunt. Etiam at aliquam ligula. In hac habitasse platea dictumst. Nam vel consectetur ante, quis feugiat nisl. Donec eleifend semper magna, ut malesuada mauris. Praesent posuere posuere nulla, at tincidunt nulla tristique id."
    
    
    mainDiv.appendChild(title)
    mainDiv.appendChild(mainText)
}






export { createProjects }