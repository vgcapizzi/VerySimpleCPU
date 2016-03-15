/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function dataReg(){
    this.byte = new Byte();
    data = this.byte.binArray();
    this.addr = new Array(6);
    this.op = new Array(2);
    // addr is filled with 2-7
    this.addr[0] = data[2];
    this.addr[1] = data[3];
    this.addr[2] = data[4];
    this.addr[3] = data[5];
    this.addr[4] = data[6];
    this.addr[5] = data[7];
    //op is filled with 0-1
    this.op[0] = data[0];
    this.op[1] = data[1];
    this.getAddrData = function(){
        return(this.addr);
    };
    this.getOpData = function(){
        return(this.op);
    }; 
    this.displayAddrData = function(){
        alert(this.addr.join(""));
    };
    this.displayOpData = function(){
        alert(this.op.join(""));
    };
} 



var stuff = new dataReg();
stuff.byte.insert(10);
//alert(stuff.data.toString());
stuff.byte.displayBin();
stuff.displayAddrData();
stuff.displayOpData();





function instrReg(){
    
    
    
}

function addressReg(){
    
}

function programCounter(){
    
}