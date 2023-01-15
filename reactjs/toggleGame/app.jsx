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

const Board = (props) =>
    <div>
        {this.state.entries.map((row, index) =>
            <BoardRow
                key={index}
                entries={row}
                onClick={(col) => { props.onClick(index, col) }}
            />
        )}
    </div>






class App extends React.Component {
    constructor(props) {
        super(props)
        const width = 10
        let entries = []

        for (let i = 0; i < width; i++) {
            entries.push([]);
            for (let j = 0; j < width; j++) {
                entries[i].push(false);
            }
        }
        entries[4][4] = true;
        this.state = {
            entries: entries,
        }
    }

    flipRowAndNeighbors = (row, col) => {
        this.setState((state, props) => {
            for (let i = -1; i <= 1; i++) {
                const newRow = row + i;
                if (0 <= newRow && newRow < state.entries.length) {
                    for (let j = -1; j <= 1; j++) {
                        const newCol = col + j;
                        if (0 <= newCol && newCol < state.entries[newRow].length) {
                            state.entries[newRow][newCol] = !state.entries[newRow][newCol];
                        }
                    }
                }
            }
            const output = {
                entries: state.entries,
            };
            //console.log(`flipRowAndNeighbors new state ${JSON.stringify(output)}`);
            return output
        })
    }

    render() {
        return <Board onClick={this.flipRowAndNeighbors} />
    }
}











/* Load the app onto the DOM */
const domContainer = document.querySelector("#app")
const root = ReactDOM.createRoot(domContainer)
root.render(<App />)
