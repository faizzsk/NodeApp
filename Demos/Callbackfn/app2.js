function emp(eid,fname,lname,salku)
{
    this.eid=eid;
    this.fname=fname;
    this.lname=lname;
    this.sal=sal;

    this.display=function()
    {
        console.log(this.eid +" " +this.fname+ " "+this.lname+ ' '+this.sal);
    }

}
var e=new emp(1001,"Mangesh","Khaire",45000);
e.display();
console.log(e.eid);