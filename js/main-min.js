let searchOpen=document.querySelector(".search-hostel-open-btn")
let searchForm=document.querySelector(".search-hostel")
if(searchOpen){if(searchForm){searchForm.classList.add("search-hostel-hidden")}
  searchOpen.addEventListener("click",function(event){event.preventDefault()
    searchForm.classList.toggle("search-hostel-hidden")
    searchForm.classList.toggle("search-hostel-show")})}
