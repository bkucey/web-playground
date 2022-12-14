import React from "react"

const Tile = (props) =>
    <button className={`tile ${props.status ? 'blue' : 'red'}`} onClick={props.onClick} />

const BoardRow = (props) =>
    <div className="row">
        {props.entries.map((value, index) =>
            <Tile
                key={index}
                status={value}
                onClick={() => props.onClick(index)}
            />
        )}
    </div>

class Board extends React.Component {
    constructor(props) {
        super(props)
        const width = 10
        let entries = []

        for (let i = 0; i < width; i++) {
            entries.push(false);
        }
        entries[5] = true
        this.state = {
            row: entries,
        }
    }

    flipRowAndNeighbors = (i) => {
        //console.log(`called this.flipRowAndNeighbors (${i})`);
        this.setState((state, props) => {
            //console.log(`flipRowAndNeighbors state ${JSON.stringify(state)}`);
            const indicesToChange = [i - 1, i, i + 1];
            let newRow = state.row.map(x => x);
            for (const index of indicesToChange) {
                //console.log(`considering index:${index}`);
                if (0 <= index && index < newRow.length) {
                    //console.log(`index ${index} valid, switching`)
                    newRow[index] = !newRow[index];
                }
            }
            const output = {
                row: newRow
            };
            //console.log(`flipRowAndNeighbors new state ${JSON.stringify(output)}`);
            return output
        })
    }

    render() {
        return (
            <div>
                <BoardRow
                    entries={this.state.row}
                    onClick={(i) => {
                        this.flipRowAndNeighbors(i)
                    }}
                />
            </div>
        )
    }
}

















const App = () =>
    <Board />
















/* Load the app onto the DOM */
const domContainer = document.querySelector("#app")
const root = ReactDOM.createRoot(domContainer)
root.render(<App />)
