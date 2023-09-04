$(document).ready(function(){
    
    $("#loading .loader").fadeOut(1000,function(){
        $("#loading").fadeOut(1000,function(){
$("body").css("overflow","auto")
        })
    } );
})
$("#sideBar").click(function(){
    let sidBarPos= $(".navbar").innerWidth();
    if($("#sideBar").css("left")=="0px"){
        $("#sideBar").animate({left:-sidBarPos},1000)
        $(".open").css("display","block")
  $(".x").css("display","none")
    }else{
        $("#sideBar").animate({left:"0px"},1000)
        $(".open").css("display","none")
        $(".x").css("display","block")
    }


})



$(".sea").click(function(){
    $(".sear").css("display","flex") && $(".such").css("display","none")&&$(".cont").css("display","none")&&$(".recip").css("display","none")&&$("#dim").css("display","none")
})
$(".contac").click(function(){
    $(".cont").css("display","block")&& $(".such").css("display","none")&& $(".sear").css("display","none")&&$(".recip").css("display","none")&&$("#dim").css("display","none")
})
$(".catee").click(function(){
    $(".suchh").css("display","block")&&   $(".sear").css("display","none") && $(".such").css("display","none")&&$(".cont").css("display","none")&&$(".recip").css("display","none")
})




let x=[]
async function getMeal(){
    let mealRequest = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
    // console.log(mealRequest,"hjhh");
    let {meals} = await mealRequest.json();
    x=meals
    console.log(x);
    display(x)

}
getMeal()
 
function display(x){
    
    let cartona =``;
    for (let i=0;i<x.length; i++){
    cartona+= `   <div class="col-md-3 such">
    <div class="img-src position-relative d-flex mt-4 ">
            <img src="${x[i].strMealThumb}" class="img-fluid imgg w-100" alt="">
            <div class="img-cap" onclick="addCate(${i})">
            <h3 class="n">${x[i].strMeal}</h3>
            </div>
            
          </div>
        </div>
         `
    }
    document.getElementById("demo").innerHTML=cartona

    document.getElementById("demo").innerHTML += `<div class="col-md-6 recip"></div>`
   
}




 function addCate(i){
  
    // $
  console.log(x,x[i]);
     $(".such").css("display","none")&& $(".recip").css("display","block") && $(".recip").html(`
     
     <div class="img-title">
     <img src="${x[i].strMealThumb}" alt="">
     <h5>${x[i].strMeal}</h5>
 </div>
 <div class="discr">
     <h2>Instructions</h2>
     <p>${x[i].strInstructions}</p>
     
     <h4>Area :${x[i].strArea} </h4>
     <h4>Category  : ${x[i].strCategory}</h4>
     <ul class="list-unstyled d-flex g-3 flex-wrap">
     <li class="alert alert-info m-2 p-1">${x[i].strMeasure1}</li><li class="alert alert-info m-2 p-1">${x[i].strMeasure2}</li><li class="alert alert-info m-2 p-1">${x[i].strMeasure3}</li><li class="alert alert-info m-2 p-1">${x[i].strMeasure4}</li><li class="alert alert-info m-2 p-1">${x[i].strMeasure5}</li><li class="alert alert-info m-2 p-1">${x[i].strMeasure6}</li><li class="alert alert-info m-2 p-1">${x[i].strMeasure7}</li><li class="alert alert-info m-2 p-1">${x[i].strMeasure8}</li><li class="alert alert-info m-2 p-1">${x[i].strMeasure9}</li><li class="alert alert-info m-2 p-1">${x[i].strMeasure10}</li><li class="alert alert-info m-2 p-1">${x[i].strMeasure11}</li><li class="alert alert-info m-2 p-1">${x[i].strMeasure12}</li><li class="alert alert-info m-2 p-1">${x[i].strMeasure13}</li>
 </ul>
   </div>
`)
    
    //  console.log("hii");
}




let k=[]
async function getCateg(){
    let mealRequeste = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
    
    let {categories} = await mealRequeste.json();
k=categories
    console.log(k);
//     let categoryDetal =await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=beef`)
    
//     let {meals} = await categoryDetal.json();
//  s=meals
// console.log(s);

    displayy(k)

}
 async function getImag(clickk){
    let categoryDetal =await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${clickk}`)
    
    let {meals} = await categoryDetal.json();
 s=meals
console.log(s);

}

getCateg()


function displayy(){
    
    let cartona =``;
    for (let i=0;i<k.length; i++){
    cartona+= `   <div class="col-md-3 suchh categories" >
    <div class=" img-src position-relative d-flex mt-4">
            <img src="${k[i].strCategoryThumb}" class="img-fluid imgg w-100" alt="">
            <div class="imgg-cap text-center " onclick="addCategories(${i})">
            <h3 class="n text-center">${k[i].strCategory}</h3>
            <p class="nn">${k[i].strCategoryDescription}</p>
            </div>
            
          </div>
        </div>  
        <div class="imges">
        <img src="${[i].strMealThumb}" alt="">
        <h5>
        ${[i].strMeal}
        </h5>
        </div>
        `
    }
    document.getElementById("dim").innerHTML=cartona
    document.getElementById("blan").innerHTML += ` <div class="col-md-3 detail"></div>`
   
}

function addCategories(){
    console.log(e.target.value);
}


$(".cate").click(function(){
    $(".categories").css("display","block") && $("#demo").css("display","none")})

   

    function addCategories(i){
        $(".categories").css("display","none") &&
       $(e.target.value).css("display","block")
            
        }
    
    
    
    

