document.getElementById("PizzaListID").addEventListener("click",displayPizza);
document.getElementById("PastaListID").addEventListener("click", displayPasta);
var img = document.createElement("img");
img.src = "https://cdn1.vectorstock.com/i/1000x1000/73/20/cheesy-pizza-slice-vector-13447320.jpg"

document.getElementById("GelatoListID").addEventListener("click", displayGelato);


function displayPizza() 


{
  document.getElementById("articleID").innerHTML = "<h1>Pizza</h1> 		<p>Pizza is a savory dish of Italian origin consisting of a usually round, flattened vased of leavened wheat-based dough. Its topped with tomatoes, cheese and often various other ingridents. This is then baked at a high temperature, traditionally in a wood-fire oven</p>	<p>There are multiple different type of toppings and its super customizable. For example there is pepperoni, cheese, and meat-lovers. There is also some artisain types of pizza like Hawaiian, or a supreme.</p>"

}
			
function displayPasta() 
{
  document.getElementById("articleID").innerHTML = "<h1>Pasta</h1><p>Pasta is a type of food typically made from an unleavened dough of wheat flour mixed with water or eggs, and formed into sheets or other shapes, then cooked by boiling or baking.</p>"
}
	
function displayGelato() 
{
  document.getElementById("articleID").innerHTML = "<h1>GELATO</h1><p>Gelato is a popular frozen dessert of Italian origin. It is generally made with a base of 3.25% milk and sugar. It is generally lower in fat than other styles of frozen desserts.</p>"
}

