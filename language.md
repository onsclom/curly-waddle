LANGUAGE

notes:

honestly i think the best way to come up with this is to just code some of the examples

woah, what if capitalized variable names are automatically const!?
that could be really cool :^)

doing this is making me realize, i kinda just wanna make the language that i want to make...

-------------

// == random walk ==

pen = {
    100/2,
    100/2
}

function animate():
    circle(pen[0], pen.y, 3)
    pen = random({
        {pen.x+1, pen.y},
        {pen.x-1, pen.y},
        {pen.x, pen.y+1},
        {pen.x, pen.y-1}
    })

// == game of life ==

GRID_SIZE = 20
TILE_SIZE = 100/GRID_SIZE

grid = []
for i=0; i<100; i+=TILE_SIZE:
    grid.append()


----------------------------

what if i start with javascript and later on add a new lang!?

the problem is that .. wait is there a problem?

i guess the grossness is that there will be lots of annoying std lib stuff

if people want to work with strings and arrays then they have to deal
with the grossness attached to those?

but are javascript array, strings, and objects actually bad? lets find out:

you know. i think i go with javascript here...

atleast to make my experiment
