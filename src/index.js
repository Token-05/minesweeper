import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';

// function Square(props) {
//     <button 
//         className="square" 
//         onClick={props.onClick}
//     >
//         {props.value}
//     </button>
// }

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.list = [];
        this.state = {
            board: 6,//board × board盤面
            suqares: {
                id: Array(36).fill(null),
                status: Array(36).fill(false),//未接触:false 接触済:true
                contents: Array(36).fill(false),//何もない:false 爆弾あり:true
            }
        };
    }

    eventhandle(place) {
        const board = this.state.board;

        const newsuqaresState = Object.assign({}, this.state.suqares);
        newsuqaresState.contents[place] = true;
        this.setState({ suqares: newsuqaresState });
        document.getElementById(place).style.display = 'none';
        document.getElementById(place+board*board).style.display = 'inline-block';
    }

    render() {
        const suqaresOne = this.state.suqares;
        const board = this.state.board;

        for(let i = 0; i < board; i++){
            this.list.push(<div className="board-row" />);
            for(let j = 0; j < board; j++){
                this.list.push(<div className="square tapped" id={i*board+j+board*board} value={suqaresOne.contents[i*board+j]}>2</div>);
                this.list.push(<button className="square tap" id={i*board+j} value={suqaresOne.contents[i*board+j]} 
                onClick={() => this.eventhandle(i*board+j)}>1</button>);
            }
        }
        return (
            <div>
                <p>{this.state.board} × {this.state.board}盤面です</p>
                {this.list}
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);