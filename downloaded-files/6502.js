//////////////// MEMORY //////////
var r = new Uint8Array(3)
var a = r[0], x = r[1], y = r[2]
var pc = 0x00
var mem = new Uint8Array(64) // should be 32k
//////////////// MEMORY //////////

//////////// PROGRAM LOADING /////////////
var programStr = `a9 c0 aa e8 69 c4 00`
function loadProgram(programStr){
    var program = programStr.split(' ').map(n => parseInt(n, 16))
    mem.set(program)
}
//////////// PROGRAM LOADING /////////////

///// CPU /////
function doOneCyle(){
    debugger;
    switch(mem[pc++]){
        case 0xa9: a = mem[pc++]; break; // LDA
        case 0xaa: x = a; break;  // TAX
    }
}
///// CPU /////

doOnceCycle()
doOnceCycle()
doOnceCycle()
doOnceCycle()
doOnceCycle()

/*
        LDA #$c0  ;Load the hex value $c0 into the A register ;a9 __
        TAX       ;Transfer the value in the A register to X ;aa    
        INX       ;Increment the value in the X register ;e8
        ADC #$c4  ;Add the hex value $c4 to the A register ;69 __
        BRK       ;Break - we're done ;00
*/