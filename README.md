# unit-4-game

## premise / ideas

- RPG game with three enemies you need to face all at once
- All enemies attack at once, you need to use weaknesses to beat them
- Each enemy has a weakness to one of three types of attacks
  - when you attack an enemy with their weakness they lose a turn
- Each turn you pick an attack type and optionally a defensive stance
- you start off with one (or two?) attack type and gain one more after killing each of the first two enemies
- You need to figure out which enemy is weak to your attack
- each turn each enemy will have their intent over their head, you need to pick a defensive stance to counter that as well as use your attack to incapacitate one enmy to lower overall damage
  - can be thought of as two actions per turn
- enemies randomly pick from two types of attacks based on their type, will not attack with their weakness, use this to figure out their weakness potentially
- you will be unable to knowckdown one of the three enemies until you defeat one of the other two
- the last enemy needs some other advantage, potentially switching weaknesses randomly but their attacks telegraph that weakness. Maybe they can't get knowcked down as easily. Randomness?
- Three attacks type idea
- simplify this idea, I only have a few days to work on it, start with one attack where you pick who you are attacking.

### variables and other things needed

- three enemy objects
  - Health
  - 2 attack types
  - weakness type
- player hp

### Layout Design

- anounce area 20%
- enemy area 50%
  - Flexbox with the three enemie areas
    - box with enemy health and enemy image
- player area 30%
  - Flexbox with 4 sections
    - player health
    - atk 1
    - atk 2
    - atk 3
