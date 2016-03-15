/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function Byte(){
    this.binary = new Array(8);
    this.hex = new Array(2);
    
    this.clear = function(){
        this.binary.fill("0");
        this.hex.fill("0");
    }
    this.insert = function(dividen){
          alert("inserting " + dividen);
        for(i = 0; i < 8; i++){
            this.binary[7-i] = dividen %2;
            dividen = Math.floor(dividen / 2);
        }
        this.toHex();
    }
    
    this.toHex = function(){
        var binLow = "";
        var binHigh = "";
        for(i = 4; i < 8; i++){
            binLow = binLow + this.binary[i]
        }
        for(i = 0; i < 4; i++){
            binHigh = binHigh + this.binary[i]
        }
        this.hex[1] = parseInt(binLow, 2).toString(16);
        this.hex[0] = parseInt(binHigh, 2).toString(16);
    }
    
    this.displayBin = function(){
        alert(this.binary.join(""))
    }
    
    this.displayHex = function(){
        alert(this.hex.join("").toUpperCase())
    }
};

