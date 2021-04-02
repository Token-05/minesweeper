import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';

class Bomb extends React.Component {
    constructor(props) {
        super(props);
        this.list = [];
        this.id = this.props.id;
        this.value = this.props.value;
        this.level = this.props.level;
        this.board = this.props.board;
    }

    bombInst() {
        const random = Math.floor(Math.random() * 100);
        let result = (random > 80 - this.level) ? true : false;
        return result;
    }

    render() {
        if(this.bombInst() === true){
            this.list.push(<i className="fas fa-bomb font-small"></i>);
        } else {
            this.list.push(<div>{this.value}</div>);
        } 
        return (
            <div>
                {this.list}
            </div>
        );
    }   
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.list = [];
        this.level = 10;
        this.board = 10;//board × board盤面
        this.state = {
            contents: Array(this.board*this.board).fill(0),//何もない:0 爆弾あり:true
        };
    }

    eventhandle(place) {
        const board = this.board;
        const dkplace = document.getElementById(place);
        document.getElementById(place+board*board).style.display = 'none';
        if(dkplace.innerHTML === "<div><div>0</div></div>") {
            return;
        } else {
            alert('Bomb!!!!💣');
            document.location.reload();
        }
    }

    bombsearch(place) {
        if(document.getElementById(place).innerHTML === '<div><i class="fas fa-bomb font-small"></i></div>') {
            const contents_copy = this.state.contents.slice();
            contents_copy[place] = true;
            this.setState({contents: contents_copy});
        }
    }

    render() {
        const squaresOne = this.state;
        const board = this.board;
        for(let i = 0; i < board; i++){
            this.list.push(<div className="board-row" />);
            for(let j = 0; j < board; j++){
                this.list.push(<button className="square tap" id={i*board+j+board*board} value={squaresOne.contents[i*board+j]} 
                onClick={() => this.eventhandle(i*board+j)}>?</button>);
                this.list.push(<div className="square tapped" id={i*board+j} value={squaresOne.contents[i*board+j]}>
                <Bomb id={i*board+j} value={squaresOne.contents[i*board+j]} level={this.level} board={board}/></div>);
                this.bombsearch(i*board+j);
            }
        }

        return (
            <div>
                <p>{this.board} × {this.board}盤面です</p>
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
                    <div>{}</div>
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