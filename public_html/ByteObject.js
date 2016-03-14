function byteClass(){
    var bin = new Array(8);
    var hex = new Array(2);
    
    function edit(dividen){
        for(i = 0; i < 8; i++){
            bin[8-i] = dividen % 2;
            dividen = Math.floor(dividen / 2);
        }
    }
    
    function clear(){
        bin.fill(0);
    }
    
    
    edit(11);
    alert(bin.join(""));
    clear();
    alert(bin.toString());
}

window.onload=byteClass;