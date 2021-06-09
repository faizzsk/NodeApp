function employee(eid,ename,sal){
    this.eid=eid;
    this.ename=ename;
    this.sal=sal;
    this.disp=()=>
                 {
                     console.log(this.eid+" "+this.ename+" "+this.sal)
                 }
}

var e  =  new  employee(1,"Faiz",25000)
var e1 =  new  employee(3,"Rahul",20000)

e.disp();
e1.disp();
