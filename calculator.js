function myClear()
{
    document.getElementById("res").value = "";
}
function myValue(num)
{
    document.getElementById("res").value+= num;
}
function myEqual()
{
    try
    {
        var equalto = eval(document.getElementById("res").value);
        document.getElementById("res").value = equalto;	
    }
    catch
    {
        document.getElementById("res").value = "Invalid input";
    }

}
