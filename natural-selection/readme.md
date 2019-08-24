To do:   
- Add a mode where there is no epochs / rounds, but creatures gain 100 energy every time they find food, and replicate every time they get to 200 energy or above.
- Idea: the above mode could be a clicker game where you click to produce food, rather than it just appearing randomly!
- Make simulation just run real time instead of having rounds
- Make creatures not eat more than 2 food
- Remove all instances of 'let' and 'var' and make it 'const' instead to make code function
- Add deacerleration and reacceleration when hitting walls to make it look more realistic
- Above could then become a factor if you ever do NEAT machcine learning
- Another factor for NEAT could be food that is varying size, then more fearsome creatures will go for that one  instead
- Add 2d graph with speed and sense both plotted
- Make game speed up when there is only 1 - 3 creatures left
- Make food get eaten slowly, going down in value
- Make food stop being eaten at 50 energy, then slowly grow back. If it reaches 200 energy it can split.
- Add an energy bar for energy

"each time a creature replicates, there is a chance that a mutation will give a creature a slightly lower or slightly higher speed"

Experiment to try:   

Let the creatures speed evolve with high sense and low sense. With high sense higher speed should prevail since they detect then steal the food quicker, whereas on low sense lower speed should prevail since the creatures rely more on luckily stumbling upon a food.

Note for video:
Bigger canvas but with same rate of food evolution makes creatures have a lower speed (pretty obvious)
Same as above should be true for slower food rates. When food is abundant you can spend more energy!

averages 100 x 100 canvas: 
    speed: 1.00
    sense: 35
    creature count: ranged between 30 and 100, going up and down
sense on 1500 x 1000 canvas:
    speed in a famine: 0.40 
    sense in a famine: 45
    speed in a boom: 0.40
    sense in a boom: 0 

In 1500 x 1000:
They pretty much all evolved to have 0 sense after quite some time. It seems the cost of sense is just too high compared to bumping into things. The population was going up and down in the range 30 - 70 for quite a while, but then once they got to all have sense of 0 and speed of 0.20 - 0.6 the population increased massively to 400. Really interesting, you could make a video out of this!

Other idea:
Food doubles in two each round or some other dependancy based on how much food there was last round.

Idea for AI:
It can outout a value from 0 to 1 for x and y, and that's the percentage of it's maxxspeed in will move in that direction. Moving faster uses more energy. This hopefully will arise in behaviour where creatures cruise while looking for food and speed up once they find  it

Harmony:
If I want to find the correct rates of food and creatures, I should let them co-evolve. At first I make them spawn spontaneously, but then I slowly reduce the amount that is spawned as the food and creature adjust their states until they  can co-exist without any random spawning.

Look at this article on optimising canvas:
https://www.html5rocks.com/en/tutorials/canvas/performance/

Use multiple layers of cavasses to redraw just what you need to:
https://html5.litten.com/using-multiple-html5-canvases-as-layers/
