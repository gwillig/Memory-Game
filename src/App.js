import React from 'react';

import './App.css';

class App extends React.Component{
  render(){
    return <div className="container">
            <header>
                <h1>Matching Game</h1>
            </header>

            <section className="score-panel">
            	<ul className="stars">
            		<li id="star_1"><i class="fa fa-star"></i></li>
            		<li id="star_2"><i class="fa fa-star"></i></li>
            		<li id="star_3"><i class="fa fa-star"></i></li>
            	</ul>
            	<span className="moves">3</span> Moves &nbsp&nbsp&nbsp;
                <span id="time">00:00:00</span>
                <div className="restart">
            		<i className="fa fa-repeat" onclick="start_game()"></i>
            	</div>
            </section>
            <div id="deck_div"></div>
            <div className="modal fade" id="modul_won" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div class="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    Yeah, you won.
                    <ul>
                        <li>Total number of moves&nbsp<span id="modul_moves"></span></li>
                        <li>Time&nbsp<span id="modul_time"></span></li>
                        <li>Stars&nbsp<span id="modul_stars"></span></li>
                    </ul>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" data-dismiss="modal" onclick="start_game()">Play again</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
  }

}

export default App;
