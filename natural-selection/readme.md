To do:   
- Remove all instances of 'let' and 'var' and make it 'const' instead to make code functional
- Add a max amount of food per area (bucket) so food amounts doesn't get ridiculous
- Add deacerleration and reacceleration when hitting walls and approaching food to make it look more realistic
- Above could then become a factor if you ever do NEAT machcine learning - they would try and avoid walls
- Another factor for NEAT could be food that is varying size, then more fearsome creatures will go for that one  instead
- Add 2d graph with speed and sense both plotted
- Add graph of population over time
- Make game speed up when there is only 1 - 3 creatures left
- Add an energy bar for energy
- Add in gamespeed: Do this by just setting the framerate on the run() function somehow, but by being silly and coding in a gamespeed variable everywhere
- Make a button you can press to change gamespeed
- Add collision detection so that creatures don't overlap
- With above^: Add buckets or quadtrees for efficient collision detection
After even more time the average speed dropped to 0.20 and the population has risen even more to 600
Graphing this over time would be quite cool. I think it would steadily increase over time as speed decreases slowly.
- Add an animation to replicating that happens over a couple seconds
- Add eating animaion

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
