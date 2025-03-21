document.querySelector(".search-button").addEventListener("click", function () {
    const search = document.querySelector(".input").value.trim();
  
    if (!search) {
      alert("الرجاء إدخال رابط لتقصيره!");
      return;
    }
    const safeURL = encodeURIComponent(search);
    
    fetch(`https://tinyurl.com/api-create.php?url=${safeURL}`)
      .then((response) => response.text())
      .then((shortUrl) => {
        if (shortUrl.includes("http")) { 
          const resultContainer = document.querySelector(".shortened-url");
          const li=document.createElement("li")
         li.classList.add('shadow-md' ,'rounded-lg' ,'p-5','bg-white','mt-5')
          li.innerHTML = `<a href="${shortUrl}" target="_blank">${shortUrl}</a>`;
          resultContainer.appendChild(li)
         
          const deleteButton = document.createElement("button");
        deleteButton.textContent = "×";
        deleteButton.classList.add("bg-red-500", "text-white", "rounded-full", "w-6", "h-6", "flex", "justify-center", "items-center", "ml-2");
        deleteButton.addEventListener("click", () => {
          li.remove();
        });
        li.append(deleteButton)

          document.querySelector(".input").value="";
        }
       
      })})
  
const button=document.getElementById("menu-btn")
const mune=document.getElementById("mobile-menu")
button.addEventListener("click",function () {
  mune.classList.toggle("hidden")

  
})