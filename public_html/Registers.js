/* 
register redesign 
 */

//Fecth 2: DR<=M
function dataReg(){
    this.byte = new Byte();
    this.data = this.byte.binArray();
    //put address and op code get functions in there respected objects 
    
    this.getData = function(){
        this.opString = "";
        return(this.opString=this.data.join(""));
    }; 
    this.displayData = function(){
        alert(this.data.join(""));
    };
    
} 
var stuff = new dataReg();
stuff.byte.insert(10);
//alert(stuff.data.toString());
stuff.byte.displayBin();

function instrReg(){
    this.IR = new Array(2);
    this.byte = new Byte();
    this.IR = this.byte.getOpData();
    
    for(i=0;i<2;i++){
        this.IR[i]=data[i];
    }
    
    this.displayIR = function(){
        
       alert(this.IR.join(""));
    };
    
    this.displayIR = function(){
      this.stringIR = "";
      return(this.stringIR = this.IR.join(""));
    };
}

function addressReg(){
    this.AR = new Array(6);
    this.byte = new Byte();
    data = this.byte.binArray();
    this.AR = this.byte.getAddrData();
    
    for(i=2; i < 8; i++){
        this.AR[i] = data[i];
    }
    
    this.displayAR = function(){
        alert(this.AR.join(""));
        
    };
    this.getAR = function(){
        this.stringAR = "";
        return(this.stringAR = this.AR.join(""));
    };
    
}
//fetch 1: AR<=PC
function programCounter(){
    this.PC = new Array(8);
    this.byte = new Byte();
    
    //if fetch 2 occurs inc PC
    //if
    this.displayPC = function(){
        alert(this.PC.join(""));
    };
    this.getPC = function(){
        this.stringPC = "";
        return(this.stringPC = this.PC.join(""));
    };
}