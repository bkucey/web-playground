const Tile = (props) =>
    <button className={`tile ${props.status}`}>
        Hi the name is {props.status.toString()}
    </button>

class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = { board: [true, false] }
    }

    render() {
        return <div>
            This is the board.
            <Tile status = "oarang"/>
            {this.state.board.map((status,index) => <Tile key={index} status={status}/>)}
        </div>
    }
}

















const App = () =>
    <Board />
















/* Load the app onto the DOM */
const domContainer = document.querySelector("#app")
const root = ReactDOM.createRoot(domContainer)
root.render(<App />)
