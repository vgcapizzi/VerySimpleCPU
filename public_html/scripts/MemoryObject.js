/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
require(['ByteObject'], function($){
    var memCell = new Byte();
memCell.clear();
memCell.displayBin();
memCell.insert(255);
memCell.displayBin();
memCell.displayHex();
});

