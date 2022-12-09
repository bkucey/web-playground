const Tile = (props) =>
    <button className={`tile ${props.status}`} onClick={props.onClick}>
        {props.status.toString()}
    </button>

class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = { board: true }
    }

    render() {
        return <div>
            This is the board.
            <Tile status={this.state.board ? "red" : "blue"} onClick={() => {
                this.setState((state, props) =>
                    ({ board: !state.board })
                )
            }} />

        </div>
    }
}

















const App = () =>
    <Board />
















/* Load the app onto the DOM */
const domContainer = document.querySelector("#app")
const root = ReactDOM.createRoot(domContainer)
root.render(<App />)
