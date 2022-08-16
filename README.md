# The elevator by Carlos Daniel

## Built with Vite + React + Typescript

For using it locally

First clone or download the repo and then

```bash
npm i install
```
And to start the project
```bash
npm run dev
```
<span>Note: <b>The elevator will start moving after a delay of time (2s) because of letting time to press different buttons</b><span>
## Explaining the logic of the elevator
You can change the number of floors from 2 to 6.
#### Only elevator inside buttons
- If you click 3,5,4 from the 0 floor it would go 3,4,5.
- If you click 0,3,4 from the 5 floor it would go 4,3,0.

#### Mixed buttons
- if the elevator is at 0 floor and you press from the inside 1 and someone press from 5 go down, it would go 5 and then 1.
- if the elevator is at 4 floor and you press from the inside 5 and someone press from 3 go up, it would go 3 and then 5.
