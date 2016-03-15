/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function Memory(){
    
    this.cell = new Array(64);
    for (var i = 0; i < 65; i++){
        this.cell[i] = new Byte();
    }
    
    this.clear = function(){
        for(var i = 0; i < 64; i++){
            this.cell[i].clear();
        }
    };
    
    this.displayBinary = function(){
        var cellBin = new String();
        for(var i = 0; i < 65; i++){
            
            cellBin = cellBin + this.cell[i].binString();
        }
        alert(cellBin);
    };
    
    this.fill = function(num){
        for(var i = 0; i < 64; i++){
            this.cell[i].insert(num);
        }        
    };
    
    this.edit = function(num, place){
        this.cell[place].insert(num);
    };
    
    this.clear();
    
    this.toTable = function(){
        var table = new String();
        var rows = 12;
        var cols = 4;
        var i = 0
        for (var r = 0; r <= rows; r++){
           table += '<tr>';
           for (var c=0; c < cols; c++){
               table+= '<td>' + this.cell[i].binString() + '<td>';
               i++;
           }
           table += '</tr>';
        }
        document.getElementById('table').innerHTML= '<table border=1>' + table + '</table>';
    };
}
window.onload = function(){
    var memsys = new Memory();
    //memsys.clear();
    memsys.edit(255,1);
    memsys.edit(255,5);
    //memsys.displayBinary();
    memsys.toTable();
}