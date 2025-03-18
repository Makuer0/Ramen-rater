const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "miso.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "tonkotsu.jpg" }
 ];



  const ramenImage = document.getElementById("ramen-image");
  const ramenName = document.getElementById("ramen-name");
  const ramenRestaurant = document.getElementById("ramen-restaurant");
  const ramenRating = document.getElementById("ramen-rating")
  const ramenComment = document.getElementById("ramen-comment")


  const ramenimage = document.getElementById("ramen-menu");

 function displayRamens(){
 
  ramenimage.innerHTML = '';
  ramens.forEach((ramen) =>{
     
    const imaGe = document.createElement("img");
    imaGe.src = ramen.image;

   imaGe.addEventListener('click',() =>{
 
    details.style.display = "block";
   handleCLick(ramen);
    
   })
   ramenimage.appendChild(imaGe);
  })



}





function handleCLick(ramen){
  ramenImage.src = ramen.image;
  ramenName.innerHTML = `${ramen.name}`;
  ramenRestaurant.innerHTML = `Restaurant: ${ramen.restaurant}`;
  ramenRating.innerHTML = ramen.rating ? `Rate: ${ramen.rating}` : "";
  ramenComment.innerHTML = ramen.comment ?`Comment: ${ramen.comment}`: '';
  
}


const details = document.getElementById("ramen-details");


function addSubmitListener() {
  const form = document.getElementById("ramen-form"); 
  
  form.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const addRamen = {
        name: formData.get("name"),
        restaurant: formData.get("restaurant"),
        image: formData.get("image"),
        rating: formData.get("rating"),
        comment: formData.get("comment"),
      };

      ramens.push(addRamen);
      displayRamens();

      //form.reset();
  });
} 




function main(){
  displayRamens();
  addSubmitListener();

}
document.addEventListener("DOMContentLoaded", main);