// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.6;

///
contract Zaya {

    enum COLOR{ ROOT, SACRAL, NAVEL, HEART, THROAT, THIRD, CROWN }
    
    event Tick(COLOR indexed color, address indexed peer);
    event Aura(uint256 indexed resonance, address indexed peer);

    uint256 public condensed;
    uint256 public cellulose;
    
    //☽/  @params
    constructor(uint _condensed, uint256 _cellulose){
        this.condensed = _condensed;
        this.cellulose = _cellulose;
    }

    //☌/    @params     uint       val
    modifier on(uint _inspect) {
      if (_inspect * this.condensed <= this.cellulose) {
         _;
      }
    }

    //☐/    @params     COLOR       color 
    function scry(COLOR color) public returns(bool) {
        while (color <= COLOR.CROWN) { 
            emit Tick(color, msg.sender);
            return true;
        }
        return false;
    }
    
    //☯/    @params     uint        val
    function resonance(uint val) on public {
        emit Aura(val*rad, msg.sender);
    }
}