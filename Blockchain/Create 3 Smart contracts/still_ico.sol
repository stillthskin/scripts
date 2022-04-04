// Compiler version
pragma solidity ^0.4.12;
 
contract still_ico{
// The maximum tockens for sale
uint public max_still_tockens = 1000000;
// still_Coins to Ksh conversion
uint public still_coins_to_sh = 20;
// Total tockens sold
uint public tockens_sold = 0;
// map investor to equity owened
mapping(address => uint) tockens_owned;
mapping(address => uint) ksh_owned;

//check if investor can afford tockens/tockens stil available

modifier can_buy_tockens(uint ksh_invested){
        require (ksh_invested * still_coins_to_sh + tockens_sold <=max_still_tockens);
        _;
}
//fucntion get equity in still tockens
function equity_in_still(address investor) external constant returns(uint){
  return tockens_owned[investor];
}
//fucntion get equity in ksh 
function equity_in_ksh(address investor) external constant returns(uint){
  return ksh_owned[investor];
}

// Buy stills from the ico
function buy_stills(address investor, uint ksh_invested) external
can_buy_tockens(ksh_invested){
 uint stills_bought = ksh_invested * still_coins_to_sh;
 tockens_owened[investor] += stills_bought;
 ksh_owned[investor] = tockens_owened[investor]  / 20;
 tockens_sold += stills_bought;
}
//sell back stills to the ico
function buy_stills(address investor, uint stills_to_sell) external
can_buy_tockens(ksh_invested){
 tockens_owened[investor] -= stills_to_sell;
 ksh_owned[investor] = tockens_owened[investor]  / 20;
 tockens_sold -= stills_to_sell;
}
}