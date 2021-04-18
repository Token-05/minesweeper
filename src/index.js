import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';


class Board extends React.Component {
    constructor(props) {
        super(props);
        this.list = [];
        this.level = 0;
        this.board = 8;//board × board盤面
        this.numcount = 0;
        const carray = Array(this.board*this.board).fill(0);
        this.contents = carray.map(() => {
            let result = (Math.floor(Math.random() * 100) > 80 - this.level) ? 9 : 0;
            if(result === 0) this.numcount++;
            return result;
        });//何もない:0 爆弾あり:1
    }

    eventhandle(place) {
        const board = this.board;
        const dkplace = document.getElementById(place);
        document.getElementById(place+board*board).style.display = 'none';
        if(dkplace.innerHTML === '9') {
            alert('Bomb!!!!💣');
            document.location.reload();
        } else {
            this.numcount--;
            if(this.numcount === 0){
                alert("clear!!");
                document.location.reload();
            } else {
                return;
            }
        }
    }

    bombLocation(place) {
        const b = this.board;
        const con = this.contents;
        const placearound = [
            place-1-b,
            place-b,
            place+1-b,
            place-1,
            place+1,
            place-1+b,
            place+b,
            place+1+b
        ];
        placearound.map(x => {
            if((con[x] === 9) && (b*b-1 >= x >= 0)){
                if((place%b===b-1) && (x%b===0)) {} else if((place%b===0) && (x%b===b-1)){} else {
                    con[place] += 1;
                }
            }
        });
    }

    render() {
        const board = this.board;
        for(let i = 0; i < board; i++){
            this.list.push(<div className="board-row" />);
            for(let j = 0; j < board; j++){
                const place = i*board+j;
                if(this.contents[place] !== 9) {
                    this.bombLocation(place);
                }
                this.list.push(<button className="square tap" id={place+board*board} onClick={() => this.eventhandle(place)}>?</button>);
                this.list.push(<div className="square tapped" id={place}>{this.contents[place]}</div>);
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


ReactDOM.render(
    <Game />,
    document.getElementById('root')
);