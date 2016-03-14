/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function RegClass(){
    var byte = new Array(8);
    var totalMem = new Array(64);
    
}

function dataReg(){
    var data = new Array(8);
    var inst = data.slice(0, 1);
    var address = data.slice(2,7);
} 

function acReg(){
    var AC = new Array(8);
}

function pcReg(){
    var PC = new Array(8);
    
}
