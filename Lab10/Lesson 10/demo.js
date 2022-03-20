//Javascript is case sensitive

/*Javascript statement end in a semicolon
Javascript comments can span single or multiple lines*/


console.log("console log - hello world");//log in developer tools
var globalX = 100;//global scope

function hello() //function definition
{
    alert("alert - hello world!");//popup window    
}

function add()//function definition
{
    var x = 3;
    var y = 5;
    var sum = x + y;
    alert("Sum is " + sum);
}

function substract()
{
    var a = 1000;
    var b = 100;
    var diff = a - b;
    alert("Difference is" + diff);
}

//Homework Lab- Complete Multiplication and Division functionality
function multiply()
{
    var a = 25;
    var b = 42;
    var product = a * b;
    alert("Product is " + product);
}

function division()
{
    var a = 48;
    var b = 12;
    var dividend = a/b;
    alert("Each child has " + dividend + " pencils.");
}
function increment()
{ 
    var y = 10;//local scope - resets y everytime function is called
    globalX = globalX+10;//can add any number to itself
    //y = y+10;
    y+=10;//same as y = y+10;
    alert("x="+globalX + "y="+y); 

}

function compare()
{
    var charlie = 120;
    var john = 120;
    
    //conditional if statement
    
    if (charlie > john)
    {
        alert("Charlie is taller");
    }
    else if( charlie == john)//"=" is assignment; "==" is comparison
    {
        alert("Charlie and John are of the same height");
    }
    else
    {
        alert("John is taller");
    }
}

function compareint()
{
    var a = 100;
    var b = 1000;
    
    //conditional if statement
    
    if (a > b)
    {
        alert("Yes");
    }
    else
    {
        alert("No");
    }
}

function compareint2()
{
    var a = 5;
    var b = 4;
    var c = a*b;
    var d = 20;
    
    //conditional if statement
    
    if (c > d)
    {
        alert("Yes");
    }
  
    else
    {
        alert("No");
    }
}

function average()
{
    var a = 25;
    var b = 47;
    var c = 98;
    var d = 46;
    var e = 52;
    var mean = (a + b + c + d + e)/5
    alert("The mean is " + mean);
}