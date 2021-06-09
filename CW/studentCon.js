function student (rno,sname,marks)
{
    this.rno = rno
    this.sname = sname
    this.marks = marks
    this.per = ()=>{
        var total = marks.reduce((a,b)=>a+b)
        return (total/400)*100
    }

    this.grade = ()=>{
    var per = this.per() 
    var grade=""

    if(per>=90)
    grade="A";
    else if(per>=80)
    grade="B"
    else if(per>=60)
    grade="C"
    else if(per>=35)
    grade="D"
    else
    grade="Fail"
    return grade;

    }

    this.display = function(){
        console.log("Name:"+this.sname+" Percentage is:"+this.per()+" Grade is:"+this.grade());
    }
}

var stu1 = new student(1,"Faiz",[80,80,80,80])
stu1.display()