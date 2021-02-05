# Hungry Ahiru

Hunrgy Ahiru is an endless runner and shooter game built with React and Redux. 

Hungry Ahiru is [live on Netlify](https://hungryahiru.netlify.app/).

Help Ahiru the duck navigate dreams in search of desserts while avoiding vegetables. 


[![Screenshot of demo video](https://cdn.discordapp.com/attachments/709643259789705317/807001834904223744/unknown.png)](https://youtu.be/gi0LITJXaC0)


## Table Of Contents
- [Installation](https://github.com/kathyn262/hungryahiru#installation)
- [Technologies](https://github.com/kathyn262/hungryahiru#technologies)
- [Component Hierarchy](https://github.com/kathyn262/hungryahiru#component-hierarchy)

## Installation 

Use npm to install dependencies and start servers for the frontend. 

Frontend Setup: 
```
npm install 
npm start
```


## Technologies
- React
- Redux
- HTML/CSS
- Bootstrap

## Component Hierarchy 
```
App
├── EndScreen
├──┬ GameScreen
│  ├── CollisionContainer
│  ├──┬ DessertContainer
│  │  └── Dessert
│  ├──┬ UserContainer
│  │  ├── Ahiru
│  │  ├── Fork
│  │  └── Score  
│  └─┬ VegetableContainer
│    └── Vegetable
├── InstructionsScreen
└── LandingScreen
```