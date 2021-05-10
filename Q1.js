var a,b,c
a=prompt("enter the first no")
b=prompt("Enter the second no")
c=prompt("enter the third no")
if(a>b && a>c)
{
  document.write(a+ "is greater")
}
else if(b>a && b>c)
{
  document.write(b+ "is greater")
}
else
{
document.write(c+ "is greater")
}