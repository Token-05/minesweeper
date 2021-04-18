import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.list = [];
        this.level = 10;
        this.board = 10;//board × board盤面
        const carray = Array(this.board*this.board).fill(0);
        this.contents = carray.map(() => {
            const result = (Math.floor(Math.random() * 100) > 80 - this.level) ? 1 : 0;
            return result;
        });//何もない:0 爆弾あり:true
    }

    eventhandle(place) {
        const board = this.board;
        const dkplace = document.getElementById(place);
        document.getElementById(place+board*board).style.display = 'none';
        if(dkplace.innerHTML === "<div>b</div>") {
            alert('Bomb!!!!💣');
            document.location.reload();
        } else {
            return;
        }
    }

    render() {
        const board = this.board;
        for(let i = 0; i < board; i++){
            this.list.push(<div className="board-row" />);
            for(let j = 0; j < board; j++){
                const place = i*board+j;
                this.list.push(<button className="square tap" id={place+board*board} onClick={() => this.eventhandle(place)}>?</button>);
                this.list.push(<div className="square tapped" id={place}>{this.contents[place]}</div>);
                // {this.BombInst(place,board)}
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