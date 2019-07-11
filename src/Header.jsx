import React from 'react';

const Header = () => {
    var today=new Date();
    var weekday = new Array(7);
    weekday[0]="SUN";weekday[1]="MON";weekday[2]="TUE";weekday[3]="WED";weekday[4]="THU";weekday[5]="FRI";weekday[6]="SAT";
    var month = new Array(12);
    month[0]="JAN";month[1]="FEB";month[2]="MAR";month[3]="APR";month[4]="MAY";month[5]="JUN";month[6]="JUL";month[7]="AUG";month[8]="SEP";month[9]="OCT";month[10]="NOV";month[11]="DEC";
    var disdate=weekday[today.getDay()]+" , "+month[today.getMonth()]+" "+today.getDate()+" "+today.getFullYear();
    return(
        <div>
            <br/><br/>
            <h2 className="calendar-text">Calendar</h2>
            <br/><br/>
            <h3 className="date">{disdate}</h3>
            <br /><br/>
        </div>
    );
}
export default Header;