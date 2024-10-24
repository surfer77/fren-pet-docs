---

sidebar_position: 5
---


# Player Vs Player (PVP)

## Battles

Every 30 minutes you can battle a pet that hasn't been bonked for 1 hour.

The odds on the outcome of the battle depend on your attack and defense points vs the other player you are battling so pick your battles wisely.

The winner can get up to 0.5% of the loser's points, which directly affects ETH rewards.

Here's how it works:

When attacking:

What you can lose is always capped  at 0.5% of your points.
What you can win is always capped at 0.5% (1% if hibernated) of target points.

## My pet has less than 10k points
  - I can lose 0.5%
  - I can win 100 points if opponent can lose that (still capped at 0.5% of their points)

## My pet has more than 10k points

win/lose is calculated according to the odds of win

### I attack a stronger pet 
  - if I attack with odds of winning less than 50%
    - if I lose, I lose `.5% of target points + (50 - odds) * target loss + 60% * target loss` (capped at 0.5% of my points)
    - if I win, I can win `.5% of my points + (50 - odds) * my loss + 60% * my loss` points (capped at 0.5% of target points)

**Example 1**:  
Pet 1: 100k vs Pet 2: 200k, with 20% odds of winning  
Pet 1 max loss is 500 points, Pet 2 max loss 1000 points  
Pet 1 loses => `-500pts`  
Pet 1 wins => `500 + (50-20)% * 500 + 60% * 500 = +950pts` 

**Example 2**:   
Pet 1: 200k vs Pet 2: 100k, with 20% odds of winning  
Pet 1 max loss 1000 points, Pet 2 max loss is 500 points  
Pet 1 loses => `500 + (50-20)% * 500 + 60% * 500 = -950pts`   
Pet 1 wins => `+500pts `  
    
### I attack a weaker pet

  - if I attack with odds of winning greater or equal to 50%
    - if I lose, I can lose `0.5% of target points + odds * target loss` (capped to my 0.5%)
    - if I win, I can win `.5% of my points + 60% * my loss` points (capped at 0.5% of target points)

**Example 1**:  
Pet 1: 100k vs Pet 2: 200k, with 70% odds of winning  
Pet 1 max loss is 500 points, Pet 2 max loss 1000 points  
Pet 1 loses => `-500pts`   
Pet 1 wins => `500 + 500 * 60% = +800pts`  

**Example 2**:  
Pet 1: 200k vs Pet 2: 100k, with 70% odds of winning  
Pet 1 max loss 1000 points, Pet 2 max loss is 500 points  
Pet 1 loses => `500 + 500 * 70% = -850pts`  
Pet 1 wins => `500pts`  

## Defense and Attack Score

Every pet starts with 10 AP (Attack Points) and 10 DP (Defense Points).

Every time you level up 1 level by upgrading your pet you get to spin a gatcha machine that will reward you with APs or DPs.

Here is the formula to decide your win probability: `(Attacker’s AP) / (Attacker’s AP + Defender’s DP)`

## Kills

When a pet's TOD (Time Of Death) reaches 0 you can kill it, burn the NFT onchain and earn a star, and stars are very hard to come by.

You can check how many stars you've gained on the my pet tab.

:::note

Fren Pet was released in a fair way via Base Swap outside of this website, The purchase of FP tokens does not constitute an investment contract or any form of investment advice. Fren Pet does no guarantee or make any promises about the future value or performance of the token, and the value of the token may fluctuate significantly. It might be illegal for you to own FrenPet depending on your jurisdiction, check with your local laws.

:::
