function employee(eid,ename,sal,pf,da,hra){
    this.eid=eid;
    this.ename=ename;
    this.sal=sal;

    this.pfCal= ()=>
    {
        let pfAmt=(sal*(pf/100))
        let hraAmt=(sal*(hra/100));
        let daAmt=(sal*(da/100));
        console.log("Pf amount:"+pfAmt+" Hra:"+hraAmt+" DA:"+daAmt);
    }

}
var emp=new employee(11,"Faizz",13000,4,5,5);
console.log(emp.pfCal());